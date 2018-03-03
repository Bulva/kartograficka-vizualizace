## Git
[Co je to Git - článek na itnetwork](https://www.itnetwork.cz/software/git/git-tutorial-historie-a-principy/)

#### Instalace Gitu
* Stažení Gitu a jeho instalace na adrese: [https://git-scm.com/downloads](https://git-scm.com/downloads)
* Po instalaci si otevřete příkazový řádek a ověřte instalaci pomocí `git --version`
  ![Git version command](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/02-Git-a-GitHub/images/git-version.png)
    * Pokud git nefunguje je možné, že není nastavena cesta v envinronment variables
    
#### Použití Gitu
Otevřeme si konzoli v adresáři kam chceme umístit nový repozitář. V našem případě repozitář s materiály ke kartografické vizualizaci.
``` bash
git clone https://github.com/Bulva/kartograficka-vizualizace.git
git pull
```
**git clone** - zajistí naklonování repozitáře z GitHubu (pouštíte jen jednou)

**git pull** - stáhne aktuální verzi repozitáře (tohle pustíte vždy na začátku cvičení)

#### Další materiály
* [Super a interaktivní návod jak pracovat s Gitem](https://try.github.io/levels/1/challenges/1)
* [Simple Guide - no deep shit](http://rogerdudler.github.io/git-guide/)

