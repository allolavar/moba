const ctxP=new Proxy({},{get:(t,k)=>{if(k in t)return t[k];if(k==='createRadialGradient'||k==='createLinearGradient')return()=>({addColorStop(){}});return ()=>{}},set:(t,k,v)=>{t[k]=v;return true}});
const mk=()=>({style:{setProperty(){}},dataset:{},hidden:false,children:[],classList:{toggle(){},add(){}},firstElementChild:{style:{}},addEventListener(){},getContext:()=>ctxP,querySelectorAll:()=>[],querySelector:()=>null,appendChild(){},setAttribute(){},getBoundingClientRect:()=>({width:800,height:600,top:0,bottom:100}),innerHTML:'',textContent:'',clientWidth:100,clientHeight:100,width:0,height:0,remove(){},scrollTop:0});
const els={};global.document={getElementById:id=>els[id]||(els[id]=mk()),createElement:()=>mk(),querySelectorAll:()=>[],addEventListener(){},hidden:false};
global.window={devicePixelRatio:1,innerHeight:800};global.innerWidth=800;global.innerHeight=800;global.devicePixelRatio=1;
const LS={};global.localStorage={getItem:k=>LS[k]??null,setItem(k,v){LS[k]=v}};global.getComputedStyle=()=>({});global.matchMedia=()=>({matches:true});
global.requestAnimationFrame=()=>0;global.addEventListener=()=>{};global.performance={now:()=>1000};global.setTimeout=()=>0;global.clearTimeout=()=>{};global.setInterval=()=>0;
let src=require('fs').readFileSync('t2.js','utf8');
src+=`
const res=[];
for(let g=0;g<4;g++){meta=freshMeta('beast');for(const k of ['scr:heroes','mode:champ'])meta.unl[k]=1;sel.mode='champ';sel.hero='roilion';sel.w=0;sel.d='normal';
launch();G.me.mode='push';let i=0;for(;i<36000&&!G.over;i++){step();if(i%150===0){const T=G.teams[0];const c=sendCost(T,0);if(T.gold>c+200)sendMonsters(0,Math.floor(Math.random()*T.deck.length),Math.floor(Math.random()*3));aiItems(G.me,T)}}
res.push([G.over,lastEnd&&lastEnd.win,Math.round(G.t),G.me.lvl,G.teams[1].heroes.map(h=>h.lvl).join('/'),G.st.heroes,G.teams[0].kills,G.teams[1].kills].join(' '))}
console.log(res.join('\\n'));
`;
eval(src);
