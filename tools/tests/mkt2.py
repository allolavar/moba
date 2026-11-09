# Extrait le script du jeu (jeu/index.html) vers t2.js pour les tests Node.
import re, os
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, '..', '..', 'jeu', 'index.html'), encoding='utf-8').read()
open(os.path.join(here, 't2.js'), 'w', encoding='utf-8').write(re.findall(r'<script>([\s\S]*?)</script>', s)[0])
