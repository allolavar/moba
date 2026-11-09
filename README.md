# Trois Voies

Jeu mobile de stratégie fantasy entre gestion d'armée et MOBA, avec des modes à héros inspirés de Warcraft 3 (X Hero Siege).
Tout le jeu tient dans un seul fichier HTML/JavaScript (`jeu/index.html`), sans dépendance ni installation.

## Lancer le jeu

Le jeu charge ses images depuis son dossier : il faut le servir par un petit serveur local.

```
cd jeu
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 dans le navigateur (ordinateur ou téléphone sur le même réseau).
Le dossier `jeu/` peut aussi être publié tel quel sur GitHub Pages.

## Modes de jeu

| Mode | Principe |
| --- | --- |
| Campagne | Gestion des 3 voies : bastions, monstres, héros à ordres, sorts. 9 mondes illustrés. |
| Champions 2 contre 2 | Arène à deux côtés séparés. Chaque camp défend sa voie, envoie des monstres chez l'adversaire (▲ revenu, ✕ prime), contrôle son héros et s'équipe. |
| Siège | Coopératif façon X Hero Siege : citadelle au centre, 4 portails ennemis, vagues par paliers, Champion des ténèbres, vague finale et Seigneur de guerre. On choisit jusqu'à 3 alliés parmi ses héros et on peut changer de héros en jeu. |

## Écran de combat

- Plein écran, à l'horizontale sur téléphone.
- Pas de menus affichés : on les ouvre en touchant les bâtiments de sa base (Forge, Bibliothèque, Caserne, Atelier, Tour des arcanes, Citadelle).
- Symboles plutôt que texte sur la carte ; le texte n'apparaît que dans le panneau latéral.
- Déplacement : pad tactile sur mobile, clic droit à la souris sur PC.

## Contenu du dépôt

| Chemin | Rôle |
| --- | --- |
| `jeu/index.html` | Le jeu complet (moteur canvas, méta-progression, catalogue généré) |
| `jeu/map-w1.jpg` … `map-w9.jpg`, `mapt-w*.jpg` | Cartes peintes des 9 mondes et leurs miniatures |
| `jeu/spr-<lignée>-<forme>.png` | Monstres illustrés (6 formes par lignée, 256 px) |
| `jeu/ico-*.png`, `logo.webp`, `bg-*.jpg` | Icônes de menu, logo, fonds |
| `docs/bible-du-projet.md` / `.pdf` | Bible du projet : factions, monstres, héros, objets, systèmes, visuels |
| `docs/conception.md` | Règles de conception permanentes |
| `tools/tests/` | Simulations Node (Campagne, Arène, Siège) |
| `tools/decoupe-planche.py` | Découpe une planche ChatGPT 3 × 2 en 6 images de monstres |
| `tools/doc/gen.js` | Génère les tableaux héros et lignées de la Bible |

## Ajouter une planche de monstres

1. Générer la planche 3 × 2 (fond transparent) avec le prompt de la Bible.
2. `python3 tools/decoupe-planche.py planche.png <lignée> jeu/` produit `<lignée>-0.png` à `<lignée>-5.png` ; les renommer en `spr-<lignée>-N.png`.
3. Ajouter la lignée dans `SPR_SET` (lignées de base) ou `SPR_SP` (espèces des lignées générées) dans `jeu/index.html`.

## Tests

```
cd tools/tests
python3 mkt2.py      # extrait le script du jeu vers t2.js
node t5.js           # tests généraux
node tS.js           # simulation du mode Siège
node tA.js           # simulation de l'Arène
```

## Sauvegarde

La progression du joueur est stockée dans le `localStorage` du navigateur (clé `tv2_meta`).
