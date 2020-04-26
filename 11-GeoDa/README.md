#### Zadání cvičení
* Vyberte si nějakou libovolnou datovou sadu (prostorový formát + informace obsažené v něm). Můžete si sadu i vytvořit spojením prostorových a popisných dat.
  * Můžete využít data např. z Eurostatu, OSN nebo datové sady poskytované GeoDou (kromě datové sady použití v dokumentaci - NYC)
* Tuto datovou sadu nahrajte do programu [GeoDa](http://geodacenter.github.io/)
* Na těchto datech provědte exploratorní prostorovou analýzu, přitom použijte tyto nástroje
  * histogram, na kterém budete zároveň demonstrovat brushing a linking
  * Scatter plot
  * Conditional plot - map
  * parallel coordinate plot
  * Dorlling map
* Pro každou z těchto metod okomentujte její princip a okomentujte i charakteristiky a trendy, které bude zobrazovat v datech
* Následně vysvětlete a proveďte shlukování pomocí metody K-means. Vyberte počet shluků, který bude správně reprezentovat daný trend v rozložení hodnot
* Nakonec proveďte analýzu hlavních komponent (PCA), okomentujte výsledky a popište k čemu se dá PCA využít

Pokud si nebudete vědět rady tak relativně podrobný popis jednotlivých metod najdete v dokumentaci GeoDy - [Workbook v dokumentaci](https://geodacenter.github.io/documentation.html)

### ESDA (Exploratory Spatial Data Analysis)
Techniky explorace dat využívající prostor jako jednu z charakteristik. Správně provedená analýza poskytuje informace o rozložení charakteristik, informace o odlehkých hodnotách nebo například vývoj určité charakteristiky v čase.


### [GeoDa](https://geodacenter.github.io/)
Program, který slouží k Explorační prostorové analýze dat (ESDA - Exploratory spatial data analysis). Jedná se o metody, které používáme pro průzkum, hledání a potvrzení hypotéz v prostorových datech (víc na přednášce...)

Nahrát data do GeoDy je velice jednoduché. Aplikace podporuje různé datové formáty. Navíc je možné využít také několik vzorků dat, na kterých je možné si vyzkoušet fungování jednotlivých funkcí.

![Nahrání dat do GeoDy](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/geoda_upload.png)

Pokud použijete ukázková data tak je možné se prokliknutím přes odkaz dostat k metadatům, které popisují jednotlivé charakteristiky datového souboru.

#### Nástroje GeoDy
##### Histogram
Klasická funkcionalita zobrazující rozložení určitého jevu v datovém souboru. Funkce histogramu se nachází v nabídce *Explore -> Histogram*.
Následně je možné využít funkce brushingu a linkingu. Brushing umožňuje výběr konkrétních objektů v mapovém okně i okně histogramu. Linking zajišťuje zobrazení těchto objektů i v připojeném okně. Pokud vyberem objekt v mapovém okně tak se vyberou stejné objekty i v okně histogramu a naopak.

![Histogram](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/histogram.png)

##### Scatter plot
Jedná se o klasickou metodu vizualizace zobrazení dvou proměnných. Každá proměnná je zobrazena na jedné ose. Společné hodnoty jsou následně vyneseny do grafu. Funkci lze vyvolat v nabídce *Explore -> Scatter plot*.
Pro jednotlivé hodnoty lze opět využít brushing, kdy se vypočítá pro vybrané body nový trend. Pomocí scatter plotu lze zjistit jestli spolu některé proměnné korelují, odhalit trend nebo najít odchylky v datech.

##### Conditional plot - mapa
Tato funkce se nachází v nabídce *Explore -> Conditional plot -> Map*. Po kliknutí se zobrazí okno s možností vybrat hodnoty na horizontální ose, vybrat hodnoty na verikální ose a hodnoty, které se promítnou do mapy.
Standardně se zobrazí 3x3 mapy. Každá osa grafu by defautlně měla obsahovat dva zlomy. Počet a způsob výpočtu těchto zlomů lze měnit po kliknutím pravým tlačítkem v okně a volbě *Horizontal/vertical bins break*. Stejně tak lze měnit statistiku, která se zobrazuje v mapě. Defaultně jsou zobrazeny odlehlé hodnoty.

![Conditonal map](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/conditional_map.png)

##### Parallel coordinate plot
Parallel coordinate plot slouží k vynesení více proměnných do grafu. Tuto funkci lze nalézt pod nabídkou *Explore -> Parallel Coordinate Plot* Na vertikální ose jsou jednotlivé proměnné zatímco na jednotlivých horizontálních osách jsou vyneseny hodnoty těchto proměnných. Hlavní výhodou je možnost sledovat změny jednotlivých charakteristik napříč objekty. To nám poskytuje možnost odhalení extrémně vysokých a nízkých hodnot nebo sledování vývoje určitých hodnot proměnných. V grafu lze opět využít brushing a linking.

![Parallel coordinate plot](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/parallel.png)

##### Dorlling map
Jedná se o druh anamorfózy, která nezachovává tvary ani vazby objektů v mapě. Zachovávají se pouze středy objektů, které jsou často nahrazeny jiným objektem, obvykle kruhem. Tento způsob vizualice dokáže zobrazit dvě vlastnosti v mapě. Pomocí této vizualizace lze odhalit prostoroví souvislost sledovaných proměnných. Tato funkce se nachází v nabídce *Map -> Cartogram*.

#### Shlukování a PCA (Principal component analysis)
##### Shlukování
Jedna z nejjednodušších metod shlukování je metoda K-means. Tato metoda nejprve definuje náhodné pozice centroidů, které představují cílový počet shluků. Následně jsou jednotlivá měření procházena a pro každou hodnotu je vypočítána kvadratická (euklidovská) vzdálenost. Po ukončení iterace napříč jednotlivými hodnotami se vypočítají nové pozice centroidů a pokračuje se stejným postupem dokud není splněna podmínka počtu iterací nebo se centroidům výrazně nemění pozice. Hlavním parametrem je zde výsledný počet shluků, který může výrazně měnit vizuální výsledek. Metoda K-means lze nalézt v nabídce *Clusters -> K Means*.

![Animace K-means](http://shabal.in/visuals/kmeans/top.gif)
![K-means](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/kmeans.png)
 
##### PCA (Principal component analysis)
Analýza hlavních komponent se používá především pro redukci dimenzionality vícerozměrných dat. Pokud máme například datový soubor o 20 proměnných tak pravděpodobně některé z proměnných na sobě budou závislé a tím pádem nebude nutné s těmito proměnnými počítat. Cílem je tedy redukovat počet proměnných při zachování co největší variability v datech. V současné době se tato metoda používá například pro redukci dimenzionality před použitím dat ve složitých výpočetních modelech strojového učení.

PCA se nachází v GeoDě v nabídce *Clusters -> PCA*. Na vstupu je nutné vybrat více proměnných (z těchto proměnných budeme chtít vytvořit hlavní komponenty, které nám řeknou, která data jsou "nadbytečná"). 

Jak funguje PCA je vidět například [zde](http://setosa.io/ev/principal-component-analysis/). Cílem je rotovat osu ve směru nejvyšší variability dat, protože chceme, aby data obsahovaly co nejvíce původní informace, ale za co největší úsporu dimenzionality (počtu proměnných).

![Rotace osy při PCA](http://4.bp.blogspot.com/-pleL0HvLUgU/UYqpNFdd8EI/AAAAAAAAAHA/uf11u9lcq5g/s1600/PCA_1.png)

Výstup z analýzy vypadá následovně:

![PCA](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/11-GeoDa/images/pca2.png)
První hodnota na obrázku (Standard deviation) vyjadřuje velikost směrodatné odchylky vyjádřené každou z hlavních komponent. První hodnota představuje směrodatnou odchylku první komponenty atd.

Další charakteristika (Proportion of variance) je procentuální vyjádření jednotlivých komponent v rámci variability dat. V podstatě říká kolik procent variability daná komponenta vyjadřuje. V našem případě první komponenta vyjadřuje 61 % variability dat, další vyjadřuje 28 % variability atd. Cumulative proportion pak vyjadřuje kumulativní hodnoty.

Kaiser criterion lze použít pro interpretaci kolik hlavních komponent vybrat. V podstatě jen říká kolik hlavních komponent má eigenvalue (hodnoty níže) vyšší než 1.

Další kritérium funguje velice podobně, ale zohledňuje počet hlavních komponent, které vysvětlují 95 % variability v datech. V našem případě kumulativní hodnoty variance 0.614905, 0.897039 a 0.943005.

Charakteristika Squared correlations říká kolik variability původní proměnné je vysvětlované v dané hlavní komponentě. Čím vyšší hodnota, tím více variability původní proměnné (v řádku) vysvětluje daná hlavní komponenta (ve sloupci). Hodnoty v řádku by měly v součtu dát 1 (100 %). V našem případě je vidět, že vzhledem k tomu, že jednotlivé proměnné jsou pouze různé roky dvou charakteristik jsou velké části těchto hodnot vysvětleny v prvních dvou komponentách. 

Výstup je možné uložit kliknutím na tlačítko *Save*. Defaultně nabízí okno takový počet komponent, který vyjadřuje 95 % variability dat. 




  
 
