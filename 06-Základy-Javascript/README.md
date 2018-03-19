### Javascript
Multiplatformní jazyk vytvořený v roce 1995. Od roku 1997 je standardizován asociací ECMA (European Computer Manufacturers Association). Standardizovaná verze se jmenuje ECMAScript (současná verze ECMAScript 2017). Původně vyvíjen jen jako doplněk k HTML a Javě, později se prosadil na webu více a dnes se bez něj u dynamických prezentací neobejdeme. Spouštěn je na straně klienta (v prohlížeči), ale existují také řešení, které lze použít na straně serveru (Node.js).

Je dobré se naučit hned na začátku psát co nejčištější kód a dodržovat style guide. Style guide definuje jakým způsobem máme stylovat kód (odsazení závorek, mezery mezi znaky apod.). Hodí se to zejména pro dodržení jednotného stylování pokud vy nebo někdo jiný bude číst váš kód. Můžete si vybrat jaký budete používat style guide. Můžete zkusit třeba [Google JavaScript style guide](https://google.github.io/styleguide/jsguide.html).

Důležitou věcí je také komentování kódu. Pro jednotný vzhled je dobré vybrat také způsob dokumentace. Javascript používá [JSDoc](http://usejsdoc.org/). Ukázku komentování funkcí máte v souboru **map.js**. Zbytek si vysvětlíme na hodině.

Obvykle má každá dobrý IDE editor možnost kód nějak automaticky zformátovat. V případě WebStormu se tato možnost nachází v nabídce *Code -> Reformat Code (Ctrl+Alt+L)*
#### Úkoly
Dnes přeskočíme prezentaci a přejdeme přímo k vytvoření jednoduché aplikace, která bude zobrazovat kraje ČR s počtem obyvatel v jednotlivých krajích pro různé roky.
1. Ve složce `data` je geojson, který obsahuje kraje ČR včetně popisných hodnot z ArcČR, verze 3.2. Pro export včetně atributů použijte [můj plugin](https://github.com/Bulva/SvgAttributes). Stáhněte si .zip a rozbalte jej do `C:Users/uzivatel/.qgis2/python/plugins`. Poté jej zaškrněte v nainstalovaných pluginech v QGISu. 
1. Do souboru `index.html`, který jste si vytvořili minule ve vašem GitHub repozitáři vložte SVG, které vygeneruje plugin.
    ```html
    <object id="svg-kraje" data="./path/to/kraje.svg" type="image/svg+xml"></object>
    ```
1. Stránku si ještě na efekt trochu upravíme. Doplníme stylovaní v CSS a nějaké divy. Stylování a HTML soubor najdete v repozitáři `main.css` a `index.html`.
1. Vytvoříme si soubor [map.js]() kde budeme pracovat s SVG a jeho elementy.

### Přehled základních funkcí
#### getElementById()
Selektuje objekty z DOMu pomocí ID
```javascript
// vybere jakýkoliv objekt obsažený v HTML dokumentu s ID "svg-kraje"
document.getElementById("svg-kraje");
```

#### getSVGDocument()
Načte obsah SVG
```javascript
object.getSVGDocument();
```

#### getElementsByTagName()
Selektuje objekty podle názvu tagu
```javascript
// vybere všechny objekty s tagem "path" - všechny cesty v SVG
object.getElementsByTagName("path");
```

#### addEventListener()
Přidá event listener k danému objektu
```javascript
object.addEventListener("mouseover", function);
```

#### setTimeout()
Provede nějakou operaci po určité době
```javascript
setTimeout(function () {
    // provádění operací
}, ms);
```


