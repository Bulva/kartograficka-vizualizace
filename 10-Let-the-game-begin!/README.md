![Let the game begin!](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/10-Let-the-game-begin!/images/saw.png)

## Tvorba animace
V souboru `index_edit.html` se nachází téměř prázdná šablona HTML souboru kde budete upravovat kód. Pokud si s některou částí nebudete vědět rady, můžete se pro nápovědu podívat do souboru `index.html`.

1. Nejprve bude nutné naimportovat všechny knihovny, které budeme chtít použít. Budeme potřebovat tyto knihovny:
    *  [JQuery](https://jquery.com/)
    *  [Bootstrap](https://getbootstrap.com/)
       *  budeme potřebovat `.css` i `.js` soubor
    * [Vivus.js](https://maxwellito.github.io/vivus/)
    
    Pro každou knihovnu zkuste v dokumentaci najít co je potřeba naimportovat do souboru. Obvykle najdete i příklad jak využít CDN. Pokud nenajdete CDN tak si celý soubor stáhněte a můžete ho naimportovat lokálně.
    
2. Vytvořte si strukturu stránky. Definujte si levý `div` kde bude mapa, pravý `div` kde bude tabulka s univerzitama a další `div` (řádek), kde budou tlačítka pro ovládání animace. Pro definování struktury stránky použijte [Bootstrap](https://getbootstrap.com/). V dokumentaci v [kapitole Layout](https://getbootstrap.com/docs/4.3/layout/overview/) můžete nalézt informace o parametru `container` pro tag `div`. Vytvořte v HTML souboru **jeden** kontejner. Do tohoto kontejneru vložte **2** řádky (row). Jeden pro dva `divy`, které budou obsahovat mapu a tabulku a další pro tlačítka. `Divy` vytvořte s parametry začínajícími na `col-`. Všechno toto včetně příkladu můžete najít v dokumentaci v [kapitole Grid](https://getbootstrap.com/docs/4.3/layout/grid/). `Div` obsahující mapu bude šírší než tabulka. **Elementy do sebe můžete libovolně zanořovat.**
3. Pokud si nebudete jistí šířkou `divů` nebo si nebudete jistí jestli se správně vykreslili můžete si v CSS definovat třídu, která bude mít barevné pozadí a tuto třídu pak přiřadit `divům`. Tím se vám vykreslí elementy barevně.
4. Do `divu`, který bude představovat mapu zkopírujte SVG z `/images/stat_hranice_univerzity.svg`
5. Do `divu`, který bude představovat tabulku vytvořte tabulku. Bootstrap opět nabízí již předem nastylované tabulky. Informace jsou v [kapitole o tabulkách](https://getbootstrap.com/docs/4.3/content/tables/). Pokud budete mít problém s vytvořením tabulky, tak s ní neztrácejte čas a zkopírujte ji s ukázky.
6. V souboru `animace_edit.js` budete tvořit animaci. Tento soubor si načtěte do HTML souboru. Nachází se tam proměnná universities, která obsahuje objekty univerzit. Každý objekt má `id`, které se rovná hodnotě `id` cesty v SVG.
7. V souboru můžete používat JQuery a nebo klasický JavaScript (vanilla). Všechny operace zanořte do funkce, která počká na načtení stránky. Pokud použijete JQuery tak nezapomeňte, že JQuery má vždycky jen selektor a funkci. Tyto věci můžete libovolně kombinovat. Pokud si nebudete vědět rady tak se podívejte do kódu ukázky a nebo na příklad z minulé hodiny.
8. Aby animace vypadala líp přidejte animaci hranic, které se postupně vykreslí. Sice to přímo nesouvisí s naší animací, ale pokud budete mít za úkol animovat cestu, tak tuto knihovnu můžete použít přímo pro animaci. Animaci přidáte pomocí knihovny `Vivus.js`. Je to záležitost na jeden řádek. Podívejte se na příklad v [kapitole Usage](https://github.com/maxwellito/vivus#usage)
9. Samotná animace bude velice jednoduchá. Animaci můžete buď napsat v základním Javascriptu a nebo použít JQuery. Animace bude fungovat takto:
    * počáteční rok animace bude 1345 (vypište ho do místa, které jste si pro něj připravili na stránce)
    * vezmete rok (v prvním průchodu 1345) a zkusíte najít bod (univerzitu), která má rok založení shodný s rokem, který zrovna máme v cyklu. Tento rok musíte najít v poli objektů univerzit. Pokud taková univerzita neexistuje tak cyklus bude pokračovat dál, ale s rokem+1 (v druhém průchodu 1346 atd.).
    * Pokud univerzitu najdete mezi objekty, tak vezmete `id` univerzity a podle tohoto `id` najdete v SVG cestu se stejným `id` (bude se jednat o bod univerzity). 
    * Této cestě pak nastavíte průhlednost na 1 a tím ji zobrazíte. 
    * Nakonec tuto univerzitu přidáte do tabulky. Můžete použít funkci v JQuery. Nejrychlejší bude zkusit googlit něco ve stylu `how to add row to the table in jquery`.
10. Nakonec přidejte na stránku tlačítko, na které navážete událost a při kliknutí animaci spustíte. Pro přidání tlačítka zase můžete použít Boostrap, [kapitola Buttons](https://getbootstrap.com/docs/4.3/components/buttons/) 
    * Po kliknutí na tlačítko se spustí animace a zároveň se změní text v tlačítku na **Zastavit animaci**
11. Kdo bude chtít tak může přidat i tlačítko pro pauznutí animaci a nebo pro skoky mezi jednotlivými stavy animace.
