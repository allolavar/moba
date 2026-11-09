const ctxP=new Proxy({},{get:(t,k)=>{if(k in t)return t[k];if(k==='createRadialGradient'||k==='createLinearGradient')return()=>({addColorStop(){}});return ()=>{}},set:(t,k,v)=>{t[k]=v;return true}});
const mk=()=>({style:{setProperty(){}},dataset:{},hidden:false,children:[],classList:{toggle(){},add(){}},firstElementChild:{style:{}},addEventListener(){},getContext:()=>ctxP,querySelectorAll:()=>[],querySelector:()=>null,appendChild(){},setAttribute(){},getBoundingClientRect:()=>({width:800,height:600,top:0,bottom:100}),innerHTML:'',textContent:'',clientWidth:100,clientHeight:100,width:0,height:0,remove(){},scrollTop:0});
const els={};global.document={getElementById:id=>els[id]||(els[id]=mk()),createElement:()=>mk(),querySelectorAll:()=>[],addEventListener(){},hidden:false};
global.window={devicePixelRatio:1,innerHeight:800};global.innerWidth=800;global.innerHeight=800;global.devicePixelRatio=1;
const LS={};global.localStorage={getItem:k=>LS[k]??null,setItem(k,v){LS[k]=v}};global.getComputedStyle=()=>({});global.matchMedia=()=>({matches:true});
global.requestAnimationFrame=()=>0;global.addEventListener=()=>{};global.performance={now:()=>1000};global.setTimeout=()=>0;global.clearTimeout=()=>{};global.setInterval=()=>0;
let src=require('fs').readFileSync('t2.js','utf8');
src+=`
for(let g=0;g<2;g++){meta=freshMeta('beast');for(const k of ['scr:heroes','mode:siege'])meta.unl[k]=1;sel.mode='siege';sel.hero='roilion';sel.w=0;sel.d='normal';
launch();G.me.manual=false;G.me.mode='defend';G.me.lane=0;G.me.ally=true;
for(let i=0;i<30*1800&&!G.over;i++){step();if(i%300===0)allyItems(G.me);if(i%(30*90)===0){const ns=G.structs.filter(s=>s.type==='nexus').map(s=>Math.round(s.hp));
  console.log(Math.round(G.t),'wave',G.wave,'open',G.sg.open.join(''),G.sg.phase,'gold',Math.round(G.teams[0].gold),'units',G.units.filter(u=>!u.dead&&u.team===1).length,'nexus',ns.join('/'),'tw',G.structs.filter(s=>s.team===0&&s.type==='tower'&&!s.dead).length,'heroes',G.teams[0].heroes.map(h=>h.mode[0]+h.lane+'L'+h.lvl+(h.dead?'x':'')).join(','))}}
console.log('END',G.over,Math.round(G.t),lastEnd&&lastEnd.win,lastEnd&&lastEnd.reason);}
`;
eval(src);
