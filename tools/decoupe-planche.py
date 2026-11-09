import sys;from PIL import Image;import numpy as np;from scipy import ndimage as nd
src,prefix,outdir=sys.argv[1],sys.argv[2],sys.argv[3]
a=np.array(Image.open(src).convert('RGBA'));al=a[...,3];H,W=al.shape
lab,n=nd.label(nd.binary_opening(al>=200,iterations=2))
cells={}
for i in range(1,n+1):
  m=lab==i
  if m.sum()<1500:continue
  cy,cx=nd.center_of_mass(m);c=(int(cy>=H/2),min(2,int(cx/(W/3))));cells.setdefault(c,[]).append(i)
sz={i:(lab==i).sum() for c in cells for i in cells[c]}
for c in cells:
  mx=max(sz[i] for i in cells[c]);cells[c]=[i for i in cells[c] if sz[i]>=.15*mx]
assert len(cells)==6
crops=[]
for c in sorted(cells):
  keep=nd.binary_dilation(np.isin(lab,cells[c]),iterations=10)
  b=a.copy();b[...,3]=np.where(keep,b[...,3],0);b[...,3]=np.where(b[...,3]<40,0,b[...,3])
  im=Image.fromarray(b);crops.append(im.crop(im.getbbox()))
S=int(max(max(im.size) for im in crops)/0.88)
for k,im in enumerate(crops):
  w,h=im.size;cv=Image.new('RGBA',(S,S),(0,0,0,0));cv.paste(im,((S-w)//2,S-h-int(S*.03)),im)
  cv.resize((256,256),Image.LANCZOS).save(f'{outdir}/{prefix}-{k}.png',optimize=True)
print(prefix,[im.size for im in crops])
