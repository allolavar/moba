const ctxP=new Proxy({},{get:(t,k)=>{if(k in t)return t[k];if(k==='createRadialGradient'||k==='createLinearGradient')return()=>({addColorStop(){}});return ()=>{}},set:(t,k,v)=>{t[k]=v;return true}});
const mk=()=>({style:{setProperty(){}},dataset:{},hidden:false,children:[],classList:{toggle(){},add(){}},firstElementChild:{style:{}},addEventListener(){},getContext:()=>ctxP,querySelectorAll:()=>[],querySelector:()=>null,appendChild(){},setAttribute(){},getBoundingClientRect:()=>({width:800,height:600,top:0,bottom:100}),innerHTML:'',textContent:'',clientWidth:100,clientHeight:100,width:0,height:0,remove(){},scrollTop:0});
const els={};global.document={getElementById:id=>els[id]||(els[id]=mk()),createElement:()=>mk(),querySelectorAll:()=>[],addEventListener(){},hidden:false};
global.window={devicePixelRatio:1,innerHeight:800};global.innerWidth=800;global.innerHeight=800;global.devicePixelRatio=1;
const LS={};global.localStorage={getItem:k=>LS[k]??null,setItem(k,v){LS[k]=v}};global.getComputedStyle=()=>({});global.matchMedia=()=>({matches:true});
global.requestAnimationFrame=()=>0;global.addEventListener=()=>{};global.performance={now:()=>1000};global.setTimeout=()=>0;global.clearTimeout=()=>{};global.setInterval=()=>0;
let src=require('fs').readFileSync('t2.js','utf8');
src+=`
for(let g=0;g<2;g++){meta=freshMeta('beast');for(const k of ['scr:heroes','mode:champ','tab:send'])meta.unl[k]=1;sel.mode='champ';sel.hero='roilion';sel.w=0;sel.d='normal';
launch();G.me.mode='push';G.me.manual=false;G.me.lane=0;G.me.mode='defend';
for(let i=0;i<30*1500&&!G.over;i++){step();if(i%Math.round(2.6/DT)===0){
  // simple player AI: send cheapest affordable at max palier
  const T=G.teams[0],cat=arenaCat(T),pm=arenaPalMax();for(let n=0;n<8;n++){const o=[];cat.forEach((e,k)=>{for(let p=Math.max(1,pm-1);p<=pm;p++)if(arenaCost(e,p)<=T.gold-25*pm)o.push([k,p])});if(!o.length)break;const[k,p]=pick(o);arenaSend(0,k,p)}}
  if(i%(30*120)===0){const ns=G.structs.filter(s=>s.type==='nexus').map(s=>Math.round(s.hp));const tw=G.structs.filter(s=>s.type==='tower'&&!s.dead).map(s=>s.team).join('');
   console.log(Math.round(G.t),'inc',G.teams.map(T=>T.inc).join('/'),'gold',G.teams.map(T=>Math.round(T.gold)).join('/'),'units L0',G.units.filter(u=>!u.dead&&u.lane===0&&u.kind!=='hero').length,'L1',G.units.filter(u=>!u.dead&&u.lane===1&&u.kind!=='hero').length,'nexus',ns.join('/'),'tw',tw,'heroes',G.teams.map(T=>T.heroes.map(h=>h.mode[0]+h.lvl+(h.dead?'x':'')).join(',')).join(' | '))}}
console.log('END',G.over,Math.round(G.t),lastEnd&&lastEnd.win,lastEnd&&lastEnd.reason);}
`;
eval(src);
