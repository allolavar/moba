/* Regression check for original fantasy SVG artwork and single-file game.
   Run: node tools/tests/check-artwork.js
   Static checks only; always inspect touch interfaces in a browser as well. */
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const root = path.resolve(__dirname, "../..");
const game = path.join(root,"jeu");
const html = fs.readFileSync(path.join(game,"index.html"),"utf8");
const theme = fs.readFileSync(path.join(game,"visual-refresh.css"),"utf8");
const icons = ["nav-market","nav-army","nav-play","nav-fort","nav-missions","bld-citadel","bld-forge","bld-biblio","bld-caserne","bld-atelier","bld-arcanes"];
assert.match(html, /href="visual-refresh\.css\?v=2"/);
assert.match(html, /src="art\/nav-\$\{id\}\.svg"/);
assert.match(html, /src="art\/nav-play\.svg"/);
assert.match(html, /function drawArcanePlinth\(/);
assert.match(html, /function drawPortraitScene\(/);
assert.match(theme, /ARTWORK — PASSE 2/);
for(const icon of icons){
 const filename=path.join(game,"art",icon+".svg");
 assert.ok(fs.existsSync(filename),"Missing SVG: "+icon);
 const svg=fs.readFileSync(filename,"utf8");
 assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
 assert.match(svg, /<\/svg>\s*$/);
 assert.doesNotMatch(svg, /<(script|foreignObject)\b/i);
 const declared=[...svg.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 for(const ref of svg.matchAll(/url\(#([^)]+)\)/g)){
   assert.ok(declared.includes(ref[1]),icon+": missing gradient "+ref[1]);
 }
 if(icon.startsWith("bld-"))assert.ok(html.includes("art/"+icon+".svg"),"Missing building reference: "+icon);
}
for(const file of ["map-w1.jpg","map-w9.jpg","spr-bison-0.png","spr-felins-5.png"])
 assert.ok(fs.existsSync(path.join(game,file)),"Missing original asset: "+file);
const script=html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(script,"Missing game script");
new vm.Script(script[1],{filename:"jeu/index.html"});
console.log("OK — 11 SVG artworks found, all references valid, JavaScript syntax valid, original artwork preserved.");
