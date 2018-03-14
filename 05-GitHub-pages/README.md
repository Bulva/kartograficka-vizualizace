### GitHub pages
Jednoduchý hosting přímo z GitHubu. Je napojený přímo na repozitář na vašem Github účtu, který si vytvoříte. Tímto způsobem odevzdáte animaci, kterou vytvoříte v rámci 2. cvičení.

**Postup**
* Vytvořte si účet na [GitHubu](https://github.com/)
* Vytvořte si [repozitář](https://github.com/new) s názvem ve formátu `username.github.io`
![GitHub repository](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/05-GitHub-pages/images/new-repository.png)
* Naklonujte si svůj repozitář
  ``` bash
  git clone https://github.com/username/username.github.io
  ```
* Vytvořte uvnitř repozitáře soubor **index.html** a vložte do něj obsah (třeba animaci)
* Nakonec pusťte tyto příkazy
  ``` bash
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  
  git add --all
  git commit -m "Initial commit"
  git push -u origin master
  ```
  `git add --all` - zajistí trackování celého obsahu repozitáře (všech souborů, včetně našeho nového index.html)

  `git commit -m "Initial commit"` - udělá lokální uložení změn. Změny ještě nejsou na serveru, ale máme je pouze v počítači.

  `git push -u origin master` - odešle změny na servery GitHubu
* Na adrese **https://username.github.io** by měl být vidět obsah index.html 