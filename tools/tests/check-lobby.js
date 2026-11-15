/**
 * Vérification sans dépendances de l'écran d'accueil mobile.
 * À exécuter : node tools/tests/check-lobby.js
 * Les interactions tactiles et l'affichage doivent aussi être testés en navigateur.
 */
"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const repo = path.resolve(__dirname, "../..");
const file = path.join(repo,"jeu/index.html");
const source = fs.readFileSync(file,"utf8");
const css = fs.readFileSync(path.join(repo,"jeu/lobby.css"),"utf8");
const artwork = fs.readFileSync(path.join(repo,"jeu/art/lobby-island.svg"),"utf8");

assert.match(source,/^<!doctype html>/i);
assert.match(source,/<meta name="viewport"/);
assert.match(source,/href="lobby\.css\?v=1"/);
assert.match(source,/function playScreen\(\)/);
assert.match(source,/function launch\(\)/);
assert.match(source,/function lobbyScreen\(\)/);
assert.match(source,/if\(d\.lobbyFight\)/);
assert.match(source,/let curScr='home'/);
assert.match(source,/m\.classList\.add\('tv-lobby-active'\)/);
assert.match(css,/\.tv-lobby-combat/);
assert.match(css,/@media \(max-height:740px\)/);
assert.match(artwork,/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
assert.match(artwork,/<\/svg>\s*$/);

const ids = [...artwork.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
for(const m of artwork.matchAll(/(?:url\(#|href="#)([^")]+)[")]/g))
  assert.ok(ids.includes(m[1]),"Référence SVG manquante : "+m[1]);

const matches=[...source.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(matches.length,1,"Il doit rester un seul script de jeu");
new vm.Script(matches[0][1],{filename:"jeu/index.html"});

const start=source.indexOf("function lobbyScreen(){");
const end=source.indexOf("function renderMeta(){",start);
assert.ok(start>=0&&end>start);
const lobbySource=source.slice(start,end);
const lobby=new Function("meta","sel","WORLDS","FACTIONS","HEROES","HERO_IDS","DIFF","accNeed","worldOpen","svg","curPills",lobbySource+"\nreturn lobbyScreen();");
const result=lobby(
  {start:"alliance",alvl:1,xp:0,deck:{banner:"alliance",lines:["a"]},prog:{}},
  {w:0,d:"normal",mode:"camp"},
  [{id:"w1",name:"Forêt test",fac:"undead"}],
  {alliance:{name:"Alliance"},undead:{name:"Mort-vivants"}},
  {champion:{fac:"alliance",look:"paladin"}},
  ["champion"],
  {normal:{name:"Normal"}},
  ()=>100,()=>true,()=>"<svg></svg>",()=>"<div class='curs'></div>"
);
assert.match(result,/Forêt test/);
assert.match(result,/art\/lobby-island\.svg/);
assert.match(result,/data-lobby-fight="1"/);
assert.match(result,/data-page="play"/);
assert.match(result,/data-profile="1"/);
assert.match(result,/data-page="settings"/);
console.log("OK : lobby, SVG, feuille de style, navigation et syntaxe du moteur.");
