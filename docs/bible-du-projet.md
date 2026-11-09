# Trois Voies – Bible du projet

Nov 1, 2026 · @Berlanger Lucien

## Le projet en bref

Trois Voies est un jeu de stratégie sur mobile, entre gestion d’armée et MOBA : deux camps s’affrontent sur une carte à trois voies, une jungle et deux boss, jusqu’à la chute d’un Nexus.

**Le fantasme du joueur** : être le commandant d’une faction. Il envoie ses monstres sur les voies depuis ses bastions, fait évoluer ses créatures et ses héros entre les parties, et choisit une Voie de spécialisation.

### Les modes de jeu

| Mode | État | Principe |
| --- | --- | --- |
| Campagne | Disponible | 5 mondes (bientôt 9), 4 difficultés et 3 défis par monde. Le joueur gère ses 3 bastions, ses tours et ses héros. |
| Champions 2 contre 2 | Disponible | Le joueur incarne un seul héros, avec un allié IA. Il envoie des monstres chez l’adversaire et défend sa citadelle. |
| Survie, Assaut de boss, Ascension, Voie unique, Chaos total, Siège, Défense, Défi du jour | À venir | Variantes déjà décrites dans le menu Modes de jeu. |
| Duel | À venir | Deux joueurs, sur le même écran puis en ligne. |

### La boucle de jeu

1. **En partie** : une vague de 2 sbires part de chaque Nexus toutes les 25 s, plus les monstres placés dans les bastions. Le joueur gagne de l’or, ajoute des monstres, fusionne 3 monstres identiques pour monter leurs étoiles, améliore ses voies et ses tours, et donne des ordres à ses héros.
2. **Après la partie** : éclats, cristaux, points de talent, tomes et niveau de commandant.
3. **Hors partie** : boosters de cartes, évolution des lignées (6 formes), progression des héros, reliques, talents et Voies, emplacements des bastions.

### Les monnaies

| Monnaie | Sert à | Gagnée par |
| --- | --- | --- |
| Éclats | Tout débloquer, boosters, évolutions | Parties, missions, cadeaux, coffre |
| Cristaux d’invocation | Emplacements des bastions | Victoires, missions, change au Marché (200 éclats) |
| Points de talent | Nœuds des arbres et des Voies | Parties |
| Tomes et grimoires | Maîtrise et compétences des héros | Parties, boosters, cadeaux, coffre |
| Fragments | Améliorer les reliques | Doublons de reliques |

### Règle des déblocages

Rien n’est gratuit sauf la première faction. Le joueur démarre avec 200 éclats et un achat gratuit. Chaque page, écran, onglet, ordre ou amélioration s’achète avec des éclats ou des publicités, et une seule chose par menu est offerte. Le contenu s’ouvre aussi par ères : 120 héros et 300 lignées répartis en 5 ères, ouvertes aux niveaux de commandant 1, 6, 12, 20 et 30.

## Direction artistique

Tous les visuels suivent une seule charte, pour que les 120 héros, les 9 cartes et les menus aient l’air du même jeu. On la colle en tête de chaque demande à ChatGPT.

**Bloc de style à coller avant chaque instruction :**

```
Style : illustration numérique de fantasy, peinte à la main, lisible sur un petit écran de téléphone. Contours nets, formes simples et fortes, lumière douce venant du haut à gauche, ombres courtes. Couleurs riches mais légèrement assombries, avec une couleur d’accent par faction. Pas de texte, pas de logo, pas de cadre, pas de signature.
```

### Couleurs des factions

| Faction | Peuple | Couleur principale | Accent | Matières |
| --- | --- | --- | --- | --- |
| L’Essaim | Insectes | Ambre #D9A521 | Vert acide #C8F06A | Chitine, résine, venin |
| La Légion Morte | Morts-vivants | Turquoise spectral #5FD3C0 | #7FE0D0 | Os, fer noirci, brume |
| L’Alliance des Forges | Humains, nains, gnomes | Bleu royal #6F97E0 | Or #FFD27A | Acier, cuivre, vapeur |
| Le Cercle Sylvain | Elfes, tréants, dryades, fées | Vert feuille #7FCF6A | Vert lumineux #B8FF8A | Écorce, feuilles, lune |
| La Horde Sauvage | Bêtes | Orange fauve #E0803E | Sable #E0A66A | Fourrure, crocs, pierre |

### Règles par type de visuel

| Type | Format | Fond | Cadrage |
| --- | --- | --- | --- |
| Carte de monde | Carré 2048 × 2048 | Plein | Vue strictement du dessus, sans personnage ni bâtiment |
| Portrait de héros | Carré 1024 × 1024 | Transparent | Buste de trois-quarts, regard vers la gauche, centré |
| Illustration de créature | Carré 1024 × 1024 | Transparent | Corps entier, de trois-quarts, pieds en bas |
| Icône d’objet ou de compétence | Carré 512 × 512 | Transparent | Objet seul, centré, grand dans le cadre |
| Fond de menu | Portrait 1080 × 1920 | Plein | Centre calme et sombre, pour y poser des boutons |

Les créatures qui bougent sur la carte restent dessinées par le code : leurs illustrations servent aux cartes, à la collection et aux boosters.

## Visuels à produire : menus et interface

Voici les 22 visuels de menu dont j’ai besoin, par ordre de priorité. Pour chacun : colle le bloc de style, puis l’instruction. Envoie-les-moi par lots.

### Priorité 1 : écran d’accueil et navigation

| # | Visuel | Format | Instruction à donner à ChatGPT |
| --- | --- | --- | --- |
| M1 | Logo « Trois Voies » | 1600 × 800, fond transparent | Le titre « Trois Voies » gravé dans une pierre ancienne, trois chemins lumineux (bleu, or, rouge) qui se rejoignent en dessous, lettrage fantasy épique et très lisible. Seul visuel de la liste qui contient du texte. |
| M2 | Fond de l’écran d’accueil | 1080 × 1920 | Vue aérienne au crépuscule d’une vallée traversée par trois routes qui mènent à deux citadelles de cristal qui se font face, une bleue en bas et une rouge en haut. Centre de l’image calme et sombre. |
| M3 | Fond des pages de menu | 1080 × 1920 | Grande table de guerre en bois sombre, vue du dessus, avec une carte parchemin effacée, des figurines, une bougie dans un coin. Très sombre, sans détail au centre. |
| M4 | Bouton central « Jouer » | 512 × 512, transparent | Médaillon rond en or massif avec deux épées croisées gravées, lueur dorée chaude. |
| M5 à M8 | Icônes de la barre du bas | 256 × 256 chacune, transparent | Une icône par page : un sac de marchand en cuir (Marché), un bouclier à blason (Armée), une tour de forteresse (Forteresse), un parchemin scellé (Missions). Même style d’objet sculpté or et pierre. |

### Priorité 2 : boutique et récompenses

| # | Visuel | Format | Instruction |
| --- | --- | --- | --- |
| M9 à M13 | Paquets de booster, un par faction | 768 × 1024, transparent | Un paquet de cartes scellé, debout, aux couleurs de la faction (voir la charte), avec l’emblème de la faction en relief et une lueur qui s’échappe des bords. |
| M14 | Booster royal | 768 × 1024, transparent | Même paquet en or et velours pourpre, cinq emblèmes de faction autour d’une couronne. |
| M15 | Dos de carte | 768 × 1024 | Dos de carte à collectionner, motif symétrique de trois chemins entrelacés autour d’un cristal, bleu nuit et or. |
| M16 | Coffre | 512 × 512, transparent | Coffre au trésor ferré, entrouvert, lueur dorée. |
| M17 | Cadeau du jour | 512 × 512, transparent | Boîte cadeau fantasy nouée d’un ruban, avec un petit cristal sur le dessus. |
| M18 | Monnaies (3 icônes) | 256 × 256 chacune, transparent | Un éclat de cristal bleu, un cristal d’invocation violet à facettes, une étoile de talent dorée. |

### Priorité 3 : identité des factions et fin de partie

| # | Visuel | Format | Instruction |
| --- | --- | --- | --- |
| M19 | Emblèmes des 5 factions | 512 × 512 chacun, transparent | Un blason par faction : une mante stylisée (Essaim), un crâne couronné (Légion Morte), un marteau sur une enclume (Alliance), un arbre dans une lune (Cercle Sylvain), une tête de lion rugissant (Horde Sauvage). |
| M20 | Bannière de victoire | 1600 × 600, transparent | Grande bannière dorée déchirée au vent avec des lauriers, sans texte. |
| M21 | Bannière de défaite | 1600 × 600, transparent | Même bannière, en tissu sombre brûlé, sans texte. |
| M22 | Fond de l’ouverture de booster | 1080 × 1920 | Halo de lumière magique au centre d’une pièce sombre, poussière scintillante. |

## Visuels à produire : cartes, héros, objets

Les 9 cartes de monde sont faites. Il reste les portraits des héros, puis les icônes d’objets et de compétences.

### Cartes des mondes : terminées

| Monde | Faction adverse | Carte reçue |
| --- | --- | --- |
| 1. Les Steppes sauvages | Horde Sauvage | Désert et canyons |
| 2. Les Ruches d’ambre | Essaim | Forêt d’automne |
| 3. La Sylve ancienne | Cercle Sylvain | Forêt violette lumineuse |
| 4. Les Forges de Kharak | Alliance | Roche volcanique et lave |
| 5. Les Cryptes gelées | Légion Morte | Forêt enneigée |
| 6. Les Marais d’émeraude | Légion Morte | Marais |
| 7. Les Îles célestes | Cercle Sylvain | Îles flottantes |
| 8. La Jungle des Titans | Horde Sauvage | Jungle et cascades |
| 9. Les Ruines royales | Alliance | Jungle et arènes de pierre |

### Portraits des héros : 120 visuels

Un portrait par héros, faction par faction, dans l’ordre de la section « Les 120 héros ». Chaque fiche de héros donne une ligne « Visuel » prête à coller après cette instruction :

```
Portrait de personnage de jeu, buste de trois-quarts tourné vers la gauche, centré, fond transparent, format carré 1024 × 1024. Expression héroïque. Personnage :
[coller ici la ligne Visuel du héros]
```

Commence par les 8 héros de l’ère I de ta faction de départ. Garde la même conversation ChatGPT pour toute une faction, et joins le premier portrait réussi comme référence de style.

### Objets et reliques : 25 icônes

Format 512 × 512, fond transparent, l’objet seul et centré. La liste complète avec les descriptions est dans la dernière section.

| Groupe | Nombre | Exemples |
| --- | --- | --- |
| Composants de forge | 6 | Épée longue, Dague, Gemme de rubis, Cotte de mailles, Bottes, Amulette de sève |
| Objets complets | 7 | Lame vampirique, Hache du Titan, Arc-tempête, Égide du bastion, Cuirasse d’épines, Bottes de guerre, Couronne du Fléau |
| Reliques | 10 | Carapace de reine, Dard de jade, Phylactère, Lame de givre, Marteau ancestral, Bouclier de Kharak, Arc de lune, Couronne de ronces, Croc de l’alpha, Peau de béhémoth |
| Ressources | 2 | Tome d’expérience (livre rouge à étoile dorée), Grimoire (livre violet à cristal) |

### Icônes de compétences : 32 icônes

Format 256 × 256, fond transparent, symbole simple dans un médaillon rond. 17 types de compétences de héros, 10 compétences de monstres et 5 sorts du commandant, tous décrits dans la dernière section. Une seule icône par type suffit : la couleur de faction sera ajoutée par le jeu.

## Les 5 factions

Chaque faction compte 24 héros et 60 lignées de monstres, avec ses propres sbires de base. Le joueur commence avec une faction offerte et débloque les autres avec 500 éclats et un niveau de commandant.

| Faction | Peuple | Style de jeu | Sbires de base | Héros emblématiques |
| --- | --- | --- | --- | --- |
| L’Essaim | Insectes | Nuées jetables, venins et carapaces de siège | Fourmi, cracheur, scarabée | Mante-Lame, Matriarche, Seigneur-Scarabée |
| La Légion Morte | Morts-vivants | Ils se relèvent, drainent la vie, ne reculent jamais | Squelette guerrier, squelette archer, chariot d’os | Chevalier de la Mort, Liche, Reine Banshee |
| L’Alliance des Forges | Humains, nains, gnomes | Acier humain, carabines naines, machines gnomes | Fantassin, fusilier nain, canon | Paladin, Roi-Forgeron, Inventeur gnome |
| Le Cercle Sylvain | Elfes, tréants, dryades, fées | Les elfes et la forêt combattent ensemble | Lame elfe, archer elfe, pousse | Gardienne lunaire, Druide-Cerf, Sylve-Mère |
| La Horde Sauvage | Bêtes | Meutes rapides, fauves en frénésie, charges | Loup, singe, sanglier | Roi-Lion, Grand Dos-Argenté, Louve de lune |

### Les ères

| Ère | Niveau de commandant | Héros par faction | Lignées par faction |
| --- | --- | --- | --- |
| I | 1 | 8 | 10 |
| II | 6 | 5 | 10 |
| III | 12 | 5 | 12 |
| IV | 20 | 6 | 14 |
| V | 30 | 0 | 14 |

## Les 120 héros

Chaque faction a 24 héros : 3 héros historiques avec une compétence signature, et 21 héros construits sur 7 titres et 3 lignées (épithètes). Chaque héros a 4 compétences (Q, W, E, R) selon son rôle, un passif, et jusqu’à 2 emplacements libres. La colonne Visuel se colle dans l’instruction de portrait.

### L’Essaim

**Kits de compétences par rôle** (les héros d’un même rôle partagent ce kit ; les rangs et les emplacements libres les différencient)

| Rôle | Q (niv. 1) | W (niv. 2) | E (niv. 3) | R ultime (niv. 6) |
| --- | --- | --- | --- | --- |
| Tireur | **Rafale de dards** : tire sur 4 ennemis à la fois (×1,2) | **Bond chitineux** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Phéromones** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Tempête de dards** : jusqu’à 10 projectiles sur les ennemis à portée (×1,8) |
| Mage | **Nuage de spores** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Toile** : étourdit sa cible 1,4 s (×0,9) | **Pluie acide** : zone à distance, ×1,6 et ralentit | **Essaim dévorant** : immense zone ×2,6 qui étourdit 1 s |
| Colosse | **Toile** : étourdit les ennemis autour de sa cible 1,4 s (×0,9) | **Carapace** : bouclier de 20 % de ses PV pendant 4 s | **Nuage de spores** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Essaim dévorant** : immense zone ×2,6 qui étourdit 1 s |
| Assassin | **Taillade** : frappe ×2,2 sa cible | **Bond chitineux** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Succion** : frappe ×1,9 et rend 60 % des dégâts en PV | **Dard mortel** : frappe ×3,5 plus 30 % des PV manquants de la cible |
| Soigneur | **Gelée royale** : soigne les alliés proches de 18 % de ses PV max | **Carapace** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Toile** : étourdit sa cible 1,4 s (×0,9) | **Ruche-mère** : soigne tous les alliés proches de 35 % et leur donne un bouclier |
| Invocateur | **Couvée** : invoque 2 créatures de la lignée Couvée | **Nuage de spores** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Carapace** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Reine-mère** : invoque 3 créatures ★2 plus évoluées de la lignée Carapaces |
| Meneur | **Phéromones** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Taillade** : frappe ×2,2 sa cible | **Gelée royale** : soigne les alliés proches de 18 % de ses PV max | **Frénésie de ruche** : +35 % de dégâts et de cadence et un bouclier aux alliés, 8 s |

| Héros | Rôle · rareté · ère | Description | PV · attaque · portée | Passif | Visuel |
| --- | --- | --- | --- | --- | --- |
| **Mante-Lame** | Assassin · Rare · I | Assassine de la reine, elle tranche les héros ennemis en un éclair. Signature : Coupe-gorge (frappe triple sur sa cible). | 820 · 58 · 24 | Venin : ses coups empoisonnent | mante géante verte aux bras-faux, lueur vert acide |
| **Matriarche** | Invocatrice · Épique · I | Mère de la ruche, elle fait éclore des couvées entières au milieu du combat. Signature : Couvée (fait éclore 3 créatures de la couvée). | 760 · 38 · 92 | Phéromones : +15 % de vitesse aux alliés proches | reine insecte ailée orange à l’abdomen énorme, couronne |
| **Seigneur-Scarabée** | Colosse · Légendaire · I | Seigneur cuirassé au cuir d’épines, il brise les lignes ennemies. Signature : Charge sismique (onde de choc qui ralentit). | 1250 · 44 · 24 | Carapace d’épines : renvoie 30 % des dégâts de mêlée | seigneur scarabée violet blindé, grandes cornes, couronne |
| **Reine-guêpe d’Ambre** | Tireur · Rare · I | Sa chitine a la couleur de la résine des ruches. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 703 · 48 · 120 | Épines : renvoie 20 % des dégâts de mêlée | reine guêpe géante, ailes translucides, couronne de chitine, long dard venimeux, teintes ambre et miel |
| **Tisseuse d’Ambre** | Mage · Rare · I | Sa chitine a la couleur de la résine des ruches. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 742 · 41 · 100 | Épines : renvoie 20 % des dégâts de mêlée | araignée-mage à l’abdomen énorme, fils de soie lumineux entre ses pattes, teintes ambre et miel |
| **Broyeur d’Ambre** | Colosse · Rare · I | Sa chitine a la couleur de la résine des ruches. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1250 · 42 · 26 | Épines : renvoie 20 % des dégâts de mêlée | immense scarabée cornu blindé, mandibules de broyeur, teintes ambre et miel |
| **Faucheur d’Ambre** | Assassin · Épique · I | Sa chitine a la couleur de la résine des ruches. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 795 · 60 · 24 | Épines : renvoie 20 % des dégâts de mêlée | mante géante aux bras-faux tranchants, posture d’attaque, teintes ambre et miel |
| **Nourricière d’Ambre** | Soigneur · Rare · I | Sa chitine a la couleur de la résine des ruches. Soutien qui soigne et protège les alliés au cœur du combat. | 945 · 36 · 90 | Épines : renvoie 20 % des dégâts de mêlée | abeille-nourrice aux ailes larges, porte un rayon de gelée royale lumineuse, teintes ambre et miel |
| **Seigneur-essaim d’Ambre** | Invocateur · Rare · II | Sa chitine a la couleur de la résine des ruches. Chef de meute qui fait surgir des créatures pour submerger la voie. | 796 · 37 · 95 | Épines : renvoie 20 % des dégâts de mêlée | reine-mère ailée à l’abdomen gonflé, entourée de larves, teintes ambre et miel |
| **Héraut d’Ambre** | Meneur · Rare · II | Sa chitine a la couleur de la résine des ruches. Chef de guerre qui galvanise les troupes autour de lui. | 970 · 48 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | guerrier-insecte cuirassé à épines, mandibules dressées, bannière de chitine, teintes ambre et miel |
| **Reine-guêpe de Jade** | Tireur · Épique · II | Ses armes suintent un venin vert pâle. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 740 · 46 · 120 | Venin : ses coups empoisonnent | reine guêpe géante, ailes translucides, couronne de chitine, long dard venimeux, teintes vert jade, venin luisant |
| **Tisseuse de Jade** | Mage · Rare · II | Ses armes suintent un venin vert pâle. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 698 · 43 · 100 | Venin : ses coups empoisonnent | araignée-mage à l’abdomen énorme, fils de soie lumineux entre ses pattes, teintes vert jade, venin luisant |
| **Broyeur de Jade** | Colosse · Rare · II | Ses armes suintent un venin vert pâle. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1313 · 40 · 26 | Venin : ses coups empoisonnent | immense scarabée cornu blindé, mandibules de broyeur, teintes vert jade, venin luisant |
| **Faucheur de Jade** | Assassin · Épique · III | Ses armes suintent un venin vert pâle. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 836 · 57 · 24 | Venin : ses coups empoisonnent | mante géante aux bras-faux tranchants, posture d’attaque, teintes vert jade, venin luisant |
| **Nourricière de Jade** | Soigneur · Légendaire · III | Ses armes suintent un venin vert pâle. Soutien qui soigne et protège les alliés au cœur du combat. | 891 · 38 · 90 | Venin : ses coups empoisonnent | abeille-nourrice aux ailes larges, porte un rayon de gelée royale lumineuse, teintes vert jade, venin luisant |
| **Seigneur-essaim de Jade** | Invocateur · Épique · III | Ses armes suintent un venin vert pâle. Chef de meute qui fait surgir des créatures pour submerger la voie. | 749 · 40 · 95 | Venin : ses coups empoisonnent | reine-mère ailée à l’abdomen gonflé, entourée de larves, teintes vert jade, venin luisant |
| **Héraut de Jade** | Meneur · Épique · III | Ses armes suintent un venin vert pâle. Chef de guerre qui galvanise les troupes autour de lui. | 1019 · 46 · 24 | Aura du meneur : +15 % de vitesse aux alliés proches | guerrier-insecte cuirassé à épines, mandibules dressées, bannière de chitine, teintes vert jade, venin luisant |
| **Reine-guêpe de Cendre** | Tireur · Épique · III | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 777 · 44 · 120 | Soif : vol de vie 18 % | reine guêpe géante, ailes translucides, couronne de chitine, long dard venimeux, teintes brun cendre, braises orange |
| **Tisseuse de Cendre** | Mage · Légendaire · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 734 · 41 · 100 | Soif : vol de vie 18 % | araignée-mage à l’abdomen énorme, fils de soie lumineux entre ses pattes, teintes brun cendre, braises orange |
| **Broyeur de Cendre** | Colosse · Épique · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1238 · 42 · 26 | Soif : vol de vie 18 % | immense scarabée cornu blindé, mandibules de broyeur, teintes brun cendre, braises orange |
| **Faucheur de Cendre** | Assassin · Épique · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 787 · 60 · 24 | Soif : vol de vie 18 % | mante géante aux bras-faux tranchants, posture d’attaque, teintes brun cendre, braises orange |
| **Nourricière de Cendre** | Soigneur · Épique · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Soutien qui soigne et protège les alliés au cœur du combat. | 936 · 36 · 90 | Soif : vol de vie 18 % | abeille-nourrice aux ailes larges, porte un rayon de gelée royale lumineuse, teintes brun cendre, braises orange |
| **Seigneur-essaim de Cendre** | Invocateur · Légendaire · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Chef de meute qui fait surgir des créatures pour submerger la voie. | 788 · 38 · 95 | Soif : vol de vie 18 % | reine-mère ailée à l’abdomen gonflé, entourée de larves, teintes brun cendre, braises orange |
| **Héraut de Cendre** | Meneur · Légendaire · IV | Issu des ruches incendiées, ce héros se nourrit de la vie de ses proies. Chef de guerre qui galvanise les troupes autour de lui. | 960 · 49 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | guerrier-insecte cuirassé à épines, mandibules dressées, bannière de chitine, teintes brun cendre, braises orange |

## Les 300 lignées de monstres

Chaque faction compte 60 lignées : 4 lignées historiques et 56 lignées construites sur 10 familles et 8 variantes régionales. Chaque lignée a 6 formes, qui s’obtiennent hors partie avec des cartes et des éclats. À la 4e forme, elle gagne sa compétence active ; la variante régionale lui donne un trait. PV, attaque et portée sont ceux de la 1re forme ; « ×2 » signifie que la lignée arrive par deux.

**Les 10 rôles**

| Rôle | Description | Compétence active (forme 4+) |
| --- | --- | --- |
| Guerrier | Fantassins de base, solides et polyvalents, envoyés dans les 3 bastions. | Cri de guerre : +35 % de dégâts et de cadence aux alliés proches pendant 4 s |
| Nuée | Petites créatures nombreuses et rapides, qui arrivent par deux. | Essaimage : fait apparaître 2 petits de sa lignée |
| Tireur | Unités à distance, fragiles mais efficaces derrière la ligne de front. | Tir perçant : tire sur 3 ennemis à la fois |
| Volant | Créatures ailées qui survolent la mêlée ; seuls les tireurs et les tours les atteignent. | Drain : frappe ×1,8 et se soigne d’autant |
| Siège | Briseurs de structures, lents et résistants, redoutables contre les tours. | Séisme : onde de choc autour de lui (×1,5), efficace contre les tours |
| Colosse | Géants très résistants qui absorbent les coups. | Carapace : bouclier de 25 % de ses PV pendant 4 s |
| Assassin | Frappeurs rapides qui infligent de lourds dégâts. | Charge : frappe ×2 et étourdit sa cible 0,8 s |
| Soigneur | Soutiens qui soignent les alliés proches. | Vague de soin : soigne de 15 % les alliés proches |
| Contrôle | Unités qui ralentissent et entravent l’ennemi. | Entrave : immobilise sa cible 1,2 s |
| Rapide | Coureurs frénétiques, plus dangereux quand ils sont blessés. | Ruée : frappe ×1,6 et accélère de 40 % pendant 3 s |

### L’Essaim

| Lignée | Rôle · rareté · ère | PV · attaque · portée | Les 6 formes | Compétence · trait | Visuel |
| --- | --- | --- | --- | --- | --- |
| Couvée | Nuée · Commune · I | 95 · 10 · 16 · ×2 | Larve → Larve vorace → Fourmi ouvrière → Fourmi soldat → Fourmi guerrière → Fourmi titan | Essaimage | insecte, teintes or ; forme ultime géante, aura rouge |
| Essaim ailé | Volant · Commune · I | 130 · 13 · 60 · ×2 | Moucheron → Guêpe → Guêpe-dard → Frelon → Frelon royal → Frelon empereur | Drain | insecte, ailes, dard, teintes jaune ; forme ultime géante, aura or |
| Carapaces | Siège · Rare · I | 600 · 24 · 22 | Cloporte → Scarabée → Scarabée cornu → Scarabée bélier → Scarabée titan → Goliath d’acier | Séisme | insecte, carapace, teintes gris ; forme ultime géante, aura cyan |
| Mantes | Assassin · Épique · I | 300 · 30 · 24 | Nymphe de mante → Mante → Mante-lame → Mante orchidée → Mante faucheuse → Mante impériale | Charge | insecte, bras-faux de mante, teintes vert ; forme ultime géante, aura orange |
| Ouvrière de braise | Guerrier · Commune · I | 188 · 15 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « de braise ») | Cri de guerre · explose en mourant | insecte, teintes orange ; forme ultime géante, aura orange |
| Moustique d’ambre | Nuée · Commune · I | 93 · 9 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « d’ambre ») | Essaimage · renvoie 20 % des coups | insecte, ailes, teintes or ; forme ultime géante, aura orange |
| Bombardier des sables | Tireur · Commune · I | 139 · 20 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « des sables ») | Tir perçant · +18 % de vitesse | insecte, teintes or ; forme ultime géante, aura or pâle |
| Bourdon de jade | Volant · Rare · I | 152 · 17 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « de jade ») | Drain · coups venimeux | insecte, ailes, dard, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Lucane de la nuit | Siège · Rare · I | 582 · 25 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « de la nuit ») | Séisme · vol de vie 20 % | insecte, carapace, corne, teintes violet ; forme ultime géante, aura violet pâle |
| Tatou des marais | Colosse · Rare · I | 680 · 21 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « des marais ») | Carapace · ralentit ses cibles | insecte, carapace, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Mante de rouille | Assassin · Épique · II | 300 · 31 · 22 | Phasme → Mante → Faucheuse → Lame-mante → Écorcheuse → Mante spectre (+ « de rouille ») | Charge · +12 armure | insecte, bras-faux de mante, teintes orange ; forme ultime géante, aura orange |
| Nourrice des cimes | Soigneur · Épique · II | 251 · 9 · 80 | Puceron → Nourrice → Butineuse → Apicultrice → Reine nourricière → Mère-ruche (+ « des cimes ») | Vague de soin · régénère 6 PV/s | insecte, ailes, teintes bleu ; forme ultime géante, aura cyan pâle |
| Tisseuse de braise | Contrôle · Épique · II | 284 · 18 · 82 | Araignée → Tisseuse → Veuve → Tarentule → Recluse → Arachnée (+ « de braise ») | Entrave · explose en mourant | insecte, teintes orange ; forme ultime géante, aura orange |
| Sauterelle d’ambre | Rapide · Commune · II | 151 · 15 · 18 | Criquet → Sauterelle → Grillon → Locuste → Dévoreuse → Grande locuste (+ « d’ambre ») | Ruée · renvoie 20 % des coups | insecte, teintes or ; forme ultime géante, aura orange |
| Ouvrière de jade | Guerrier · Commune · II | 208 · 15 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « de jade ») | Cri de guerre · coups venimeux | insecte, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Moustique de la nuit | Nuée · Commune · II | 90 · 10 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « de la nuit ») | Essaimage · vol de vie 20 % | insecte, ailes, teintes violet ; forme ultime géante, aura violet pâle |
| Bombardier des marais | Tireur · Commune · II | 153 · 20 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « des marais ») | Tir perçant · ralentit ses cibles | insecte, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Bourdon de rouille | Volant · Rare · II | 168 · 17 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « de rouille ») | Drain · +12 armure | insecte, ailes, dard, teintes orange ; forme ultime géante, aura orange |
| Lucane des cimes | Siège · Rare · II | 565 · 28 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « des cimes ») | Séisme · régénère 6 PV/s | insecte, carapace, corne, teintes bleu ; forme ultime géante, aura cyan pâle |
| Tatou de braise | Colosse · Rare · II | 750 · 21 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « de braise ») | Carapace · explose en mourant | insecte, carapace, teintes orange ; forme ultime géante, aura orange |
| Mante d’ambre | Assassin · Épique · III | 330 · 31 · 22 | Phasme → Mante → Faucheuse → Lame-mante → Écorcheuse → Mante spectre (+ « d’ambre ») | Charge · renvoie 20 % des coups | insecte, bras-faux de mante, teintes or ; forme ultime géante, aura orange |
| Nourrice des sables | Soigneur · Épique · III | 243 · 10 · 80 | Puceron → Nourrice → Butineuse → Apicultrice → Reine nourricière → Mère-ruche (+ « des sables ») | Vague de soin · +18 % de vitesse | insecte, ailes, teintes or ; forme ultime géante, aura or pâle |
| Tisseuse de jade | Contrôle · Épique · III | 274 · 20 · 82 | Araignée → Tisseuse → Veuve → Tarentule → Recluse → Arachnée (+ « de jade ») | Entrave · coups venimeux | insecte, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Sauterelle de la nuit | Rapide · Commune · III | 167 · 15 · 18 | Criquet → Sauterelle → Grillon → Locuste → Dévoreuse → Grande locuste (+ « de la nuit ») | Ruée · vol de vie 20 % | insecte, teintes violet ; forme ultime géante, aura violet pâle |
| Ouvrière de rouille | Guerrier · Commune · III | 229 · 14 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « de rouille ») | Cri de guerre · +12 armure | insecte, teintes orange ; forme ultime géante, aura orange |
| Moustique des cimes | Nuée · Commune · III | 99 · 10 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « des cimes ») | Essaimage · régénère 6 PV/s | insecte, ailes, teintes bleu ; forme ultime géante, aura cyan pâle |
| Bombardier de braise | Tireur · Commune · III | 148 · 22 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « de braise ») | Tir perçant · explose en mourant | insecte, teintes orange ; forme ultime géante, aura orange |
| Bourdon d’ambre | Volant · Rare · III | 162 · 18 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « d’ambre ») | Drain · renvoie 20 % des coups | insecte, ailes, dard, teintes or ; forme ultime géante, aura orange |
| Lucane des sables | Siège · Rare · III | 623 · 27 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « des sables ») | Séisme · +18 % de vitesse | insecte, carapace, corne, teintes or ; forme ultime géante, aura or pâle |
| Tatou de jade | Colosse · Rare · III | 727 · 23 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « de jade ») | Carapace · coups venimeux | insecte, carapace, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Mante de la nuit | Assassin · Épique · III | 308 · 33 · 22 | Phasme → Mante → Faucheuse → Lame-mante → Écorcheuse → Mante spectre (+ « de la nuit ») | Charge · vol de vie 20 % | insecte, bras-faux de mante, teintes violet ; forme ultime géante, aura violet pâle |
| Nourrice des marais | Soigneur · Épique · III | 258 · 9 · 80 | Puceron → Nourrice → Butineuse → Apicultrice → Reine nourricière → Mère-ruche (+ « des marais ») | Vague de soin · ralentit ses cibles | insecte, ailes, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Tisseuse de rouille | Contrôle · Épique · IV | 302 · 19 · 82 | Araignée → Tisseuse → Veuve → Tarentule → Recluse → Arachnée (+ « de rouille ») | Entrave · +12 armure | insecte, teintes orange ; forme ultime géante, aura orange |
| Sauterelle des cimes | Rapide · Commune · IV | 161 · 16 · 18 | Criquet → Sauterelle → Grillon → Locuste → Dévoreuse → Grande locuste (+ « des cimes ») | Ruée · régénère 6 PV/s | insecte, teintes bleu ; forme ultime géante, aura cyan pâle |
| Ouvrière d’ambre | Guerrier · Commune · IV | 222 · 16 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « d’ambre ») | Cri de guerre · renvoie 20 % des coups | insecte, teintes or ; forme ultime géante, aura orange |
| Moustique des sables | Nuée · Commune · IV | 96 · 11 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « des sables ») | Essaimage · +18 % de vitesse | insecte, ailes, teintes or ; forme ultime géante, aura or pâle |
| Bombardier de jade | Tireur · Commune · IV | 163 · 22 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « de jade ») | Tir perçant · coups venimeux | insecte, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Bourdon de la nuit | Volant · Rare · IV | 179 · 18 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « de la nuit ») | Drain · vol de vie 20 % | insecte, ailes, dard, teintes violet ; forme ultime géante, aura violet pâle |
| Lucane des marais | Siège · Rare · IV | 602 · 30 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « des marais ») | Séisme · ralentit ses cibles | insecte, carapace, corne, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Tatou de rouille | Colosse · Rare · IV | 800 · 22 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « de rouille ») | Carapace · +12 armure | insecte, carapace, teintes orange ; forme ultime géante, aura orange |
| Mante des cimes | Assassin · Épique · IV | 339 · 32 · 22 | Phasme → Mante → Faucheuse → Lame-mante → Écorcheuse → Mante spectre (+ « des cimes ») | Charge · régénère 6 PV/s | insecte, bras-faux de mante, teintes bleu ; forme ultime géante, aura cyan pâle |
| Nourrice de braise | Soigneur · Épique · IV | 250 · 10 · 80 | Puceron → Nourrice → Butineuse → Apicultrice → Reine nourricière → Mère-ruche (+ « de braise ») | Vague de soin · explose en mourant | insecte, ailes, teintes orange ; forme ultime géante, aura orange |
| Tisseuse d’ambre | Contrôle · Épique · IV | 321 · 18 · 82 | Araignée → Tisseuse → Veuve → Tarentule → Recluse → Arachnée (+ « d’ambre ») | Entrave · renvoie 20 % des coups | insecte, teintes or ; forme ultime géante, aura orange |
| Sauterelle des sables | Rapide · Commune · IV | 171 · 15 · 18 | Criquet → Sauterelle → Grillon → Locuste → Dévoreuse → Grande locuste (+ « des sables ») | Ruée · +18 % de vitesse | insecte, teintes or ; forme ultime géante, aura or pâle |
| Ouvrière de la nuit | Guerrier · Commune · IV | 235 · 15 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « de la nuit ») | Cri de guerre · vol de vie 20 % | insecte, teintes violet ; forme ultime géante, aura violet pâle |
| Moustique des marais | Nuée · Commune · IV | 102 · 10 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « des marais ») | Essaimage · ralentit ses cibles | insecte, ailes, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Bombardier de rouille | Tireur · Commune · V | 158 · 24 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « de rouille ») | Tir perçant · +12 armure | insecte, teintes orange ; forme ultime géante, aura orange |
| Bourdon des cimes | Volant · Rare · V | 197 · 17 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « des cimes ») | Drain · régénère 6 PV/s | insecte, ailes, dard, teintes bleu ; forme ultime géante, aura cyan pâle |
| Lucane de braise | Siège · Rare · V | 663 · 30 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « de braise ») | Séisme · explose en mourant | insecte, carapace, corne, teintes orange ; forme ultime géante, aura orange |
| Tatou d’ambre | Colosse · Rare · V | 773 · 25 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « d’ambre ») | Carapace · renvoie 20 % des coups | insecte, carapace, teintes or ; forme ultime géante, aura orange |
| Mante des sables | Assassin · Épique · V | 327 · 36 · 22 | Phasme → Mante → Faucheuse → Lame-mante → Écorcheuse → Mante spectre (+ « des sables ») | Charge · +18 % de vitesse | insecte, bras-faux de mante, teintes or ; forme ultime géante, aura or pâle |
| Nourrice de jade | Soigneur · Épique · V | 275 · 10 · 80 | Puceron → Nourrice → Butineuse → Apicultrice → Reine nourricière → Mère-ruche (+ « de jade ») | Vague de soin · coups venimeux | insecte, ailes, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Tisseuse de la nuit | Contrôle · Épique · V | 310 · 20 · 82 | Araignée → Tisseuse → Veuve → Tarentule → Recluse → Arachnée (+ « de la nuit ») | Entrave · vol de vie 20 % | insecte, teintes violet ; forme ultime géante, aura violet pâle |
| Sauterelle des marais | Rapide · Commune · V | 165 · 17 · 18 | Criquet → Sauterelle → Grillon → Locuste → Dévoreuse → Grande locuste (+ « des marais ») | Ruée · ralentit ses cibles | insecte, teintes vert-jaune ; forme ultime géante, aura vert-jaune |
| Ouvrière des cimes | Guerrier · Légendaire · V | 227 · 17 · 20 | Larve → Ouvrière → Soldate → Légionnaire → Brise-carapace → Matrone (+ « des cimes ») | Cri de guerre · régénère 6 PV/s | insecte, teintes bleu ; forme ultime géante, aura cyan pâle |
| Moustique de braise | Nuée · Légendaire · V | 98 · 11 · 16 · ×2 | Moucheron → Moustique → Taon → Essaim → Nuée vorace → Fléau ailé (+ « de braise ») | Essaimage · explose en mourant | insecte, ailes, teintes orange ; forme ultime géante, aura orange |
| Bombardier d’ambre | Tireur · Légendaire · V | 167 · 23 · 90 · ×2 | Cracheur → Bombardier → Arroseur → Artilleur → Mortier vivant → Canon chitineux (+ « d’ambre ») | Tir perçant · renvoie 20 % des coups | insecte, teintes or ; forme ultime géante, aura orange |
| Bourdon des sables | Volant · Légendaire · V | 184 · 19 · 50 | Abeille → Bourdon → Guêpe → Frelon → Frelon géant → Seigneur-frelon (+ « des sables ») | Drain · +18 % de vitesse | insecte, ailes, dard, teintes or ; forme ultime géante, aura or pâle |
| Lucane de jade | Siège · Légendaire · V | 617 · 32 · 24 | Bousier → Lucane → Cerf-volant → Bélier chitineux → Broyeur → Titan cornu (+ « de jade ») | Séisme · coups venimeux | insecte, carapace, corne, teintes turquoise ; forme ultime géante, aura turquoise pâle |
| Tatou de la nuit | Colosse · Légendaire · V | 820 · 23 · 24 | Cloporte → Tatou → Carapace → Bastion vivant → Muraille → Montagne (+ « de la nuit ») | Carapace · vol de vie 20 % | insecte, carapace, teintes violet ; forme ultime géante, aura violet pâle |

## 8. Objets, reliques, compétences et systèmes

### Objets de forge des héros

En mode Champions, le héros achète ses objets avec l’or gagné pendant la partie. Les composants s’achètent seuls. Un objet complet en combine deux ou trois, plus un coût de fusion.

| Composant | Prix (or) | Effet | Visuel à créer |
| --- | --- | --- | --- |
| Épée longue | 300 | +12 attaque | épée droite simple, lame acier |
| Dague | 300 | +15 % cadence | dague courbe, manche cuir |
| Gemme de rubis | 350 | +180 PV | rubis taillé rouge vif |
| Cotte de mailles | 350 | +16 armure | cotte de mailles pliée |
| Bottes | 250 | +15 % vitesse | bottes de cuir à boucle |
| Amulette de sève | 300 | +4 PV/s | pendentif goutte verte |

| Objet complet | Recette | Fusion (or) | Effet |
| --- | --- | --- | --- |
| Lame vampirique | Épée + Sève | 400 | +25 attaque, +2 PV/s, vol de vie 15 % |
| Hache du Titan | Épée + Rubis | 450 | +28 attaque, +300 PV, frappe en zone (35 %) |
| Arc-tempête | Dague + Dague | 400 | +45 % cadence |
| Égide du bastion | Cotte + Rubis | 500 | +35 armure, +350 PV, aura +12 armure aux alliés |
| Cuirasse d’épines | Cotte + Cotte | 400 | +45 armure, renvoie 25 % des coups |
| Bottes de guerre | Bottes + Dague | 300 | +30 % vitesse, +20 % cadence |
| Couronne du Fléau | Épée + Dague + Rubis | 650 | Légendaire : +38 attaque, +25 % cadence, +280 PV |

### Reliques

Les reliques s’obtiennent dans les boosters et montent en niveau avec les doublons. Un héros en porte une. Avec la Voie du peuple, chaque bastion peut aussi en porter une (30 % de l’effet transmis à ses unités, puis 50 % et deux reliques avec Reliquaires sacrés).

| Relique | Faction | Rareté | Effet de base |
| --- | --- | --- | --- |
| Carapace de reine | L’Essaim | Rare | +20 armure, +150 PV |
| Dard de jade | L’Essaim | Épique | +15 attaque, coups empoisonnés |
| Phylactère | La Légion Morte | Épique | +20 % PV, +4 PV/s |
| Lame de givre | La Légion Morte | Rare | +18 attaque, ralentit |
| Marteau ancestral | L’Alliance des Forges | Rare | +22 attaque |
| Bouclier de Kharak | L’Alliance des Forges | Épique | +28 armure, renvoie 15 % |
| Arc de lune | Le Cercle Sylvain | Épique | +25 % cadence, +15 portée |
| Couronne de ronces | Le Cercle Sylvain | Rare | +200 PV, renvoie 20 % |
| Croc de l’alpha | La Horde Sauvage | Épique | +20 attaque, vol de vie 12 % |
| Peau de béhémoth | La Horde Sauvage | Rare | +400 PV |

### Consommables

- **Tome** : +150 points de maîtrise pour un héros (maîtrise maximale 30).
- **Grimoire** : +1 point de compétence pour le héros de ton choix (5 rangs maximum par compétence).
- **Éclats** : monnaie principale (200 au départ). **Cristaux** : monnaie rare, échangeable au Marché.

### Compétences des monstres (une par rôle, dès la forme 4)

| Rôle | Compétence | Recharge | Effet |
| --- | --- | --- | --- |
| Guerrier | Cri de guerre | 9 s | +35 % de dégâts et de cadence aux alliés proches, 4 s |
| Colosse | Carapace | 10 s | Bouclier de 25 % de ses PV, 4 s |
| Assassin | Charge | 8 s | Frappe ×2 et étourdit 0,8 s |
| Tireur | Tir perçant | 8 s | Tire sur 3 ennemis à la fois |
| Soigneur | Vague de soin | 9 s | Soigne de 15 % les alliés proches |
| Contrôle | Entrave | 9 s | Immobilise sa cible 1,2 s |
| Siège | Séisme | 9 s | Onde de choc ×1,5, efficace contre les tours |
| Volant | Drain | 8 s | Frappe ×1,8 et se soigne d’autant |
| Nuée | Essaimage | 12 s | Fait apparaître 2 petits de sa lignée |
| Rapide | Ruée | 7 s | Frappe ×1,6 et accélère de 40 %, 3 s |

Compléments de fusion (aléatoires sur les monstres étoilés) : Venimeux, Ailé, Vampirique, Régénérant, Frénétique, Épineux, Explosif, Géant, Véloce, Blindé, Glacial, Scission, Sacré, Brise-tour, Féroce.

### Types de compétences des héros

| Type | Recharge | Effet |
| --- | --- | --- |
| Frappe | 6 s | Frappe ×2,2 sa cible |
| Drain | 8 s | Frappe ×1,9 et rend 60 % des dégâts en PV |
| Bond | 10 s | Bondit sur un ennemi éloigné, frappe ×1,3, étourdit 0,7 s |
| Bouclier | 12 s | Bouclier de 20 % de ses PV, 4 s (moitié aux alliés pour les soutiens) |
| Nova | 9 s | Explosion autour de lui ×1,4, ralentit |
| Zone | 10 s | Zone à distance ×1,6, ralentit |
| Étourdissement | 11 s | Étourdit 1,4 s (×0,9) |
| Soin | 11 s | Soigne les alliés proches de 18 % |
| Renfort | 13 s | +35 % de dégâts et de cadence aux alliés, 6 s |
| Invocation | 14 s | Invoque 2 créatures de la lignée du héros |
| Volée | 8 s | Tire sur 4 ennemis (×1,2) |
| Ultime Exécution | 40 s | ×3,5 plus 30 % des PV manquants |
| Ultime Cataclysme | 45 s | Immense zone ×2,6, étourdit 1 s |
| Ultime Salut | 50 s | Soigne les alliés de 35 % et les protège |
| Ultime Ralliement | 50 s | +35 % dégâts et cadence, bouclier, 8 s |
| Ultime Légion | 50 s | Invoque 3 créatures ★2 plus évoluées |
| Ultime Déluge | 40 s | Jusqu’à 10 projectiles (×1,8) |

Arts achetables pour les emplacements supplémentaires : Frappe (offerte), Drain, Bond, Bouclier, Nova, Zone, Étourdissement, Soin, Renfort, Volée (120 éclats chacun).

### Les trois Voies (talents de spécialisation)

Une seule Voie active à la fois (changer coûte 150 éclats). La Voie des héros est offerte, les deux autres coûtent 300 éclats.

| Voie | Nœud | Coût (points) | Effet |
| --- | --- | --- | --- |
| Héros | Rôdeur | 1 | Ordre : ne jamais passer par les voies, traverser la jungle |
| Héros | Prédateur | 1 | Ordre : toujours viser le héros le plus faible |
| Héros | Sang-froid | 2 | Ordre : ultime seulement sous 20 % de PV de la cible |
| Héros | Arts supplémentaires | 2 | +1 emplacement de compétence pour tous les héros |
| Héros | Champions | 3 | +20 % PV et dégâts, +30 % d’expérience |
| Héros | Légende vivante | 3 | Recharges −20 %, réapparition 2× plus rapide |
| Peuple | Reliquaires | 1 | Une relique par bastion (30 % de l’effet aux unités) |
| Peuple | Bâtisseurs | 1 | Améliorations −25 %, tours +15 % de dégâts |
| Peuple | Fortifications | 2 | Une tour de garde de plus par voie |
| Peuple | Reliquaires sacrés | 2 | 50 % de l’effet, 2 reliques par bastion |
| Peuple | Levée en masse | 3 | Unités des bastions +15 % PV et dégâts |
| Peuple | Grande muraille | 3 | Structures +30 % PV et +4 PV/s |
| Arcanes | Grimoire du commandant | 1 | Onglet Sorts et sort Météore |
| Arcanes | Gel | 1 | Sort de gel |
| Arcanes | Bénédiction | 2 | Sort de soin et protection |
| Arcanes | Source de mana | 2 | +40 % de mana par seconde, réserve 150 |
| Arcanes | Portail | 3 | Sort de renvoi immédiat |
| Arcanes | Cataclysme | 3 | Sort ultime, une fois par partie |

### Sorts du commandant (Voie des arcanes)

| Sort | Mana | Recharge | Effet |
| --- | --- | --- | --- |
| Météore | 40 | 18 s | Frappe en zone les ennemis au front de la voie |
| Gel | 35 | 24 s | Fige les ennemis au front 2,5 s |
| Bénédiction | 30 | 20 s | Soigne de 30 % et protège tes unités au front |
| Portail | 50 | 40 s | Renvoie aussitôt les monstres du bastion |
| Cataclysme | 90 | une fois | Météores sur les trois fronts |

### Ordres et améliorations d’unités

| Ordre | Prix (éclats) |
| --- | --- |
| Repli | offert |
| Pousser | 40 |
| Changer de voie | 50 |
| Défendre | 60 |
| Soin | 60 |
| Jungle | 80 |
| Unités : tenir la position | 80 |
| Rôder, Chasser le plus faible, Ultime en finisseur | inclus avec le nœud de la Voie des héros |

| Amélioration d’unité (nécessite Bastions) | Effet par rang | Rangs | Prix de déblocage |
| --- | --- | --- | --- |
| Force | +15 % de dégâts | 10 | offert |
| Vitalité | +12 % de PV | 10 | 60 |
| Armure | +6 armure | 8 | 70 |
| Cadence | +10 % de vitesse d’attaque | 8 | 80 |
| Vitesse | +8 % de déplacement | 5 | 70 |

### Règles de déblocage

- On commence avec 200 éclats, la première faction et **un achat gratuit**.
- Une seule chose est offerte par menu : Jouer, le Cadeau, le Deck, les Boosters, la Forteresse (tours), la quête du jour, l’onglet Bastions et l’onglet Champion en partie, la Voie des héros, l’ordre Repli, l’amélioration Force, l’art Frappe et le Codex des héros.
- Tout le reste se paie en éclats ou avec une publicité. Les menus verrouillés restent visibles mais ne sont pas cliquables.
- Exemples de prix : Bastions 80, Marché 60, Collection 150, Invocation des héros 200, Talents 200, Codex 30, mode Champions 250, Forteresse avancée 120, page Armée 60, page Fort 150.
- Un achat combiné (page + onglet) n’est jamais payé deux fois. La collection et les boosters d’une faction possédée sont inclus.
- Emplacements d’envoi dans un bastion (8 maximum) : en cristaux 2 · 3 · 4 · 6 · 8 · 10 · 13, ou en éclats 50 · 100 · 180 · 300 · 450 · 650 · 900.
- Emplacements de compétence supplémentaires d’un héros : offerts selon sa rareté (épique 1, légendaire 2), sinon 150 éclats puis +150 par emplacement.
- Vagues : au départ 2 monstres par voie (1 mêlée, 1 distance) plus les monstres placés dans les bastions.

### La Légion Morte

**Kits de compétences par rôle**

| Rôle | Q (niv. 1) | W (niv. 2) | E (niv. 3) | R ultime (niv. 6) |
| --- | --- | --- | --- | --- |
| Mage | **Nova de givre** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Terreur** : étourdit sa cible 1,4 s (×0,9) | **Tombe glacée** : zone à distance, ×1,6 et ralentit | **Hiver éternel** : immense zone ×2,6 qui étourdit 1 s |
| Guerrier | **Lame funèbre** : frappe ×2,2 sa cible | **Pas de l’ombre** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Os protecteurs** : bouclier de 20 % de ses PV pendant 4 s | **Hiver éternel** : immense zone ×2,6 qui étourdit 1 s |
| Assassin | **Lame funèbre** : frappe ×2,2 sa cible | **Pas de l’ombre** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Étreinte glaciale** : frappe ×1,9 et rend 60 % des dégâts en PV | **Moisson** : frappe ×3,5 plus 30 % des PV manquants de la cible |
| Tireur | **Volée d’os** : tire sur 4 ennemis à la fois (×1,2) | **Pas de l’ombre** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Cri des morts** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Pluie funèbre** : jusqu’à 10 projectiles sur les ennemis à portée (×1,8) |
| Soigneur | **Rituel des âmes** : soigne les alliés proches de 18 % de ses PV max | **Os protecteurs** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Terreur** : étourdit sa cible 1,4 s (×0,9) | **Pacte des âmes** : soigne tous les alliés proches de 35 % et leur donne un bouclier |
| Colosse | **Terreur** : étourdit les ennemis autour de sa cible 1,4 s (×0,9) | **Os protecteurs** : bouclier de 20 % de ses PV pendant 4 s | **Nova de givre** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Hiver éternel** : immense zone ×2,6 qui étourdit 1 s |
| Invocateur | **Relever les morts** : invoque 2 créatures de la Lignée des os | **Nova de givre** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Os protecteurs** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Légion des tombes** : invoque 3 créatures ★2 plus évoluées de la lignée Chair recousue |

| Héros | Rôle · rareté · ère | Description | PV · attaque · portée | Passif | Visuel |
| --- | --- | --- | --- | --- | --- |
| **Chevalier de la Mort** | Colosse · Rare · I | Ancien paladin relevé par la Légion, il draine la vie de ses ennemis. Signature : Étreinte glaciale (frappe ×2,2 et se soigne). | 1050 · 46 · 24 | Aura de terreur : +15 % de dégâts aux alliés proches | chevalier de la mort en armure noire, heaume à cornes, grande épée, lueur bleu glacier |
| **Liche** | Mage · Épique · I | Sorcier immortel qui fige les voies sous un hiver magique. Signature : Nova de givre (explosion glacée qui ralentit). | 700 · 40 · 100 | Toucher glacé : ses tirs ralentissent | liche squelette couronnée en robe violette, bâton à orbe mauve |
| **Reine Banshee** | Mage · Légendaire · I | Son cri funeste frappe plusieurs ennemis à la fois. Signature : Cri funeste (frappe 5 ennemis à la fois). | 760 · 42 · 96 | Âme vorace : vol de vie 25 % | reine banshee flottante bleu pâle, longs cheveux, couronne |
| **Nécromancien de Givre** | Mage · Rare · I | Le froid des cryptes l’accompagne partout. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 684 · 44 · 100 | Toucher glacé : ses coups ralentissent | sorcier squelette en robe, couronne d’os, bâton à orbe violet, teintes bleu glacier, givre |
| **Revenant de Givre** | Guerrier · Rare · I | Le froid des cryptes l’accompagne partout. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1030 · 49 · 24 | Toucher glacé : ses coups ralentissent | chevalier mort-vivant en armure noire, heaume à cornes, grande épée, teintes bleu glacier, givre |
| **Faucheuse de Givre** | Assassin · Rare · I | Le froid des cryptes l’accompagne partout. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 820 · 58 · 24 | Toucher glacé : ses coups ralentissent | spectre encapuchonné flottant, grande faux, corps de fumée, teintes bleu glacier, givre |
| **Archère funèbre de Givre** | Tireur · Épique · I | Le froid des cryptes l’accompagne partout. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 718 · 47 · 120 | Toucher glacé : ses coups ralentissent | archère squelette encapuchonnée, cape en lambeaux, arc d’os, teintes bleu glacier, givre |
| **Embaumeuse de Givre** | Soigneur · Rare · I | Le froid des cryptes l’accompagne partout. Soutien qui soigne et protège les alliés au cœur du combat. | 945 · 36 · 90 | Toucher glacé : ses coups ralentissent | prêtresse morte-vivante en robe, bâton à orbe turquoise, bandelettes, teintes bleu glacier, givre |
| **Abomination de Givre** | Colosse · Rare · II | Le froid des cryptes l’accompagne partout. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1275 · 41 · 26 | Toucher glacé : ses coups ralentissent | colosse de chair recousue, crochets, tête de pierre, teintes bleu glacier, givre |
| **Pleureuse de Givre** | Invocateur · Rare · II | Le froid des cryptes l’accompagne partout. Chef de meute qui fait surgir des créatures pour submerger la voie. | 772 · 38 · 95 | Toucher glacé : ses coups ralentissent | banshee flottante aux longs cheveux, couronne spectrale, teintes bleu glacier, givre |
| **Nécromancien du Néant** | Mage · Épique · II | Une ombre violette dévore la vie de ceux qu’il touche. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 720 · 42 · 100 | Soif : vol de vie 18 % | sorcier squelette en robe, couronne d’os, bâton à orbe violet, teintes violet nuit, fumée sombre |
| **Revenant du Néant** | Guerrier · Rare · II | Une ombre violette dévore la vie de ceux qu’il touche. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 970 · 52 · 24 | Soif : vol de vie 18 % | chevalier mort-vivant en armure noire, heaume à cornes, grande épée, teintes violet nuit, fumée sombre |
| **Faucheuse du Néant** | Assassin · Rare · II | Une ombre violette dévore la vie de ceux qu’il touche. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 861 · 55 · 24 | Soif : vol de vie 18 % | spectre encapuchonné flottant, grande faux, corps de fumée, teintes violet nuit, fumée sombre |
| **Archère funèbre du Néant** | Tireur · Épique · III | Une ombre violette dévore la vie de ceux qu’il touche. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 755 · 45 · 120 | Soif : vol de vie 18 % | archère squelette encapuchonnée, cape en lambeaux, arc d’os, teintes violet nuit, fumée sombre |
| **Embaumeuse du Néant** | Soigneur · Légendaire · III | Une ombre violette dévore la vie de ceux qu’il touche. Soutien qui soigne et protège les alliés au cœur du combat. | 891 · 38 · 90 | Soif : vol de vie 18 % | prêtresse morte-vivante en robe, bâton à orbe turquoise, bandelettes, teintes violet nuit, fumée sombre |
| **Abomination du Néant** | Colosse · Épique · III | Une ombre violette dévore la vie de ceux qu’il touche. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1200 · 44 · 26 | Soif : vol de vie 18 % | colosse de chair recousue, crochets, tête de pierre, teintes violet nuit, fumée sombre |
| **Pleureuse du Néant** | Invocateur · Épique · III | Une ombre violette dévore la vie de ceux qu’il touche. Chef de meute qui fait surgir des créatures pour submerger la voie. | 811 · 36 · 95 | Soif : vol de vie 18 % | banshee flottante aux longs cheveux, couronne spectrale, teintes violet nuit, fumée sombre |
| **Nécromancien de Peste** | Mage · Épique · III | Une brume malade s’échappe de ses plaies. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 756 · 40 · 100 | Venin : ses coups empoisonnent | sorcier squelette en robe, couronne d’os, bâton à orbe violet, teintes vert maladif, brume toxique |
| **Revenant de Peste** | Guerrier · Légendaire · IV | Une brume malade s’échappe de ses plaies. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1020 · 49 · 24 | Venin : ses coups empoisonnent | chevalier mort-vivant en armure noire, heaume à cornes, grande épée, teintes vert maladif, brume toxique |
| **Faucheuse de Peste** | Assassin · Épique · IV | Une brume malade s’échappe de ses plaies. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 812 · 59 · 24 | Venin : ses coups empoisonnent | spectre encapuchonné flottant, grande faux, corps de fumée, teintes vert maladif, brume toxique |
| **Archère funèbre de Peste** | Tireur · Épique · IV | Une brume malade s’échappe de ses plaies. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 710 · 48 · 120 | Venin : ses coups empoisonnent | archère squelette encapuchonnée, cape en lambeaux, arc d’os, teintes vert maladif, brume toxique |
| **Embaumeuse de Peste** | Soigneur · Épique · IV | Une brume malade s’échappe de ses plaies. Soutien qui soigne et protège les alliés au cœur du combat. | 936 · 36 · 90 | Venin : ses coups empoisonnent | prêtresse morte-vivante en robe, bâton à orbe turquoise, bandelettes, teintes vert maladif, brume toxique |
| **Abomination de Peste** | Colosse · Légendaire · IV | Une brume malade s’échappe de ses plaies. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1263 · 42 · 26 | Venin : ses coups empoisonnent | colosse de chair recousue, crochets, tête de pierre, teintes vert maladif, brume toxique |
| **Pleureuse de Peste** | Invocateur · Légendaire · IV | Une brume malade s’échappe de ses plaies. Chef de meute qui fait surgir des créatures pour submerger la voie. | 764 · 39 · 95 | Venin : ses coups empoisonnent | banshee flottante aux longs cheveux, couronne spectrale, teintes vert maladif, brume toxique |

### L’Alliance des Forges

**Kits de compétences par rôle**

| Rôle | Q (niv. 1) | W (niv. 2) | E (niv. 3) | R ultime (niv. 6) |
| --- | --- | --- | --- | --- |
| Guerrier | **Coup d’estoc** : frappe ×2,2 sa cible | **Charge héroïque** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Égide** : bouclier de 20 % de ses PV pendant 4 s | **Feu des forges** : immense zone ×2,6 qui étourdit 1 s |
| Tireur | **Salve** : tire sur 4 ennemis à la fois (×1,2) | **Charge héroïque** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Ordre de bataille** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Barrage** : jusqu’à 10 projectiles sur les ennemis à portée (×1,8) |
| Mage | **Onde runique** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Coup de bouclier** : étourdit sa cible 1,4 s (×0,9) | **Bombe runique** : zone à distance, ×1,6 et ralentit | **Feu des forges** : immense zone ×2,6 qui étourdit 1 s |
| Soigneur | **Lumière sacrée** : soigne les alliés proches de 18 % de ses PV max | **Égide** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Coup de bouclier** : étourdit sa cible 1,4 s (×0,9) | **Miracle** : soigne tous les alliés proches de 35 % et leur donne un bouclier |
| Colosse | **Coup de bouclier** : étourdit les ennemis autour de sa cible 1,4 s (×0,9) | **Égide** : bouclier de 20 % de ses PV pendant 4 s | **Onde runique** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Feu des forges** : immense zone ×2,6 qui étourdit 1 s |
| Invocateur | **Atelier** : invoque 2 créatures de la lignée Recrues humaines | **Onde runique** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Égide** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Colosse mécanique** : invoque 3 créatures ★2 plus évoluées de la lignée Machines gnomes |
| Meneur | **Ordre de bataille** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Coup d’estoc** : frappe ×2,2 sa cible | **Lumière sacrée** : soigne les alliés proches de 18 % de ses PV max | **Bannière royale** : +35 % de dégâts et de cadence et un bouclier aux alliés, 8 s |

| Héros | Rôle · rareté · ère | Description | PV · attaque · portée | Passif | Visuel |
| --- | --- | --- | --- | --- | --- |
| **Paladin** | Soigneur · Rare · I | Chevalier sacré de l’Alliance, il soigne et protège les troupes. Signature : Lumière sacrée (soigne tous les alliés proches). | 1100 · 42 · 24 | Bénédiction : +12 armure aux alliés proches | paladin en armure argent et or, plumet doré, marteau et bouclier |
| **Roi-Forgeron** | Briseur · Épique · I | Roi des nains, son marteau fait trembler le sol. Signature : Marteau-séisme (onde de choc qui ralentit). | 1000 · 52 · 26 | Peau de fer : renvoie 20 % des dégâts de mêlée | roi nain à la barbe rousse et couronne, grand marteau, cape rouge |
| **Inventeur gnome** | Ingénieur · Légendaire · I | Génie gnome qui assemble des machines en pleine bataille. Signature : Atelier ambulant (assemble une machine gnome). | 780 · 40 · 100 | Rafistolage : régénère 8 PV/s | inventeur gnome à lunettes, arme à vapeur, cape |
| **Croisé d’Acier** | Guerrier · Rare · I | Son armure d’acier poli arrête lames et flèches. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 950 · 53 · 24 | Cuirasse : +15 armure | chevalier humain en armure de plates, heaume à plumet, épée et bouclier, teintes acier poli |
| **Arquebusier d’Acier** | Tireur · Rare · I | Son armure d’acier poli arrête lames et flèches. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 762 · 45 · 120 | Cuirasse : +15 armure | nain barbu trapu avec une longue arquebuse, épaulières de fer, teintes acier poli |
| **Archimage d’Acier** | Mage · Rare · I | Son armure d’acier poli arrête lames et flèches. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 720 · 42 · 100 | Cuirasse : +15 armure | mage humain en robe, capuche, bâton à orbe bleu, cape, teintes acier poli |
| **Prêtresse d’Acier** | Soigneur · Épique · I | Son armure d’acier poli arrête lames et flèches. Soutien qui soigne et protège les alliés au cœur du combat. | 873 · 39 · 90 | Cuirasse : +15 armure | prêtresse aux ailes de plumes, auréole, bâton à orbe doré, teintes acier poli |
| **Thane d’Acier** | Colosse · Rare · I | Son armure d’acier poli arrête lames et flèches. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1313 · 40 · 26 | Cuirasse : +15 armure | roi nain couronné à la barbe flamboyante, grand marteau, teintes acier poli |
| **Mécaniste d’Acier** | Invocateur · Rare · II | Son armure d’acier poli arrête lames et flèches. Chef de meute qui fait surgir des créatures pour submerger la voie. | 796 · 37 · 95 | Cuirasse : +15 armure | ingénieur gnome à lunettes, arme à vapeur, cape, teintes acier poli |
| **Maréchal d’Acier** | Meneur · Rare · II | Son armure d’acier poli arrête lames et flèches. Chef de guerre qui galvanise les troupes autour de lui. | 970 · 48 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | général humain au heaume couronné, grande épée, cape rouge, teintes acier poli |
| **Croisé de l’Aube** | Guerrier · Épique · II | La lumière du matin referme ses blessures. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1000 · 50 · 24 | Renouveau : régénère 9 PV/s | chevalier humain en armure de plates, heaume à plumet, épée et bouclier, teintes ivoire et or pâle, lumière matinale |
| **Arquebusier de l’Aube** | Tireur · Rare · II | La lumière du matin referme ses blessures. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 718 · 47 · 120 | Renouveau : régénère 9 PV/s | nain barbu trapu avec une longue arquebuse, épaulières de fer, teintes ivoire et or pâle, lumière matinale |
| **Archimage de l’Aube** | Mage · Rare · II | La lumière du matin referme ses blessures. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 756 · 40 · 100 | Renouveau : régénère 9 PV/s | mage humain en robe, capuche, bâton à orbe bleu, cape, teintes ivoire et or pâle, lumière matinale |
| **Prêtresse de l’Aube** | Soigneur · Épique · III | La lumière du matin referme ses blessures. Soutien qui soigne et protège les alliés au cœur du combat. | 918 · 37 · 90 | Renouveau : régénère 9 PV/s | prêtresse aux ailes de plumes, auréole, bâton à orbe doré, teintes ivoire et or pâle, lumière matinale |
| **Thane de l’Aube** | Colosse · Légendaire · III | La lumière du matin referme ses blessures. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1238 · 42 · 26 | Renouveau : régénère 9 PV/s | roi nain couronné à la barbe flamboyante, grand marteau, teintes ivoire et or pâle, lumière matinale |
| **Mécaniste de l’Aube** | Invocateur · Épique · III | La lumière du matin referme ses blessures. Chef de meute qui fait surgir des créatures pour submerger la voie. | 749 · 40 · 95 | Renouveau : régénère 9 PV/s | ingénieur gnome à lunettes, arme à vapeur, cape, teintes ivoire et or pâle, lumière matinale |
| **Maréchal de l’Aube** | Meneur · Épique · III | La lumière du matin referme ses blessures. Chef de guerre qui galvanise les troupes autour de lui. | 1019 · 46 · 24 | Aura du meneur : +15 % de vitesse aux alliés proches | général humain au heaume couronné, grande épée, cape rouge, teintes ivoire et or pâle, lumière matinale |
| **Croisé des Runes** | Guerrier · Épique · III | Des runes bleues gravées sur son équipement accélèrent ses gestes. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1050 · 48 · 24 | Célérité : +20 % de cadence | chevalier humain en armure de plates, heaume à plumet, épée et bouclier, teintes bleu runique, runes lumineuses |
| **Arquebusier des Runes** | Tireur · Légendaire · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 755 · 45 · 120 | Célérité : +20 % de cadence | nain barbu trapu avec une longue arquebuse, épaulières de fer, teintes bleu runique, runes lumineuses |
| **Archimage des Runes** | Mage · Épique · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 713 · 42 · 100 | Célérité : +20 % de cadence | mage humain en robe, capuche, bâton à orbe bleu, cape, teintes bleu runique, runes lumineuses |
| **Prêtresse des Runes** | Soigneur · Épique · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Soutien qui soigne et protège les alliés au cœur du combat. | 864 · 40 · 90 | Célérité : +20 % de cadence | prêtresse aux ailes de plumes, auréole, bâton à orbe doré, teintes bleu runique, runes lumineuses |
| **Thane des Runes** | Colosse · Épique · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1300 · 40 · 26 | Célérité : +20 % de cadence | roi nain couronné à la barbe flamboyante, grand marteau, teintes bleu runique, runes lumineuses |
| **Mécaniste des Runes** | Invocateur · Légendaire · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Chef de meute qui fait surgir des créatures pour submerger la voie. | 788 · 38 · 95 | Célérité : +20 % de cadence | ingénieur gnome à lunettes, arme à vapeur, cape, teintes bleu runique, runes lumineuses |
| **Maréchal des Runes** | Meneur · Légendaire · IV | Des runes bleues gravées sur son équipement accélèrent ses gestes. Chef de guerre qui galvanise les troupes autour de lui. | 960 · 49 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | général humain au heaume couronné, grande épée, cape rouge, teintes bleu runique, runes lumineuses |

### Le Cercle Sylvain

**Kits de compétences par rôle**

| Rôle | Q (niv. 1) | W (niv. 2) | E (niv. 3) | R ultime (niv. 6) |
| --- | --- | --- | --- | --- |
| Assassin | **Danse-lame** : frappe ×2,2 sa cible | **Saut sylvain** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Sève volée** : frappe ×1,9 et rend 60 % des dégâts en PV | **Lame de lune** : frappe ×3,5 plus 30 % des PV manquants de la cible |
| Tireur | **Pluie de flèches** : tire sur 4 ennemis à la fois (×1,2) | **Saut sylvain** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Hymne sylvain** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Ciel d’étoiles** : jusqu’à 10 projectiles sur les ennemis à portée (×1,8) |
| Colosse | **Entrave** : étourdit les ennemis autour de sa cible 1,4 s (×0,9) | **Écorce** : bouclier de 20 % de ses PV pendant 4 s | **Éclat de lune** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Colère de la forêt** : immense zone ×2,6 qui étourdit 1 s |
| Soigneur | **Floraison** : soigne les alliés proches de 18 % de ses PV max | **Écorce** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Entrave** : étourdit sa cible 1,4 s (×0,9) | **Renouveau** : soigne tous les alliés proches de 35 % et leur donne un bouclier |
| Mage | **Éclat de lune** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Entrave** : étourdit sa cible 1,4 s (×0,9) | **Racines** : zone à distance, ×1,6 et ralentit | **Colère de la forêt** : immense zone ×2,6 qui étourdit 1 s |
| Meneur | **Hymne sylvain** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Danse-lame** : frappe ×2,2 sa cible | **Floraison** : soigne les alliés proches de 18 % de ses PV max | **Chant des étoiles** : +35 % de dégâts et de cadence et un bouclier aux alliés, 8 s |
| Invocateur | **Appel des bois** : invoque 2 créatures de la lignée Archers elfes | **Éclat de lune** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Écorce** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Éveil des tréants** : invoque 3 créatures ★2 plus évoluées de la lignée Tréants |

| Héros | Rôle · rareté · ère | Description | PV · attaque · portée | Passif | Visuel |
| --- | --- | --- | --- | --- | --- |
| **Gardienne lunaire** | Archère · Rare · I | Archère elfe dont les flèches tombent comme des étoiles. Signature : Pluie d’étoiles (tire sur 4 ennemis à la fois). | 720 · 44 · 126 | Œil de lune : +20 de portée | archère elfe aux cheveux argentés, armure bleu nuit, arc, lueur lunaire |
| **Druide-Cerf** | Soigneur · Épique · I | Gardien des bois, mi-cerf mi-druide, il fait fleurir les soins. Signature : Floraison (soigne tous les alliés proches). | 980 · 40 · 26 | Sève vive : régénère 10 PV/s | druide-cerf, cerf aux grands bois, lueur verte |
| **Sylve-Mère** | Colosse · Légendaire · I | Mère de la forêt, ses racines entravent les envahisseurs. Signature : Racines (des racines frappent et entravent). | 1300 · 40 · 28 | Écorce d’épines : renvoie 30 % des dégâts de mêlée | tréant géant couvert de fleurs roses, cœur doré |
| **Lamesylve de Lune** | Assassin · Rare · I | La lumière de lune glace chacune de ses cibles. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 779 · 61 · 24 | Toucher glacé : ses coups ralentissent | bretteuse elfe aux cheveux argentés, lame fine, cape de feuilles, teintes bleu lunaire, reflets argent |
| **Chasseresse de Lune** | Tireur · Rare · I | La lumière de lune glace chacune de ses cibles. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 762 · 45 · 120 | Toucher glacé : ses coups ralentissent | archère elfe encapuchonnée, arc long, cape forestière, teintes bleu lunaire, reflets argent |
| **Ancien de Lune** | Colosse · Rare · I | La lumière de lune glace chacune de ses cibles. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1250 · 42 · 26 | Toucher glacé : ses coups ralentissent | tréant millénaire couvert de fleurs, cœur lumineux, teintes bleu lunaire, reflets argent |
| **Fée-reine de Lune** | Soigneur · Épique · I | La lumière de lune glace chacune de ses cibles. Soutien qui soigne et protège les alliés au cœur du combat. | 873 · 39 · 90 | Toucher glacé : ses coups ralentissent | reine des fées couronnée, ailes de papillon lumineuses, teintes bleu lunaire, reflets argent |
| **Druidesse de Lune** | Mage · Rare · I | La lumière de lune glace chacune de ses cibles. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 756 · 40 · 100 | Toucher glacé : ses coups ralentissent | dryade à la peau verte, couronne de feuilles, bâton fleuri, teintes bleu lunaire, reflets argent |
| **Grand cerf de Lune** | Meneur · Rare · II | La lumière de lune glace chacune de ses cibles. Chef de guerre qui galvanise les troupes autour de lui. | 1000 · 47 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | cerf majestueux aux bois immenses, regard sage, teintes bleu lunaire, reflets argent |
| **Sylvanier de Lune** | Invocateur · Rare · II | La lumière de lune glace chacune de ses cibles. Chef de meute qui fait surgir des créatures pour submerger la voie. | 772 · 38 · 95 | Toucher glacé : ses coups ralentissent | druide elfe en robe, bâton de bois vivant à orbe vert, teintes bleu lunaire, reflets argent |
| **Lamesylve d’Automne** | Assassin · Épique · II | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 820 · 58 · 24 | Soif : vol de vie 18 % | bretteuse elfe aux cheveux argentés, lame fine, cape de feuilles, teintes orange et rouille, feuilles mortes |
| **Chasseresse d’Automne** | Tireur · Rare · II | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 718 · 47 · 120 | Soif : vol de vie 18 % | archère elfe encapuchonnée, arc long, cape forestière, teintes orange et rouille, feuilles mortes |
| **Ancien d’Automne** | Colosse · Rare · II | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1313 · 40 · 26 | Soif : vol de vie 18 % | tréant millénaire couvert de fleurs, cœur lumineux, teintes orange et rouille, feuilles mortes |
| **Fée-reine d’Automne** | Soigneur · Épique · III | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Soutien qui soigne et protège les alliés au cœur du combat. | 918 · 37 · 90 | Soif : vol de vie 18 % | reine des fées couronnée, ailes de papillon lumineuses, teintes orange et rouille, feuilles mortes |
| **Druidesse d’Automne** | Mage · Légendaire · III | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 713 · 42 · 100 | Soif : vol de vie 18 % | dryade à la peau verte, couronne de feuilles, bâton fleuri, teintes orange et rouille, feuilles mortes |
| **Grand cerf d’Automne** | Meneur · Épique · III | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Chef de guerre qui galvanise les troupes autour de lui. | 941 · 50 · 24 | Aura du meneur : +15 % de vitesse aux alliés proches | cerf majestueux aux bois immenses, regard sage, teintes orange et rouille, feuilles mortes |
| **Sylvanier d’Automne** | Invocateur · Épique · III | Couleur de feuilles mortes, ses coups volent la sève de ses ennemis. Chef de meute qui fait surgir des créatures pour submerger la voie. | 811 · 36 · 95 | Soif : vol de vie 18 % | druide elfe en robe, bâton de bois vivant à orbe vert, teintes orange et rouille, feuilles mortes |
| **Lamesylve des Ronces** | Assassin · Épique · III | Des épines poussent sur tout son corps. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 861 · 55 · 24 | Épines : renvoie 20 % des dégâts de mêlée | bretteuse elfe aux cheveux argentés, lame fine, cape de feuilles, teintes vert sombre, épines roses |
| **Chasseresse des Ronces** | Tireur · Légendaire · IV | Des épines poussent sur tout son corps. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 755 · 45 · 120 | Épines : renvoie 20 % des dégâts de mêlée | archère elfe encapuchonnée, arc long, cape forestière, teintes vert sombre, épines roses |
| **Ancien des Ronces** | Colosse · Épique · IV | Des épines poussent sur tout son corps. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1238 · 42 · 26 | Épines : renvoie 20 % des dégâts de mêlée | tréant millénaire couvert de fleurs, cœur lumineux, teintes vert sombre, épines roses |
| **Fée-reine des Ronces** | Soigneur · Épique · IV | Des épines poussent sur tout son corps. Soutien qui soigne et protège les alliés au cœur du combat. | 864 · 40 · 90 | Épines : renvoie 20 % des dégâts de mêlée | reine des fées couronnée, ailes de papillon lumineuses, teintes vert sombre, épines roses |
| **Druidesse des Ronces** | Mage · Épique · IV | Des épines poussent sur tout son corps. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 749 · 40 · 100 | Épines : renvoie 20 % des dégâts de mêlée | dryade à la peau verte, couronne de feuilles, bâton fleuri, teintes vert sombre, épines roses |
| **Grand cerf des Ronces** | Meneur · Légendaire · IV | Des épines poussent sur tout son corps. Chef de guerre qui galvanise les troupes autour de lui. | 990 · 48 · 24 | Aura du meneur : +15 % de dégâts aux alliés proches | cerf majestueux aux bois immenses, regard sage, teintes vert sombre, épines roses |
| **Sylvanier des Ronces** | Invocateur · Légendaire · IV | Des épines poussent sur tout son corps. Chef de meute qui fait surgir des créatures pour submerger la voie. | 764 · 39 · 95 | Épines : renvoie 20 % des dégâts de mêlée | druide elfe en robe, bâton de bois vivant à orbe vert, teintes vert sombre, épines roses |

### La Horde Sauvage

**Kits de compétences par rôle**

| Rôle | Q (niv. 1) | W (niv. 2) | E (niv. 3) | R ultime (niv. 6) |
| --- | --- | --- | --- | --- |
| Assassin | **Coup de griffe** : frappe ×2,2 sa cible | **Bond** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Morsure** : frappe ×1,9 et rend 60 % des dégâts en PV | **Curée** : frappe ×3,5 plus 30 % des PV manquants de la cible |
| Colosse | **Charge écrasante** : étourdit les ennemis autour de sa cible 1,4 s (×0,9) | **Cuir de pierre** : bouclier de 20 % de ses PV pendant 4 s | **Rugissement** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Ruée sauvage** : immense zone ×2,6 qui étourdit 1 s |
| Soigneur | **Chant tribal** : soigne les alliés proches de 18 % de ses PV max | **Cuir de pierre** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Charge écrasante** : étourdit sa cible 1,4 s (×0,9) | **Esprit des ancêtres** : soigne tous les alliés proches de 35 % et leur donne un bouclier |
| Tireur | **Grêle de pierres** : tire sur 4 ennemis à la fois (×1,2) | **Bond** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Cri de guerre** : +35 % de dégâts et de cadence aux alliés proches pendant 6 s | **Avalanche** : jusqu’à 10 projectiles sur les ennemis à portée (×1,8) |
| Guerrier | **Coup de griffe** : frappe ×2,2 sa cible | **Bond** : bondit sur un ennemi éloigné, frappe ×1,3 et l’étourdit 0,7 s | **Cuir de pierre** : bouclier de 20 % de ses PV pendant 4 s | **Ruée sauvage** : immense zone ×2,6 qui étourdit 1 s |
| Mage | **Rugissement** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Charge écrasante** : étourdit sa cible 1,4 s (×0,9) | **Frappe-sol** : zone à distance, ×1,6 et ralentit | **Ruée sauvage** : immense zone ×2,6 qui étourdit 1 s |
| Invocateur | **Appel de la meute** : invoque 2 créatures de la lignée Meute | **Rugissement** : explosion autour de lui, ×1,4 aux ennemis proches, qui sont ralentis | **Cuir de pierre** : bouclier de 20 % de ses PV pendant 4 s, moitié aux alliés proches | **Grande chasse** : invoque 3 créatures ★2 plus évoluées de la lignée Charges |

| Héros | Rôle · rareté · ère | Description | PV · attaque · portée | Passif | Visuel |
| --- | --- | --- | --- | --- | --- |
| **Roi-Lion** | Meneur · Rare · I | Roi de la Horde, son rugissement décuple la rage de la meute. Signature : Rugissement (+35 % dégâts et cadence aux alliés 6 s). | 1000 · 50 · 24 | Soif de chasse : vol de vie 20 % | roi lion doré couronné, crinière brune |
| **Grand Dos-Argenté** | Colosse · Épique · I | Colosse à dos argenté qui frappe le sol avec fureur. Signature : Frappe-sol (frappe le sol et ralentit). | 1250 · 44 · 24 | Cuir épais : +15 armure | gorille dos-argenté massif, poings serrés |
| **Louve de lune** | Meneuse · Légendaire · I | Louve sacrée qui appelle la meute à ses côtés. Signature : Appel de la meute (appelle 3 loups de la meute). | 900 · 46 · 22 | Meute : +15 % de vitesse aux alliés proches | louve blanche aux yeux bleus, flammes spectrales bleues |
| **Tigre des Steppes** | Assassin · Rare · I | Coureur infatigable des grandes plaines dorées. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 779 · 61 · 24 | Coureur : +15 % de vitesse | tigre musclé en posture de chasse, crocs découverts, teintes sable doré |
| **Ours des Steppes** | Colosse · Rare · I | Coureur infatigable des grandes plaines dorées. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1288 · 41 · 26 | Coureur : +15 % de vitesse | ours gigantesque, fourrure épaisse, cicatrices de guerre, teintes sable doré |
| **Chaman des Steppes** | Soigneur · Rare · I | Coureur infatigable des grandes plaines dorées. Soutien qui soigne et protège les alliés au cœur du combat. | 900 · 38 · 90 | Coureur : +15 % de vitesse | singe-chaman en robe tribale, bâton à orbe doré, peintures, teintes sable doré |
| **Frondeur des Steppes** | Tireur · Épique · I | Coureur infatigable des grandes plaines dorées. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 718 · 47 · 120 | Coureur : +15 % de vitesse | singe voûté qui fait tournoyer une fronde, teintes sable doré |
| **Mammouth des Steppes** | Guerrier · Rare · I | Coureur infatigable des grandes plaines dorées. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1050 · 48 · 24 | Coureur : +15 % de vitesse | mammouth carapaçonné, immenses défenses, teintes sable doré |
| **Griffon des Steppes** | Mage · Rare · II | Coureur infatigable des grandes plaines dorées. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 734 · 41 · 100 | Coureur : +15 % de vitesse | griffon aux grandes ailes, bec acéré, plumes et fourrure, teintes sable doré |
| **Alpha des Steppes** | Invocateur · Rare · II | Coureur infatigable des grandes plaines dorées. Chef de meute qui fait surgir des créatures pour submerger la voie. | 772 · 38 · 95 | Coureur : +15 % de vitesse | loup alpha massif hérissé de pointes, chef de meute, teintes sable doré |
| **Tigre de Sang** | Assassin · Épique · II | Chaque blessure décuple sa sauvagerie. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 820 · 58 · 24 | Frénésie : plus il est blessé, plus il frappe fort | tigre musclé en posture de chasse, crocs découverts, teintes rouge sang |
| **Ours de Sang** | Colosse · Rare · II | Chaque blessure décuple sa sauvagerie. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1213 · 43 · 26 | Frénésie : plus il est blessé, plus il frappe fort | ours gigantesque, fourrure épaisse, cicatrices de guerre, teintes rouge sang |
| **Chaman de Sang** | Soigneur · Rare · II | Chaque blessure décuple sa sauvagerie. Soutien qui soigne et protège les alliés au cœur du combat. | 945 · 36 · 90 | Frénésie : plus il est blessé, plus il frappe fort | singe-chaman en robe tribale, bâton à orbe doré, peintures, teintes rouge sang |
| **Frondeur de Sang** | Tireur · Épique · III | Chaque blessure décuple sa sauvagerie. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 755 · 45 · 120 | Frénésie : plus il est blessé, plus il frappe fort | singe voûté qui fait tournoyer une fronde, teintes rouge sang |
| **Mammouth de Sang** | Guerrier · Légendaire · III | Chaque blessure décuple sa sauvagerie. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 990 · 51 · 24 | Frénésie : plus il est blessé, plus il frappe fort | mammouth carapaçonné, immenses défenses, teintes rouge sang |
| **Griffon de Sang** | Mage · Épique · III | Chaque blessure décuple sa sauvagerie. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 691 · 44 · 100 | Frénésie : plus il est blessé, plus il frappe fort | griffon aux grandes ailes, bec acéré, plumes et fourrure, teintes rouge sang |
| **Alpha de Sang** | Invocateur · Épique · III | Chaque blessure décuple sa sauvagerie. Chef de meute qui fait surgir des créatures pour submerger la voie. | 811 · 36 · 95 | Frénésie : plus il est blessé, plus il frappe fort | loup alpha massif hérissé de pointes, chef de meute, teintes rouge sang |
| **Tigre des Neiges** | Assassin · Épique · III | Une épaisse fourrure lui sert d’armure. Tueur rapide qui plonge sur les cibles isolées et achève les blessés. | 861 · 55 · 24 | Cuirasse : +15 armure | tigre musclé en posture de chasse, crocs découverts, teintes blanc neige, reflets bleutés |
| **Ours des Neiges** | Colosse · Légendaire · IV | Une épaisse fourrure lui sert d’armure. Rempart massif qui étourdit, encaisse et ouvre la voie aux autres. | 1275 · 41 · 26 | Cuirasse : +15 armure | ours gigantesque, fourrure épaisse, cicatrices de guerre, teintes blanc neige, reflets bleutés |
| **Chaman des Neiges** | Soigneur · Épique · IV | Une épaisse fourrure lui sert d’armure. Soutien qui soigne et protège les alliés au cœur du combat. | 891 · 38 · 90 | Cuirasse : +15 armure | singe-chaman en robe tribale, bâton à orbe doré, peintures, teintes blanc neige, reflets bleutés |
| **Frondeur des Neiges** | Tireur · Épique · IV | Une épaisse fourrure lui sert d’armure. Attaquant à distance qui use l’ennemi de loin avec des salves soutenues. | 710 · 48 · 120 | Cuirasse : +15 armure | singe voûté qui fait tournoyer une fronde, teintes blanc neige, reflets bleutés |
| **Mammouth des Neiges** | Guerrier · Épique · IV | Une épaisse fourrure lui sert d’armure. Combattant de première ligne qui tient la voie et encaisse pour ses troupes. | 1040 · 48 · 24 | Cuirasse : +15 armure | mammouth carapaçonné, immenses défenses, teintes blanc neige, reflets bleutés |
| **Griffon des Neiges** | Mage · Légendaire · IV | Une épaisse fourrure lui sert d’armure. Lanceur de sorts à distance qui frappe les groupes et contrôle le terrain. | 727 · 42 · 100 | Cuirasse : +15 armure | griffon aux grandes ailes, bec acéré, plumes et fourrure, teintes blanc neige, reflets bleutés |
| **Alpha des Neiges** | Invocateur · Légendaire · IV | Une épaisse fourrure lui sert d’armure. Chef de meute qui fait surgir des créatures pour submerger la voie. | 764 · 39 · 95 | Cuirasse : +15 armure | loup alpha massif hérissé de pointes, chef de meute, teintes blanc neige, reflets bleutés |

### La Légion Morte

| Lignée | Rôle · rareté · ère | PV · attaque · portée | Les 6 formes | Compétence · trait | Visuel |
| --- | --- | --- | --- | --- | --- |
| Lignée des os | Guerrier · Commune · I | 160 · 13 · 20 | Demi-squelette → Squelette → Squelette soldat → Centurion squelette → Seigneur des os → Roi des cryptes | Cri de guerre · se relève une fois | humanoïde, tête de crâne, squelettique, teintes gris ; forme ultime géante, aura violet pâle |
| Archers d’os | Tireur · Commune · I | 120 · 18 · 88 · ×2 | Lanceur d’os → Archer d’os → Archer funèbre → Tireur spectral → Sentinelle des tombes → Archer de la nuit éternelle | Tir perçant | humanoïde, tête de crâne, pierres à lancer, squelettique, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Chair recousue | Colosse · Rare · I | 620 · 22 · 22 | Goule → Charognard → Abomination → Abomination recousue → Colosse de chair → Titan putride | Carapace | colosse de chair recousue, crochets, teintes gris ; forme ultime géante, aura vert |
| Esprits | Volant · Épique · I | 200 · 22 · 24 | Feu follet → Esprit → Spectre → Banshee → Spectre hurlant → Faucheuse | Drain | spectre flottant, petite flamme, teintes turquoise pâle, lueur turquoise ; forme ultime géante, aura turquoise |
| Squelette des cryptes | Guerrier · Commune · I | 188 · 15 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « des cryptes ») | Cri de guerre · se relève une fois | humanoïde, tête de crâne, épée, squelettique, teintes gris ; forme ultime géante, aura violet pâle |
| Feu follet de givre | Nuée · Commune · I | 93 · 9 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « de givre ») | Essaimage · ralentit ses cibles | spectre flottant, petite flamme, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Archer de cendre | Tireur · Commune · I | 139 · 20 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « de cendre ») | Tir perçant · explose en mourant | humanoïde, capuche, arc, squelettique, teintes gris ; forme ultime géante, aura orange |
| Spectre de peste | Volant · Rare · I | 152 · 17 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « de peste ») | Drain · coups venimeux | spectre flottant, teintes vert-jaune, lueur vert pâle ; forme ultime géante, aura vert pâle |
| Catapulte du néant | Siège · Rare · I | 582 · 25 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « du néant ») | Séisme · vol de vie 20 % | machine de guerre, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Cadavre des tombes | Colosse · Rare · I | 680 · 21 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « des tombes ») | Carapace · +12 armure | humanoïde, tête de pierre, teintes gris ; forme ultime géante, aura turquoise |
| Égorgeur de sang | Assassin · Épique · II | 300 · 31 · 22 | Rôdeur → Égorgeur → Spadassin → Assassin → Ombre-lame → Grand assassin (+ « de sang ») | Charge · frénésie | humanoïde, capuche, épée, teintes rouge ; forme ultime géante, aura rouge |
| Embaumeur des brumes | Soigneur · Épique · II | 251 · 9 · 80 | Acolyte → Embaumeur → Nécromant → Prêtre funèbre → Hiérophante → Archinécromant (+ « des brumes ») | Vague de soin · se divise en mourant | humanoïde, capuche, bâton magique, robe, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Envoûteur des cryptes | Contrôle · Épique · II | 284 · 18 · 82 | Sorcier → Envoûteur → Maudisseur → Liche mineure → Liche → Archiliche (+ « des cryptes ») | Entrave · se relève une fois | humanoïde, crâne couronné, bâton magique, robe, teintes gris ; forme ultime géante, aura violet pâle |
| Chacal de givre | Rapide · Commune · II | 151 · 15 · 18 | Charognard → Chacal → Molosse → Loup squelette → Cerbère → Dévoreur (+ « de givre ») | Ruée · ralentit ses cibles | quadrupède, squelettique, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Squelette de peste | Guerrier · Commune · II | 208 · 15 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « de peste ») | Cri de guerre · coups venimeux | humanoïde, tête de crâne, épée, squelettique, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Feu follet du néant | Nuée · Commune · II | 90 · 10 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « du néant ») | Essaimage · vol de vie 20 % | spectre flottant, petite flamme, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Archer des tombes | Tireur · Commune · II | 153 · 20 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « des tombes ») | Tir perçant · +12 armure | humanoïde, capuche, arc, squelettique, teintes gris ; forme ultime géante, aura turquoise |
| Spectre de sang | Volant · Rare · II | 168 · 17 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « de sang ») | Drain · frénésie | spectre flottant, teintes rouge ; forme ultime géante, aura rouge |
| Catapulte des brumes | Siège · Rare · II | 565 · 28 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « des brumes ») | Séisme · se divise en mourant | machine de guerre, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Cadavre des cryptes | Colosse · Rare · II | 750 · 21 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « des cryptes ») | Carapace · se relève une fois | humanoïde, tête de pierre, teintes gris ; forme ultime géante, aura violet pâle |
| Égorgeur de givre | Assassin · Épique · III | 330 · 31 · 22 | Rôdeur → Égorgeur → Spadassin → Assassin → Ombre-lame → Grand assassin (+ « de givre ») | Charge · ralentit ses cibles | humanoïde, capuche, épée, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Embaumeur de cendre | Soigneur · Épique · III | 243 · 10 · 80 | Acolyte → Embaumeur → Nécromant → Prêtre funèbre → Hiérophante → Archinécromant (+ « de cendre ») | Vague de soin · explose en mourant | humanoïde, capuche, bâton magique, robe, teintes gris ; forme ultime géante, aura orange |
| Envoûteur de peste | Contrôle · Épique · III | 274 · 20 · 82 | Sorcier → Envoûteur → Maudisseur → Liche mineure → Liche → Archiliche (+ « de peste ») | Entrave · coups venimeux | humanoïde, crâne couronné, bâton magique, robe, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Chacal du néant | Rapide · Commune · III | 167 · 15 · 18 | Charognard → Chacal → Molosse → Loup squelette → Cerbère → Dévoreur (+ « du néant ») | Ruée · vol de vie 20 % | quadrupède, squelettique, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Squelette de sang | Guerrier · Commune · III | 229 · 14 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « de sang ») | Cri de guerre · frénésie | humanoïde, tête de crâne, épée, squelettique, teintes rouge ; forme ultime géante, aura rouge |
| Feu follet des brumes | Nuée · Commune · III | 99 · 10 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « des brumes ») | Essaimage · se divise en mourant | spectre flottant, petite flamme, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Archer des cryptes | Tireur · Commune · III | 148 · 22 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « des cryptes ») | Tir perçant · se relève une fois | humanoïde, capuche, arc, squelettique, teintes gris ; forme ultime géante, aura violet pâle |
| Spectre de givre | Volant · Rare · III | 162 · 18 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « de givre ») | Drain · ralentit ses cibles | spectre flottant, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Catapulte de cendre | Siège · Rare · III | 623 · 27 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « de cendre ») | Séisme · explose en mourant | machine de guerre, teintes gris ; forme ultime géante, aura orange |
| Cadavre de peste | Colosse · Rare · III | 727 · 23 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « de peste ») | Carapace · coups venimeux | humanoïde, tête de pierre, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Égorgeur du néant | Assassin · Épique · III | 308 · 33 · 22 | Rôdeur → Égorgeur → Spadassin → Assassin → Ombre-lame → Grand assassin (+ « du néant ») | Charge · vol de vie 20 % | humanoïde, capuche, épée, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Embaumeur des tombes | Soigneur · Épique · III | 258 · 9 · 80 | Acolyte → Embaumeur → Nécromant → Prêtre funèbre → Hiérophante → Archinécromant (+ « des tombes ») | Vague de soin · +12 armure | humanoïde, capuche, bâton magique, robe, teintes gris ; forme ultime géante, aura turquoise |
| Envoûteur de sang | Contrôle · Épique · IV | 302 · 19 · 82 | Sorcier → Envoûteur → Maudisseur → Liche mineure → Liche → Archiliche (+ « de sang ») | Entrave · frénésie | humanoïde, crâne couronné, bâton magique, robe, teintes rouge ; forme ultime géante, aura rouge |
| Chacal des brumes | Rapide · Commune · IV | 161 · 16 · 18 | Charognard → Chacal → Molosse → Loup squelette → Cerbère → Dévoreur (+ « des brumes ») | Ruée · se divise en mourant | quadrupède, squelettique, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Squelette de givre | Guerrier · Commune · IV | 222 · 16 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « de givre ») | Cri de guerre · ralentit ses cibles | humanoïde, tête de crâne, épée, squelettique, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Feu follet de cendre | Nuée · Commune · IV | 96 · 11 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « de cendre ») | Essaimage · explose en mourant | spectre flottant, petite flamme, teintes gris, lueur orange ; forme ultime géante, aura orange |
| Archer de peste | Tireur · Commune · IV | 163 · 22 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « de peste ») | Tir perçant · coups venimeux | humanoïde, capuche, arc, squelettique, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Spectre du néant | Volant · Rare · IV | 179 · 18 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « du néant ») | Drain · vol de vie 20 % | spectre flottant, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Catapulte des tombes | Siège · Rare · IV | 602 · 30 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « des tombes ») | Séisme · +12 armure | machine de guerre, teintes gris ; forme ultime géante, aura turquoise |
| Cadavre de sang | Colosse · Rare · IV | 800 · 22 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « de sang ») | Carapace · frénésie | humanoïde, tête de pierre, teintes rouge ; forme ultime géante, aura rouge |
| Égorgeur des brumes | Assassin · Épique · IV | 339 · 32 · 22 | Rôdeur → Égorgeur → Spadassin → Assassin → Ombre-lame → Grand assassin (+ « des brumes ») | Charge · se divise en mourant | humanoïde, capuche, épée, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Embaumeur des cryptes | Soigneur · Épique · IV | 250 · 10 · 80 | Acolyte → Embaumeur → Nécromant → Prêtre funèbre → Hiérophante → Archinécromant (+ « des cryptes ») | Vague de soin · se relève une fois | humanoïde, capuche, bâton magique, robe, teintes gris ; forme ultime géante, aura violet pâle |
| Envoûteur de givre | Contrôle · Épique · IV | 321 · 18 · 82 | Sorcier → Envoûteur → Maudisseur → Liche mineure → Liche → Archiliche (+ « de givre ») | Entrave · ralentit ses cibles | humanoïde, crâne couronné, bâton magique, robe, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Chacal de cendre | Rapide · Commune · IV | 171 · 15 · 18 | Charognard → Chacal → Molosse → Loup squelette → Cerbère → Dévoreur (+ « de cendre ») | Ruée · explose en mourant | quadrupède, squelettique, teintes gris ; forme ultime géante, aura orange |
| Squelette du néant | Guerrier · Commune · IV | 235 · 15 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « du néant ») | Cri de guerre · vol de vie 20 % | humanoïde, tête de crâne, épée, squelettique, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Feu follet des tombes | Nuée · Commune · IV | 102 · 10 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « des tombes ») | Essaimage · +12 armure | spectre flottant, petite flamme, teintes gris, lueur turquoise ; forme ultime géante, aura turquoise |
| Archer de sang | Tireur · Commune · V | 158 · 24 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « de sang ») | Tir perçant · frénésie | humanoïde, capuche, arc, squelettique, teintes rouge ; forme ultime géante, aura rouge |
| Spectre des brumes | Volant · Rare · V | 197 · 17 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « des brumes ») | Drain · se divise en mourant | spectre flottant, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Catapulte des cryptes | Siège · Rare · V | 663 · 30 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « des cryptes ») | Séisme · se relève une fois | machine de guerre, teintes gris ; forme ultime géante, aura violet pâle |
| Cadavre de givre | Colosse · Rare · V | 773 · 25 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « de givre ») | Carapace · ralentit ses cibles | humanoïde, tête de pierre, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Égorgeur de cendre | Assassin · Épique · V | 327 · 36 · 22 | Rôdeur → Égorgeur → Spadassin → Assassin → Ombre-lame → Grand assassin (+ « de cendre ») | Charge · explose en mourant | humanoïde, capuche, épée, teintes gris ; forme ultime géante, aura orange |
| Embaumeur de peste | Soigneur · Épique · V | 275 · 10 · 80 | Acolyte → Embaumeur → Nécromant → Prêtre funèbre → Hiérophante → Archinécromant (+ « de peste ») | Vague de soin · coups venimeux | humanoïde, capuche, bâton magique, robe, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Envoûteur du néant | Contrôle · Épique · V | 310 · 20 · 82 | Sorcier → Envoûteur → Maudisseur → Liche mineure → Liche → Archiliche (+ « du néant ») | Entrave · vol de vie 20 % | humanoïde, crâne couronné, bâton magique, robe, teintes violet sombre ; forme ultime géante, aura violet pâle |
| Chacal des tombes | Rapide · Commune · V | 165 · 17 · 18 | Charognard → Chacal → Molosse → Loup squelette → Cerbère → Dévoreur (+ « des tombes ») | Ruée · +12 armure | quadrupède, squelettique, teintes gris ; forme ultime géante, aura turquoise |
| Squelette des brumes | Guerrier · Légendaire · V | 227 · 17 · 20 | Ossement → Squelette → Légionnaire → Centurion → Champion → Roi-squelette (+ « des brumes ») | Cri de guerre · se divise en mourant | humanoïde, tête de crâne, épée, squelettique, teintes gris clair ; forme ultime géante, aura turquoise pâle |
| Feu follet des cryptes | Nuée · Légendaire · V | 98 · 11 · 16 · ×2 | Lueur → Feu follet → Âme errante → Revenant → Hurleur → Tourment (+ « des cryptes ») | Essaimage · se relève une fois | spectre flottant, petite flamme, teintes gris, lueur violet pâle ; forme ultime géante, aura violet pâle |
| Archer de givre | Tireur · Légendaire · V | 167 · 23 · 90 · ×2 | Guetteur → Archer → Arbalétrier → Tireur funèbre → Sentinelle → Exécuteur (+ « de givre ») | Tir perçant · ralentit ses cibles | humanoïde, capuche, arc, squelettique, teintes cyan pâle ; forme ultime géante, aura cyan pâle |
| Spectre de cendre | Volant · Légendaire · V | 184 · 19 · 50 | Ombre → Spectre → Fantôme → Banshee → Âme hurlante → Seigneur spectral (+ « de cendre ») | Drain · explose en mourant | spectre flottant, teintes gris, lueur orange ; forme ultime géante, aura orange |
| Catapulte de peste | Siège · Légendaire · V | 617 · 32 · 24 | Charrette → Catapulte → Baliste → Trébuchet → Machine funèbre → Ossuaire roulant (+ « de peste ») | Séisme · coups venimeux | machine de guerre, teintes vert-jaune ; forme ultime géante, aura vert pâle |
| Cadavre du néant | Colosse · Légendaire · V | 820 · 23 · 24 | Goule → Cadavre → Mastodonte → Abomination → Golem → Béhémoth (+ « du néant ») | Carapace · vol de vie 20 % | humanoïde, tête de pierre, teintes violet sombre ; forme ultime géante, aura violet pâle |

### L’Alliance des Forges

| Lignée | Rôle · rareté · ère | PV · attaque · portée | Les 6 formes | Compétence · trait | Visuel |
| --- | --- | --- | --- | --- | --- |
| Recrues humaines | Guerrier · Commune · I | 200 · 13 · 20 | Paysan → Milicien → Fantassin → Chevalier → Paladin d’élite → Champion royal | Cri de guerre | humanoïde, bonnet, lance, teintes orange ; forme ultime géante, aura or pâle |
| Tireurs nains | Tireur · Commune · I | 170 · 22 · 92 · ×2 | Apprenti nain → Arbalétrier nain → Fusilier nain → Mousquetaire de fer → Canonnier runique → Maître-tonnerre | Tir perçant | humanoïde, longue barbe, pierres à lancer, teintes orange ; forme ultime géante, aura orange |
| Machines gnomes | Siège · Rare · I | 520 · 32 · 118 | Charrette à rouages → Canon gnome → Tank à vapeur → Tank blindé → Forteresse mobile → Colosse mécanique | Séisme | machine de guerre, teintes orange ; forme ultime géante, aura orange |
| Clergé | Soigneur · Épique · I | 240 · 9 · 80 | Novice → Prêtresse → Clerc de lumière → Haute prêtresse → Oracle → Sainte | Vague de soin | humanoïde, capuche, bâton magique, robe, teintes orange ; forme ultime géante, aura or pâle |
| Soldat d’acier | Guerrier · Commune · I | 188 · 15 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « d’acier ») | Cri de guerre · +12 armure | humanoïde, heaume, épée, bouclier, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Bricoleur d’or | Nuée · Commune · I | 93 · 9 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « d’or ») | Essaimage · soigne ses voisins | humanoïde, lunettes d’ingénieur, arme à poudre, teintes or ; forme ultime géante, aura or pâle |
| Archer de la forge | Tireur · Commune · I | 139 · 20 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « de la forge ») | Tir perçant · explose en mourant | humanoïde, bonnet, arc, teintes orange ; forme ultime géante, aura orange |
| Ornithoptère des runes | Volant · Rare · I | 152 · 17 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « des runes ») | Drain · dégâts de zone | machine de guerre volante, teintes bleu ; forme ultime géante, aura cyan |
| Bombarde de l’aube | Siège · Rare · I | 582 · 25 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « de l’aube ») | Séisme · régénère 6 PV/s | machine de guerre, teintes or pâle ; forme ultime géante, aura or pâle |
| Brise-roc du roi | Colosse · Rare · I | 680 · 21 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « du roi ») | Carapace · vol de vie 20 % | humanoïde, longue barbe, marteau de guerre, teintes bleu ; forme ultime géante, aura or |
| Duelliste des remparts | Assassin · Épique · II | 300 · 31 · 22 | Larron → Duelliste → Bretteur → Spadassin → Lame royale → Grand maître (+ « des remparts ») | Charge · renvoie 20 % des coups | humanoïde, capuche, épée, teintes gris ; forme ultime géante, aura bleu pâle |
| Moine de vapeur | Soigneur · Épique · II | 251 · 9 · 80 | Novice → Moine → Clerc → Prêtre → Évêque → Saint (+ « de vapeur ») | Vague de soin · +18 % de vitesse | humanoïde, capuche, bâton magique, robe, teintes gris ; forme ultime géante, aura turquoise pâle |
| Mage d’acier | Contrôle · Épique · II | 284 · 18 · 82 | Apprenti → Mage → Enchanteur → Magister → Archimage → Grand magister (+ « d’acier ») | Entrave · +12 armure | humanoïde, capuche, bâton magique, robe, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Destrier d’or | Rapide · Commune · II | 151 · 15 · 18 | Poney → Destrier → Cheval de guerre → Coursier → Monture royale → Grand destrier (+ « d’or ») | Ruée · soigne ses voisins | quadrupède, teintes or ; forme ultime géante, aura or pâle |
| Soldat des runes | Guerrier · Commune · II | 208 · 15 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « des runes ») | Cri de guerre · dégâts de zone | humanoïde, heaume, épée, bouclier, teintes bleu ; forme ultime géante, aura cyan |
| Bricoleur de l’aube | Nuée · Commune · II | 90 · 10 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « de l’aube ») | Essaimage · régénère 6 PV/s | humanoïde, lunettes d’ingénieur, arme à poudre, teintes or pâle ; forme ultime géante, aura or pâle |
| Archer du roi | Tireur · Commune · II | 153 · 20 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « du roi ») | Tir perçant · vol de vie 20 % | humanoïde, bonnet, arc, teintes bleu ; forme ultime géante, aura or |
| Ornithoptère des remparts | Volant · Rare · II | 168 · 17 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « des remparts ») | Drain · renvoie 20 % des coups | machine de guerre volante, teintes gris ; forme ultime géante, aura bleu pâle |
| Bombarde de vapeur | Siège · Rare · II | 565 · 28 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « de vapeur ») | Séisme · +18 % de vitesse | machine de guerre, teintes gris ; forme ultime géante, aura turquoise pâle |
| Brise-roc d’acier | Colosse · Rare · II | 750 · 21 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « d’acier ») | Carapace · +12 armure | humanoïde, longue barbe, marteau de guerre, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Duelliste d’or | Assassin · Épique · III | 330 · 31 · 22 | Larron → Duelliste → Bretteur → Spadassin → Lame royale → Grand maître (+ « d’or ») | Charge · soigne ses voisins | humanoïde, capuche, épée, teintes or ; forme ultime géante, aura or pâle |
| Moine de la forge | Soigneur · Épique · III | 243 · 10 · 80 | Novice → Moine → Clerc → Prêtre → Évêque → Saint (+ « de la forge ») | Vague de soin · explose en mourant | humanoïde, capuche, bâton magique, robe, teintes orange ; forme ultime géante, aura orange |
| Mage des runes | Contrôle · Épique · III | 274 · 20 · 82 | Apprenti → Mage → Enchanteur → Magister → Archimage → Grand magister (+ « des runes ») | Entrave · dégâts de zone | humanoïde, capuche, bâton magique, robe, teintes bleu ; forme ultime géante, aura cyan |
| Destrier de l’aube | Rapide · Commune · III | 167 · 15 · 18 | Poney → Destrier → Cheval de guerre → Coursier → Monture royale → Grand destrier (+ « de l’aube ») | Ruée · régénère 6 PV/s | quadrupède, teintes or pâle ; forme ultime géante, aura or pâle |
| Soldat des remparts | Guerrier · Commune · III | 229 · 14 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « des remparts ») | Cri de guerre · renvoie 20 % des coups | humanoïde, heaume, épée, bouclier, teintes gris ; forme ultime géante, aura bleu pâle |
| Bricoleur de vapeur | Nuée · Commune · III | 99 · 10 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « de vapeur ») | Essaimage · +18 % de vitesse | humanoïde, lunettes d’ingénieur, arme à poudre, teintes gris ; forme ultime géante, aura turquoise pâle |
| Archer d’acier | Tireur · Commune · III | 148 · 22 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « d’acier ») | Tir perçant · +12 armure | humanoïde, bonnet, arc, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Ornithoptère d’or | Volant · Rare · III | 162 · 18 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « d’or ») | Drain · soigne ses voisins | machine de guerre volante, teintes or ; forme ultime géante, aura or pâle |
| Bombarde de la forge | Siège · Rare · III | 623 · 27 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « de la forge ») | Séisme · explose en mourant | machine de guerre, teintes orange ; forme ultime géante, aura orange |
| Brise-roc des runes | Colosse · Rare · III | 727 · 23 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « des runes ») | Carapace · dégâts de zone | humanoïde, longue barbe, marteau de guerre, teintes bleu ; forme ultime géante, aura cyan |
| Duelliste de l’aube | Assassin · Épique · III | 308 · 33 · 22 | Larron → Duelliste → Bretteur → Spadassin → Lame royale → Grand maître (+ « de l’aube ») | Charge · régénère 6 PV/s | humanoïde, capuche, épée, teintes or pâle ; forme ultime géante, aura or pâle |
| Moine du roi | Soigneur · Épique · III | 258 · 9 · 80 | Novice → Moine → Clerc → Prêtre → Évêque → Saint (+ « du roi ») | Vague de soin · vol de vie 20 % | humanoïde, capuche, bâton magique, robe, teintes bleu ; forme ultime géante, aura or |
| Mage des remparts | Contrôle · Épique · IV | 302 · 19 · 82 | Apprenti → Mage → Enchanteur → Magister → Archimage → Grand magister (+ « des remparts ») | Entrave · renvoie 20 % des coups | humanoïde, capuche, bâton magique, robe, teintes gris ; forme ultime géante, aura bleu pâle |
| Destrier de vapeur | Rapide · Commune · IV | 161 · 16 · 18 | Poney → Destrier → Cheval de guerre → Coursier → Monture royale → Grand destrier (+ « de vapeur ») | Ruée · +18 % de vitesse | quadrupède, teintes gris ; forme ultime géante, aura turquoise pâle |
| Soldat d’or | Guerrier · Commune · IV | 222 · 16 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « d’or ») | Cri de guerre · soigne ses voisins | humanoïde, heaume, épée, bouclier, teintes or ; forme ultime géante, aura or pâle |
| Bricoleur de la forge | Nuée · Commune · IV | 96 · 11 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « de la forge ») | Essaimage · explose en mourant | humanoïde, lunettes d’ingénieur, arme à poudre, teintes orange ; forme ultime géante, aura orange |
| Archer des runes | Tireur · Commune · IV | 163 · 22 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « des runes ») | Tir perçant · dégâts de zone | humanoïde, bonnet, arc, teintes bleu ; forme ultime géante, aura cyan |
| Ornithoptère de l’aube | Volant · Rare · IV | 179 · 18 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « de l’aube ») | Drain · régénère 6 PV/s | machine de guerre volante, teintes or pâle ; forme ultime géante, aura or pâle |
| Bombarde du roi | Siège · Rare · IV | 602 · 30 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « du roi ») | Séisme · vol de vie 20 % | machine de guerre, teintes bleu ; forme ultime géante, aura or |
| Brise-roc des remparts | Colosse · Rare · IV | 800 · 22 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « des remparts ») | Carapace · renvoie 20 % des coups | humanoïde, longue barbe, marteau de guerre, teintes gris ; forme ultime géante, aura bleu pâle |
| Duelliste de vapeur | Assassin · Épique · IV | 339 · 32 · 22 | Larron → Duelliste → Bretteur → Spadassin → Lame royale → Grand maître (+ « de vapeur ») | Charge · +18 % de vitesse | humanoïde, capuche, épée, teintes gris ; forme ultime géante, aura turquoise pâle |
| Moine d’acier | Soigneur · Épique · IV | 250 · 10 · 80 | Novice → Moine → Clerc → Prêtre → Évêque → Saint (+ « d’acier ») | Vague de soin · +12 armure | humanoïde, capuche, bâton magique, robe, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Mage d’or | Contrôle · Épique · IV | 321 · 18 · 82 | Apprenti → Mage → Enchanteur → Magister → Archimage → Grand magister (+ « d’or ») | Entrave · soigne ses voisins | humanoïde, capuche, bâton magique, robe, teintes or ; forme ultime géante, aura or pâle |
| Destrier de la forge | Rapide · Commune · IV | 171 · 15 · 18 | Poney → Destrier → Cheval de guerre → Coursier → Monture royale → Grand destrier (+ « de la forge ») | Ruée · explose en mourant | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Soldat de l’aube | Guerrier · Commune · IV | 235 · 15 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « de l’aube ») | Cri de guerre · régénère 6 PV/s | humanoïde, heaume, épée, bouclier, teintes or pâle ; forme ultime géante, aura or pâle |
| Bricoleur du roi | Nuée · Commune · IV | 102 · 10 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « du roi ») | Essaimage · vol de vie 20 % | humanoïde, lunettes d’ingénieur, arme à poudre, teintes bleu ; forme ultime géante, aura or |
| Archer des remparts | Tireur · Commune · V | 158 · 24 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « des remparts ») | Tir perçant · renvoie 20 % des coups | humanoïde, bonnet, arc, teintes gris ; forme ultime géante, aura bleu pâle |
| Ornithoptère de vapeur | Volant · Rare · V | 197 · 17 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « de vapeur ») | Drain · +18 % de vitesse | machine de guerre volante, teintes gris ; forme ultime géante, aura turquoise pâle |
| Bombarde d’acier | Siège · Rare · V | 663 · 30 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « d’acier ») | Séisme · +12 armure | machine de guerre, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Brise-roc d’or | Colosse · Rare · V | 773 · 25 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « d’or ») | Carapace · soigne ses voisins | humanoïde, longue barbe, marteau de guerre, teintes or ; forme ultime géante, aura or pâle |
| Duelliste de la forge | Assassin · Épique · V | 327 · 36 · 22 | Larron → Duelliste → Bretteur → Spadassin → Lame royale → Grand maître (+ « de la forge ») | Charge · explose en mourant | humanoïde, capuche, épée, teintes orange ; forme ultime géante, aura orange |
| Moine des runes | Soigneur · Épique · V | 275 · 10 · 80 | Novice → Moine → Clerc → Prêtre → Évêque → Saint (+ « des runes ») | Vague de soin · dégâts de zone | humanoïde, capuche, bâton magique, robe, teintes bleu ; forme ultime géante, aura cyan |
| Mage de l’aube | Contrôle · Épique · V | 310 · 20 · 82 | Apprenti → Mage → Enchanteur → Magister → Archimage → Grand magister (+ « de l’aube ») | Entrave · régénère 6 PV/s | humanoïde, capuche, bâton magique, robe, teintes or pâle ; forme ultime géante, aura or pâle |
| Destrier du roi | Rapide · Commune · V | 165 · 17 · 18 | Poney → Destrier → Cheval de guerre → Coursier → Monture royale → Grand destrier (+ « du roi ») | Ruée · vol de vie 20 % | quadrupède, teintes bleu ; forme ultime géante, aura or |
| Soldat de vapeur | Guerrier · Légendaire · V | 227 · 17 · 20 | Écuyer → Soldat → Sergent → Chevalier → Capitaine → Maréchal (+ « de vapeur ») | Cri de guerre · +18 % de vitesse | humanoïde, heaume, épée, bouclier, teintes gris ; forme ultime géante, aura turquoise pâle |
| Bricoleur d’acier | Nuée · Légendaire · V | 98 · 11 · 16 · ×2 | Mécano → Bricoleur → Tirailleur gnome → Mitrailleur → Saboteur → Grand ingénieur (+ « d’acier ») | Essaimage · +12 armure | humanoïde, lunettes d’ingénieur, arme à poudre, teintes gris clair ; forme ultime géante, aura cyan pâle |
| Archer d’or | Tireur · Légendaire · V | 167 · 23 · 90 · ×2 | Chasseur → Archer → Arbalétrier → Franc-tireur → Tireur d’élite → Maître archer (+ « d’or ») | Tir perçant · soigne ses voisins | humanoïde, bonnet, arc, teintes or ; forme ultime géante, aura or pâle |
| Ornithoptère de la forge | Volant · Légendaire · V | 184 · 19 · 50 | Planeur → Ornithoptère → Gyrocoptère → Aéronef → Cuirassé volant → Dirigeable (+ « de la forge ») | Drain · explose en mourant | machine de guerre volante, teintes orange ; forme ultime géante, aura orange |
| Bombarde des runes | Siège · Légendaire · V | 617 · 32 · 24 | Pétard → Bombarde → Couleuvrine → Obusier → Canon royal → Grand canon (+ « des runes ») | Séisme · dégâts de zone | machine de guerre, teintes bleu ; forme ultime géante, aura cyan |
| Brise-roc de l’aube | Colosse · Légendaire · V | 820 · 23 · 24 | Mineur → Brise-roc → Gardien → Briseur → Thane → Roi-montagne (+ « de l’aube ») | Carapace · régénère 6 PV/s | humanoïde, longue barbe, marteau de guerre, teintes or pâle ; forme ultime géante, aura or pâle |

### Le Cercle Sylvain

| Lignée | Rôle · rareté · ère | PV · attaque · portée | Les 6 formes | Compétence (forme 4+) · trait | Visuel |
| --- | --- | --- | --- | --- | --- |
| Fées | Volant soigneur · Commune · I | 100 · 10 · 60 | Luciole → Fée → Fée des bois → Fée lunaire → Dame des fées → Esprit du printemps | Drain | spectre flottant, petite flamme, teintes rose pâle, lueur vert-jaune ; forme ultime géante, aura orange |
| Archers elfes | Tireur · Commune · I | 140 · 21 · 112 · ×2 | Éclaireur → Archer elfe → Rôdeur → Tireur d’élite → Gardien sylvain → Archer lunaire | Tir perçant | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes brun doré ; forme ultime géante, aura bleu pâle |
| Tréants | Colosse · Rare · I | 700 · 22 · 24 | Pousse → Arbrisseau → Tréant → Tréant ancien → Tréant millénaire → Cœur de la forêt | Carapace | tréant (arbre vivant), teintes vert et brun ; forme ultime géante, aura vert pâle |
| Dryades | Contrôle · Épique · I | 280 · 18 · 82 | Nymphe → Dryade → Dryade des épines → Dryade ancienne → Dryade des saisons → Mère des sylves | Entrave | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes vert ; forme ultime géante, aura vert pâle |
| Lame elfe de lune | Guerrier · Commune · I | 188 · 15 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « de lune ») | Cri de guerre · ralentit ses cibles | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes bleu pâle ; forme ultime géante, aura bleu pâle |
| Pixie d’automne | Nuée · Commune · I | 93 · 9 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « d’automne ») | Essaimage · frénésie | spectre flottant, ailes, teintes orange, lueur orange ; forme ultime géante, aura orange |
| Archer des ronces | Tireur · Commune · I | 139 · 20 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « des ronces ») | Tir perçant · renvoie 20 % des coups | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes vert-jaune ; forme ultime géante, aura rose pâle |
| Griffonneau de printemps | Volant · Rare · I | 152 · 17 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « de printemps ») | Drain · régénère 6 PV/s | quadrupède, ailes, teintes vert pâle ; forme ultime géante, aura orange |
| Racine d’ombre | Siège · Rare · I | 582 · 25 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « d’ombre ») | Séisme · vol de vie 20 % | tréant (arbre vivant), teintes gris anthracite et vert sombre ; forme ultime géante, aura vert |
| Arbuste des étoiles | Colosse · Rare · I | 680 · 21 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « des étoiles ») | Carapace · dégâts de zone | tréant (arbre vivant), teintes violet pâle et violet ; forme ultime géante, aura blanc |
| Renard de mousse | Assassin · Épique · II | 300 · 31 · 22 | Renardeau → Renard → Lynx → Kitsune → Renard spectre → Kitsune ancien (+ « de mousse ») | Charge · soigne ses voisins | quadrupède, teintes vert ; forme ultime géante, aura vert-jaune |
| Dryade d’hiver | Soigneur · Épique · II | 251 · 9 · 80 | Nymphe → Dryade → Druidesse → Oracle → Grande dryade → Mère-sève (+ « d’hiver ») | Vague de soin · +12 armure | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Barde de lune | Contrôle · Épique · II | 284 · 18 · 82 | Chanteur → Barde → Enchanteur → Mystique → Archidruide → Grand enchanteur (+ « de lune ») | Entrave · ralentit ses cibles | humanoïde, oreilles d’elfe et longs cheveux, bâton magique, robe, longue chevelure, teintes bleu pâle ; forme ultime géante, aura bleu pâle |
| Chevreuil d’automne | Rapide · Commune · II | 151 · 15 · 18 | Faon → Chevreuil → Cerf → Daguet → Grand cerf → Cerf ancestral (+ « d’automne ») | Ruée · frénésie | quadrupède, bois de cerf, teintes orange ; forme ultime géante, aura orange |
| Lame elfe de printemps | Guerrier · Commune · II | 208 · 15 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « de printemps ») | Cri de guerre · régénère 6 PV/s | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes vert pâle ; forme ultime géante, aura orange |
| Pixie d’ombre | Nuée · Commune · II | 90 · 10 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « d’ombre ») | Essaimage · vol de vie 20 % | spectre flottant, ailes, teintes gris anthracite, lueur vert ; forme ultime géante, aura vert |
| Archer des étoiles | Tireur · Commune · II | 153 · 20 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « des étoiles ») | Tir perçant · dégâts de zone | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes violet pâle ; forme ultime géante, aura blanc |
| Griffonneau de mousse | Volant · Rare · II | 168 · 17 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « de mousse ») | Drain · soigne ses voisins | quadrupède, ailes, teintes vert ; forme ultime géante, aura vert-jaune |
| Racine d’hiver | Siège · Rare · II | 565 · 28 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « d’hiver ») | Séisme · +12 armure | tréant (arbre vivant), teintes bleu pâle et bleu ; forme ultime géante, aura cyan pâle |
| Arbuste de lune | Colosse · Rare · II | 750 · 21 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « de lune ») | Carapace · ralentit ses cibles | tréant (arbre vivant), teintes bleu pâle et bleu ; forme ultime géante, aura bleu pâle |
| Renard d’automne | Assassin · Épique · III | 330 · 31 · 22 | Renardeau → Renard → Lynx → Kitsune → Renard spectre → Kitsune ancien (+ « d’automne ») | Charge · frénésie | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Dryade des ronces | Soigneur · Épique · III | 243 · 10 · 80 | Nymphe → Dryade → Druidesse → Oracle → Grande dryade → Mère-sève (+ « des ronces ») | Vague de soin · renvoie 20 % des coups | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes vert-jaune ; forme ultime géante, aura rose pâle |
| Barde de printemps | Contrôle · Épique · III | 274 · 20 · 82 | Chanteur → Barde → Enchanteur → Mystique → Archidruide → Grand enchanteur (+ « de printemps ») | Entrave · régénère 6 PV/s | humanoïde, oreilles d’elfe et longs cheveux, bâton magique, robe, longue chevelure, teintes vert pâle ; forme ultime géante, aura orange |
| Chevreuil d’ombre | Rapide · Commune · III | 167 · 15 · 18 | Faon → Chevreuil → Cerf → Daguet → Grand cerf → Cerf ancestral (+ « d’ombre ») | Ruée · vol de vie 20 % | quadrupède, bois de cerf, teintes gris anthracite ; forme ultime géante, aura vert |
| Lame elfe de mousse | Guerrier · Commune · III | 229 · 14 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « de mousse ») | Cri de guerre · soigne ses voisins | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes vert ; forme ultime géante, aura vert-jaune |
| Pixie d’hiver | Nuée · Commune · III | 99 · 10 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « d’hiver ») | Essaimage · +12 armure | spectre flottant, ailes, teintes bleu pâle, lueur cyan pâle ; forme ultime géante, aura cyan pâle |
| Archer de lune | Tireur · Commune · III | 148 · 22 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « de lune ») | Tir perçant · ralentit ses cibles | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes bleu pâle ; forme ultime géante, aura bleu pâle |
| Griffonneau d’automne | Volant · Rare · III | 162 · 18 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « d’automne ») | Drain · frénésie | quadrupède, ailes, teintes orange ; forme ultime géante, aura orange |
| Racine des ronces | Siège · Rare · III | 623 · 27 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « des ronces ») | Séisme · renvoie 20 % des coups | tréant (arbre vivant), teintes vert-jaune et vert sombre ; forme ultime géante, aura rose pâle |
| Arbuste de printemps | Colosse · Rare · III | 727 · 23 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « de printemps ») | Carapace · régénère 6 PV/s | tréant (arbre vivant), teintes vert pâle et vert ; forme ultime géante, aura orange |
| Renard d’ombre | Assassin · Épique · III | 308 · 33 · 22 | Renardeau → Renard → Lynx → Kitsune → Renard spectre → Kitsune ancien (+ « d’ombre ») | Charge · vol de vie 20 % | quadrupède, teintes gris anthracite ; forme ultime géante, aura vert |
| Dryade des étoiles | Soigneur · Épique · III | 258 · 9 · 80 | Nymphe → Dryade → Druidesse → Oracle → Grande dryade → Mère-sève (+ « des étoiles ») | Vague de soin · dégâts de zone | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes violet pâle ; forme ultime géante, aura blanc |
| Barde de mousse | Contrôle · Épique · IV | 302 · 19 · 82 | Chanteur → Barde → Enchanteur → Mystique → Archidruide → Grand enchanteur (+ « de mousse ») | Entrave · soigne ses voisins | humanoïde, oreilles d’elfe et longs cheveux, bâton magique, robe, longue chevelure, teintes vert ; forme ultime géante, aura vert-jaune |
| Chevreuil d’hiver | Rapide · Commune · IV | 161 · 16 · 18 | Faon → Chevreuil → Cerf → Daguet → Grand cerf → Cerf ancestral (+ « d’hiver ») | Ruée · +12 armure | quadrupède, bois de cerf, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Lame elfe d’automne | Guerrier · Commune · IV | 222 · 16 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « d’automne ») | Cri de guerre · frénésie | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes orange ; forme ultime géante, aura orange |
| Pixie des ronces | Nuée · Commune · IV | 96 · 11 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « des ronces ») | Essaimage · renvoie 20 % des coups | spectre flottant, ailes, teintes vert-jaune, lueur rose pâle ; forme ultime géante, aura rose pâle |
| Archer de printemps | Tireur · Commune · IV | 163 · 22 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « de printemps ») | Tir perçant · régénère 6 PV/s | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes vert pâle ; forme ultime géante, aura orange |
| Griffonneau d’ombre | Volant · Rare · IV | 179 · 18 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « d’ombre ») | Drain · vol de vie 20 % | quadrupède, ailes, teintes gris anthracite ; forme ultime géante, aura vert |
| Racine des étoiles | Siège · Rare · IV | 602 · 30 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « des étoiles ») | Séisme · dégâts de zone | tréant (arbre vivant), teintes violet pâle et violet ; forme ultime géante, aura blanc |
| Arbuste de mousse | Colosse · Rare · IV | 800 · 22 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « de mousse ») | Carapace · soigne ses voisins | tréant (arbre vivant), teintes vert et vert sombre ; forme ultime géante, aura vert-jaune |
| Renard d’hiver | Assassin · Épique · IV | 339 · 32 · 22 | Renardeau → Renard → Lynx → Kitsune → Renard spectre → Kitsune ancien (+ « d’hiver ») | Charge · +12 armure | quadrupède, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Dryade de lune | Soigneur · Épique · IV | 250 · 10 · 80 | Nymphe → Dryade → Druidesse → Oracle → Grande dryade → Mère-sève (+ « de lune ») | Vague de soin · ralentit ses cibles | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes bleu pâle ; forme ultime géante, aura bleu pâle |
| Barde d’automne | Contrôle · Épique · IV | 321 · 18 · 82 | Chanteur → Barde → Enchanteur → Mystique → Archidruide → Grand enchanteur (+ « d’automne ») | Entrave · frénésie | humanoïde, oreilles d’elfe et longs cheveux, bâton magique, robe, longue chevelure, teintes orange ; forme ultime géante, aura orange |
| Chevreuil des ronces | Rapide · Commune · IV | 171 · 15 · 18 | Faon → Chevreuil → Cerf → Daguet → Grand cerf → Cerf ancestral (+ « des ronces ») | Ruée · renvoie 20 % des coups | quadrupède, bois de cerf, teintes vert-jaune ; forme ultime géante, aura rose pâle |
| Lame elfe d’ombre | Guerrier · Commune · IV | 235 · 15 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « d’ombre ») | Cri de guerre · vol de vie 20 % | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes gris anthracite ; forme ultime géante, aura vert |
| Pixie des étoiles | Nuée · Commune · IV | 102 · 10 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « des étoiles ») | Essaimage · dégâts de zone | spectre flottant, ailes, teintes violet pâle, lueur blanc ; forme ultime géante, aura blanc |
| Archer de mousse | Tireur · Commune · V | 158 · 24 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « de mousse ») | Tir perçant · soigne ses voisins | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes vert ; forme ultime géante, aura vert-jaune |
| Griffonneau d’hiver | Volant · Rare · V | 197 · 17 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « d’hiver ») | Drain · +12 armure | quadrupède, ailes, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Racine de lune | Siège · Rare · V | 663 · 30 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « de lune ») | Séisme · ralentit ses cibles | tréant (arbre vivant), teintes bleu pâle et bleu ; forme ultime géante, aura bleu pâle |
| Arbuste d’automne | Colosse · Rare · V | 773 · 25 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « d’automne ») | Carapace · frénésie | tréant (arbre vivant), teintes orange et brun sombre ; forme ultime géante, aura orange |
| Renard des ronces | Assassin · Épique · V | 327 · 36 · 22 | Renardeau → Renard → Lynx → Kitsune → Renard spectre → Kitsune ancien (+ « des ronces ») | Charge · renvoie 20 % des coups | quadrupède, teintes vert-jaune ; forme ultime géante, aura rose pâle |
| Dryade de printemps | Soigneur · Épique · V | 275 · 10 · 80 | Nymphe → Dryade → Druidesse → Oracle → Grande dryade → Mère-sève (+ « de printemps ») | Vague de soin · régénère 6 PV/s | humanoïde, couronne de feuilles, bâton magique, robe, longue chevelure, teintes vert pâle ; forme ultime géante, aura orange |
| Barde d’ombre | Contrôle · Épique · V | 310 · 20 · 82 | Chanteur → Barde → Enchanteur → Mystique → Archidruide → Grand enchanteur (+ « d’ombre ») | Entrave · vol de vie 20 % | humanoïde, oreilles d’elfe et longs cheveux, bâton magique, robe, longue chevelure, teintes gris anthracite ; forme ultime géante, aura vert |
| Chevreuil des étoiles | Rapide · Commune · V | 165 · 17 · 18 | Faon → Chevreuil → Cerf → Daguet → Grand cerf → Cerf ancestral (+ « des étoiles ») | Ruée · dégâts de zone | quadrupède, bois de cerf, teintes violet pâle ; forme ultime géante, aura blanc |
| Lame elfe d’hiver | Guerrier · Légendaire · V | 227 · 17 · 20 | Recrue → Lame elfe → Danse-lame → Gardien → Maître-lame → Seigneur elfe (+ « d’hiver ») | Cri de guerre · +12 armure | humanoïde, oreilles d’elfe et longs cheveux, épée, longue chevelure, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Pixie de lune | Nuée · Légendaire · V | 98 · 11 · 16 · ×2 | Luciole → Pixie → Farfadet → Fée → Sylphe → Esprit ailé (+ « de lune ») | Essaimage · ralentit ses cibles | spectre flottant, ailes, teintes bleu pâle, lueur bleu pâle ; forme ultime géante, aura bleu pâle |
| Archer d’automne | Tireur · Légendaire · V | 167 · 23 · 90 · ×2 | Éclaireur → Archer → Rôdeur → Traqueur → Tireur sylvain → Œil-de-lune (+ « d’automne ») | Tir perçant · frénésie | humanoïde, oreilles d’elfe et longs cheveux, arc, longue chevelure, teintes orange ; forme ultime géante, aura orange |
| Griffonneau des ronces | Volant · Légendaire · V | 184 · 19 · 50 | Faon ailé → Griffonneau → Griffon → Hippogriffe → Griffon royal → Roi-griffon (+ « des ronces ») | Drain · renvoie 20 % des coups | quadrupède, ailes, teintes vert-jaune ; forme ultime géante, aura rose pâle |
| Racine de printemps | Siège · Légendaire · V | 617 · 32 · 24 | Souche → Racine → Arbre-bélier → Chêne guerrier → Arbre-tonnerre → Ancien (+ « de printemps ») | Séisme · régénère 6 PV/s | tréant (arbre vivant), teintes vert pâle et vert ; forme ultime géante, aura orange |
| Arbuste d’ombre | Colosse · Légendaire · V | 820 · 23 · 24 | Pousse → Arbuste → Sylvain → Tréant → Gardien sylvestre → Patriarche (+ « d’ombre ») | Carapace · vol de vie 20 % | tréant (arbre vivant), teintes gris anthracite et vert sombre ; forme ultime géante, aura vert |

### La Horde Sauvage

| Lignée | Rôle · rareté · ère | PV · attaque · portée | Les 6 formes | Compétence (forme 4+) · trait | Visuel |
| --- | --- | --- | --- | --- | --- |
| Meute | Rapide · Commune · I | 150 · 14 · 18 | Louveteau → Loup → Loup gris → Loup alpha → Loup géant → Fenrir | Ruée | quadrupède, teintes gris ; forme ultime géante, aura cyan |
| Primates | Tireur · Commune · I | 160 · 19 · 78 · ×2 | Ouistiti → Singe hurleur → Babouin → Orang-outan → Gorille → Roi-singe | Tir perçant | humanoïde, tête de singe, pierres à lancer, teintes brun ; forme ultime géante, aura orange |
| Charges | Siège · Rare · I | 650 · 24 · 22 | Marcassin → Sanglier → Rhinocéros → Rhino cuirassé → Rhino de guerre → Béhémoth | Séisme | quadrupède, défenses, teintes orange ; forme ultime géante, aura orange |
| Félins | Assassin · Épique · I | 320 · 30 · 22 | Lionceau → Lynx → Panthère → Lion → Lion à crinière noire → Lion solaire | Charge | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Babouin des steppes | Guerrier · Commune · I | 188 · 15 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « des steppes ») | Cri de guerre · +18 % de vitesse | humanoïde, tête de singe, teintes orange ; forme ultime géante, aura orange |
| Furet de sang | Nuée · Commune · I | 93 · 9 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « de sang ») | Essaimage · frénésie | quadrupède, teintes rouge ; forme ultime géante, aura rouge |
| Chimpanzé des neiges | Tireur · Commune · I | 139 · 20 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « des neiges ») | Tir perçant · +12 armure | humanoïde, tête de singe, pierres à lancer, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Roussette des jungles | Volant · Rare · I | 152 · 17 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « des jungles ») | Drain · coups venimeux | quadrupède, ailes, teintes vert ; forme ultime géante, aura vert-jaune |
| Bison de foudre | Siège · Rare · I | 582 · 25 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « de foudre ») | Séisme · dégâts de zone | quadrupède, corne, armure, teintes bleu ; forme ultime géante, aura cyan |
| Ours du désert | Colosse · Rare · I | 680 · 21 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « du désert ») | Carapace · régénère 6 PV/s | quadrupède, teintes orange ; forme ultime géante, aura or pâle |
| Ocelot des ténèbres | Assassin · Épique · II | 300 · 31 · 22 | Chaton → Ocelot → Guépard → Léopard → Tigre → Tigre-roi (+ « des ténèbres ») | Charge · vol de vie 20 % | quadrupède, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Chaman de feu | Soigneur · Épique · II | 251 · 9 · 80 | Guérisseur → Chaman → Sage → Ancien → Chaman-roi → Esprit-singe (+ « de feu ») | Vague de soin · explose en mourant | humanoïde, tête de singe, bâton magique, robe, teintes orange ; forme ultime géante, aura orange |
| Varan des steppes | Contrôle · Épique · II | 284 · 18 · 82 | Lézard → Varan → Basilic → Caïman → Crocodile → Léviathan (+ « des steppes ») | Entrave · +18 % de vitesse | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Lycaon de sang | Rapide · Commune · II | 151 · 15 · 18 | Chacal → Lycaon → Hyène → Hyène tachetée → Hyène géante → Reine-hyène (+ « de sang ») | Ruée · frénésie | quadrupède, teintes rouge ; forme ultime géante, aura rouge |
| Babouin des jungles | Guerrier · Commune · II | 208 · 15 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « des jungles ») | Cri de guerre · coups venimeux | humanoïde, tête de singe, teintes vert ; forme ultime géante, aura vert-jaune |
| Furet de foudre | Nuée · Commune · II | 90 · 10 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « de foudre ») | Essaimage · dégâts de zone | quadrupède, teintes bleu ; forme ultime géante, aura cyan |
| Chimpanzé du désert | Tireur · Commune · II | 153 · 20 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « du désert ») | Tir perçant · régénère 6 PV/s | humanoïde, tête de singe, pierres à lancer, teintes orange ; forme ultime géante, aura or pâle |
| Roussette des ténèbres | Volant · Rare · II | 168 · 17 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « des ténèbres ») | Drain · vol de vie 20 % | quadrupède, ailes, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Bison de feu | Siège · Rare · II | 565 · 28 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « de feu ») | Séisme · explose en mourant | quadrupède, corne, armure, teintes orange ; forme ultime géante, aura orange |
| Ours des steppes | Colosse · Rare · II | 750 · 21 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « des steppes ») | Carapace · +18 % de vitesse | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Ocelot de sang | Assassin · Épique · III | 330 · 31 · 22 | Chaton → Ocelot → Guépard → Léopard → Tigre → Tigre-roi (+ « de sang ») | Charge · frénésie | quadrupède, teintes rouge ; forme ultime géante, aura rouge |
| Chaman des neiges | Soigneur · Épique · III | 243 · 10 · 80 | Guérisseur → Chaman → Sage → Ancien → Chaman-roi → Esprit-singe (+ « des neiges ») | Vague de soin · +12 armure | humanoïde, tête de singe, bâton magique, robe, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Varan des jungles | Contrôle · Épique · III | 274 · 20 · 82 | Lézard → Varan → Basilic → Caïman → Crocodile → Léviathan (+ « des jungles ») | Entrave · coups venimeux | quadrupède, teintes vert ; forme ultime géante, aura vert-jaune |
| Lycaon de foudre | Rapide · Commune · III | 167 · 15 · 18 | Chacal → Lycaon → Hyène → Hyène tachetée → Hyène géante → Reine-hyène (+ « de foudre ») | Ruée · dégâts de zone | quadrupède, teintes bleu ; forme ultime géante, aura cyan |
| Babouin des ténèbres | Guerrier · Commune · III | 229 · 14 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « des ténèbres ») | Cri de guerre · vol de vie 20 % | humanoïde, tête de singe, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Furet de feu | Nuée · Commune · III | 99 · 10 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « de feu ») | Essaimage · explose en mourant | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Chimpanzé des steppes | Tireur · Commune · III | 148 · 22 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « des steppes ») | Tir perçant · +18 % de vitesse | humanoïde, tête de singe, pierres à lancer, teintes orange ; forme ultime géante, aura orange |
| Roussette de sang | Volant · Rare · III | 162 · 18 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « de sang ») | Drain · frénésie | quadrupède, ailes, teintes rouge ; forme ultime géante, aura rouge |
| Bison des neiges | Siège · Rare · III | 623 · 27 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « des neiges ») | Séisme · +12 armure | quadrupède, corne, armure, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Ours des jungles | Colosse · Rare · III | 727 · 23 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « des jungles ») | Carapace · coups venimeux | quadrupède, teintes vert ; forme ultime géante, aura vert-jaune |
| Ocelot de foudre | Assassin · Épique · III | 308 · 33 · 22 | Chaton → Ocelot → Guépard → Léopard → Tigre → Tigre-roi (+ « de foudre ») | Charge · dégâts de zone | quadrupède, teintes bleu ; forme ultime géante, aura cyan |
| Chaman du désert | Soigneur · Épique · III | 258 · 9 · 80 | Guérisseur → Chaman → Sage → Ancien → Chaman-roi → Esprit-singe (+ « du désert ») | Vague de soin · régénère 6 PV/s | humanoïde, tête de singe, bâton magique, robe, teintes orange ; forme ultime géante, aura or pâle |
| Varan des ténèbres | Contrôle · Épique · IV | 302 · 19 · 82 | Lézard → Varan → Basilic → Caïman → Crocodile → Léviathan (+ « des ténèbres ») | Entrave · vol de vie 20 % | quadrupède, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Lycaon de feu | Rapide · Commune · IV | 161 · 16 · 18 | Chacal → Lycaon → Hyène → Hyène tachetée → Hyène géante → Reine-hyène (+ « de feu ») | Ruée · explose en mourant | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Babouin de sang | Guerrier · Commune · IV | 222 · 16 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « de sang ») | Cri de guerre · frénésie | humanoïde, tête de singe, teintes rouge ; forme ultime géante, aura rouge |
| Furet des neiges | Nuée · Commune · IV | 96 · 11 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « des neiges ») | Essaimage · +12 armure | quadrupède, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Chimpanzé des jungles | Tireur · Commune · IV | 163 · 22 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « des jungles ») | Tir perçant · coups venimeux | humanoïde, tête de singe, pierres à lancer, teintes vert ; forme ultime géante, aura vert-jaune |
| Roussette de foudre | Volant · Rare · IV | 179 · 18 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « de foudre ») | Drain · dégâts de zone | quadrupède, ailes, teintes bleu ; forme ultime géante, aura cyan |
| Bison du désert | Siège · Rare · IV | 602 · 30 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « du désert ») | Séisme · régénère 6 PV/s | quadrupède, corne, armure, teintes orange ; forme ultime géante, aura or pâle |
| Ours des ténèbres | Colosse · Rare · IV | 800 · 22 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « des ténèbres ») | Carapace · vol de vie 20 % | quadrupède, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Ocelot de feu | Assassin · Épique · IV | 339 · 32 · 22 | Chaton → Ocelot → Guépard → Léopard → Tigre → Tigre-roi (+ « de feu ») | Charge · explose en mourant | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Chaman des steppes | Soigneur · Épique · IV | 250 · 10 · 80 | Guérisseur → Chaman → Sage → Ancien → Chaman-roi → Esprit-singe (+ « des steppes ») | Vague de soin · +18 % de vitesse | humanoïde, tête de singe, bâton magique, robe, teintes orange ; forme ultime géante, aura orange |
| Varan de sang | Contrôle · Épique · IV | 321 · 18 · 82 | Lézard → Varan → Basilic → Caïman → Crocodile → Léviathan (+ « de sang ») | Entrave · frénésie | quadrupède, teintes rouge ; forme ultime géante, aura rouge |
| Lycaon des neiges | Rapide · Commune · IV | 171 · 15 · 18 | Chacal → Lycaon → Hyène → Hyène tachetée → Hyène géante → Reine-hyène (+ « des neiges ») | Ruée · +12 armure | quadrupède, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Babouin de foudre | Guerrier · Commune · IV | 235 · 15 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « de foudre ») | Cri de guerre · dégâts de zone | humanoïde, tête de singe, teintes bleu ; forme ultime géante, aura cyan |
| Furet du désert | Nuée · Commune · IV | 102 · 10 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « du désert ») | Essaimage · régénère 6 PV/s | quadrupède, teintes orange ; forme ultime géante, aura or pâle |
| Chimpanzé des ténèbres | Tireur · Commune · V | 158 · 24 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « des ténèbres ») | Tir perçant · vol de vie 20 % | humanoïde, tête de singe, pierres à lancer, teintes gris anthracite ; forme ultime géante, aura violet pâle |
| Roussette de feu | Volant · Rare · V | 197 · 17 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « de feu ») | Drain · explose en mourant | quadrupède, ailes, teintes orange ; forme ultime géante, aura orange |
| Bison des steppes | Siège · Rare · V | 663 · 30 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « des steppes ») | Séisme · +18 % de vitesse | quadrupède, corne, armure, teintes orange ; forme ultime géante, aura orange |
| Ours de sang | Colosse · Rare · V | 773 · 25 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « de sang ») | Carapace · frénésie | quadrupède, teintes rouge ; forme ultime géante, aura rouge |
| Ocelot des neiges | Assassin · Épique · V | 327 · 36 · 22 | Chaton → Ocelot → Guépard → Léopard → Tigre → Tigre-roi (+ « des neiges ») | Charge · +12 armure | quadrupède, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Chaman des jungles | Soigneur · Épique · V | 275 · 10 · 80 | Guérisseur → Chaman → Sage → Ancien → Chaman-roi → Esprit-singe (+ « des jungles ») | Vague de soin · coups venimeux | humanoïde, tête de singe, bâton magique, robe, teintes vert ; forme ultime géante, aura vert-jaune |
| Varan de foudre | Contrôle · Épique · V | 310 · 20 · 82 | Lézard → Varan → Basilic → Caïman → Crocodile → Léviathan (+ « de foudre ») | Entrave · dégâts de zone | quadrupède, teintes bleu ; forme ultime géante, aura cyan |
| Lycaon du désert | Rapide · Commune · V | 165 · 17 · 18 | Chacal → Lycaon → Hyène → Hyène tachetée → Hyène géante → Reine-hyène (+ « du désert ») | Ruée · régénère 6 PV/s | quadrupède, teintes orange ; forme ultime géante, aura or pâle |
| Babouin de feu | Guerrier · Légendaire · V | 227 · 17 · 20 | Macaque → Babouin → Mandrill → Gorille → Dos-argenté → Roi-gorille (+ « de feu ») | Cri de guerre · explose en mourant | humanoïde, tête de singe, teintes orange ; forme ultime géante, aura orange |
| Furet des steppes | Nuée · Légendaire · V | 98 · 11 · 16 · ×2 | Rat → Furet → Belette → Glouton → Carcajou → Roi-glouton (+ « des steppes ») | Essaimage · +18 % de vitesse | quadrupède, teintes orange ; forme ultime géante, aura orange |
| Chimpanzé de sang | Tireur · Légendaire · V | 167 · 23 · 90 · ×2 | Lémurien → Chimpanzé → Lanceur → Frondeur → Grand frondeur → Maître-frondeur (+ « de sang ») | Tir perçant · frénésie | humanoïde, tête de singe, pierres à lancer, teintes rouge ; forme ultime géante, aura rouge |
| Roussette des neiges | Volant · Légendaire · V | 184 · 19 · 50 | Chauve-souris → Roussette → Vampire ailé → Wyverne → Vouivre → Dragonnet (+ « des neiges ») | Drain · +12 armure | quadrupède, ailes, teintes bleu pâle ; forme ultime géante, aura cyan pâle |
| Bison des jungles | Siège · Légendaire · V | 617 · 32 · 24 | Bufflon → Bison → Aurochs → Mammouth → Mastodonte → Titan laineux (+ « des jungles ») | Séisme · coups venimeux | quadrupède, corne, armure, teintes vert ; forme ultime géante, aura vert-jaune |
| Ours de foudre | Colosse · Légendaire · V | 820 · 23 · 24 | Ourson → Ours → Grizzli → Ours-roc → Ours colosse → Ours ancestral (+ « de foudre ») | Carapace · dégâts de zone | quadrupède, teintes bleu ; forme ultime géante, aura cyan |
