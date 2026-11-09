const ctxP=new Proxy({},{get:(t,k)=>{if(k in t)return t[k];if(k==='createRadialGradient'||k==='createLinearGradient')return()=>({addColorStop(){}});return ()=>{}},set:(t,k,v)=>{t[k]=v;return true}});
const mk=()=>({style:{setProperty(){}},dataset:{},hidden:false,children:[],classList:{toggle(){},add(){}},firstElementChild:{style:{}},addEventListener(){},getContext:()=>ctxP,querySelectorAll:()=>[],querySelector:()=>null,appendChild(){},setAttribute(){},getBoundingClientRect:()=>({width:800,height:600,top:0,bottom:100}),innerHTML:'',textContent:'',clientWidth:100,clientHeight:100,width:0,height:0,remove(){},scrollTop:0});
const els={};global.document={getElementById:id=>els[id]||(els[id]=mk()),createElement:()=>mk(),querySelectorAll:()=>[],addEventListener(){},hidden:false};
global.window={devicePixelRatio:1,innerHeight:800};global.innerWidth=800;global.innerHeight=800;global.devicePixelRatio=1;
const LS={};global.localStorage={getItem:k=>LS[k]??null,setItem(k,v){LS[k]=v}};global.getComputedStyle=()=>({});global.matchMedia=()=>({matches:true});
global.requestAnimationFrame=()=>0;global.addEventListener=()=>{};global.performance={now:()=>1000};global.setTimeout=()=>0;global.clearTimeout=()=>{};global.setInterval=()=>0;
let src=require('fs').readFileSync('t2.js','utf8');
src+=`
const cnt={};for(const f of FAC_IDS)cnt[f]=[linesOf(f).length,HERO_IDS.filter(h=>HEROES[h].fac===f).length,availLines(f).length];console.log('catalogue',JSON.stringify(cnt));
for(const h of HERO_IDS){const H=HEROES[h];if(!LOOKS[H.look])console.log('NOLOOK',h);if(H.sk.length!==4||H.sk.some(s=>!s.name||!s.desc))console.log('BADSK',h)}
meta=freshMeta('beast');meta.ecl=99999;meta.pts=60;
for(const k of ['page:army','page:fort','page:market','page:missions','scr:deck','scr:boosters','scr:collection','scr:heroes','scr:fortress','scr:talents','scr:codex','scr:arsenal','sub:hero:relics','mode:champ','voie:heros','tab:heroes','tab:forge','tab:defenses','tab:spells','tab:chaos','tab:bastions','tab:champ','tab:send','page:play'])meta.unl[k]=1;
for(let i=0;i<30;i++)openPack('beast');for(let i=0;i<10;i++)openPack('royal');
console.log('owned heroes',HERO_IDS.filter(h=>meta.heroes[h]).length,'lines',LINE_IDS.filter(l=>meta.lines[l]).length,'tomes',meta.tomes,'grim',meta.grim);
for(const pg of ['play','market','army','fort','missions','settings'])for(const t of (PAGES[pg]&&PAGES[pg].tabs)||['x']){sub['p_'+pg]=t;curScr=pg;renderMeta()}
sub.codex='units';sub.p_army='codex';curScr='army';renderMeta();sub.codex='skills';renderMeta();sub.colEra=3;sub.p_army='collection';renderMeta();
const hid=HERO_IDS.find(h=>meta.heroes[h]&&HEROES[h].fac==='beast'&&HEROES[h].rar>=2)||'roilion';heroModal(hid);meta.unl['hslot:'+hid+':0']=1;meta.unl['art:nova']=1;hm(hid).xs=['nova'];addHeroXp(hid,5000);heroModal(hid);console.log('hero',hid,hm(hid).xl,hm(hid).sp,nSlots(hid));
meta.voie='heros';for(const n of VOIES[0].nodes)meta.nodes[n.id]=1;for(const o in ORD)meta.unl['ord:'+o]=1;for(const b in BST_P)meta.unl['bst:'+b]=1;
sel.mode='champ';sel.hero=hid;curScr='play';renderMeta();
// campaign
sel.mode='camp';sel.w=2;sel.d='normal';meta.deck.heroes=[hid];launch();
for(const tb of GTABS){G.tab=tb.id;renderTab()}G.teams[0].gold=5000;recruitHero(0,hid,1);const h0=G.teams[0].heroes[0];h0.hunt=1;h0.u20=1;order(h0,'roam');
for(let i=0;i<18000&&!G.over;i++){step();if(i%300===0){G.tab=['heroes','bastions','defenses','spells'][i/300%4|0];renderTab();refreshTab()}}
console.log('camp',G.over,Math.round(G.t),'lvl',h0.lvl,'skl',h0.skl.length,'casts cd',h0.sk.map(s=>s.cl.toFixed(0)).join());
// champions
meta.voie='arcanes';for(const n of VOIES[2].nodes)meta.nodes[n.id]=1;
sel.mode='champ';sel.d='normal';sel.w=1;launch();console.log('champ heroes',G.teams[0].heroes.map(h=>h.name+(h.manual?'*':'')).join(','),'vs',G.teams[1].heroes.map(h=>h.name).join(','));
for(const tb of CTABS){G.tab=tb.id;renderTab()}
let casts=0;for(let i=0;i<20000&&!G.over;i++){step();const me=G.me;
 if(i%60===0&&!me.dead){const e=G.units.find(u=>u.team===1&&dist(u,me)<250);if(e){me.cmdT=e}else me.movePt={x:me.x+40,y:me.y-40};for(let k=0;k<me.skl.length;k++)if(useSkill(me,k,true))casts++}
 if(i%200===0){G.teams[0].gold+=100;sendMonsters(0,0,i/200%3|0);G.tab='champ';renderTab();refreshSkbar()}}
console.log('champ',G.over,Math.round(G.t),'me lvl',G.me.lvl,'casts',casts,'tomes',meta.tomes,lastEnd&&lastEnd.vs);
// spells in campaign
meta.voie='arcanes';sel.mode='camp';launch();G.teams[0].mana=150;for(let i=0;i<900;i++)step();console.log('spell',castSpell(0,'meteore',1),castSpell(0,'cata',0),G.teams[0].mana|0);
meta.voie='peuple';for(const n of VOIES[1].nodes)meta.nodes[n.id]=1;meta.bast.items=[[Object.keys(meta.relics)[0]],[],[]];launch();console.log('bitems',JSON.stringify(G.teams[0].bitems),G.teams[0].bpct);G.teams[0].gold=2000;console.log('build',buildTower(0,1));for(let i=0;i<3000;i++)step();console.log('peuple ok',Math.round(G.t));
`;
eval(src);
