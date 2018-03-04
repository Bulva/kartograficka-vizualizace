#### Úkoly
1. Vytvořte v textovém editoru čtverec (modrý obrys, červená výplň) a kruh (libovolné barvy) a kolem těchto objektů vytvořte pomocí elementu path pěticípou hvězdu.
2. Nahrajte si shapefily ze složky data do QGISu a vyexportujte je pomocí SimpleSvg pluginu. Následně se jednotlivé elementy pokuste upravit v XML editoru Inkscapu.
3. Použijte dokumentaci kartograph.py a pokuste se vytvořit ze shapefilu SVG včetně atributů - použijeme jej na příští hodině

### SVG (Scalable Vector Graphics)
Jedná se o vektorový formát založený na XML gramatice. Díky způsobu zápisu vektorových objektů ve formátu XML je formát lidsky čitelný a kompatibilní s většinou dalších standardů, které vydává W3C (HTML, CSS, XLS...). Stejně jako HTML využivá SVG DOM, který umožňuje hierarchicky přistupovat k jednotlivým objektům nebo jejich atributům a měnit tak vlastnosti objektů. Toho lze využít především pro animaci a eventy navázané na určitého části SVG obrázku. Animace může být jak deklarativní (pomocí parametru `animate`) nebo naskriptovaná (např. pomocí JavaScriptu)

Poslední verze 1.1 s úpravama je ze 16. srpna 2011 a obsahuje kompletní specifikaci standardu SVG včetně příkladů [(https://www.w3.org/TR/SVG11/)](https://www.w3.org/TR/SVG11/).

Obrázek ve formátu SVG (obvykle koncovka .svg) lze do HTML dokumentu vložit buď přímo (mezi tagy `<svg>` a `</svg>`) nebo ho odkazovat pomocí tagu `<img>`.
```html
<html>
<body>

<h1>My first SVG</h1>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

</body>
</html>
```

#### Systém souřadnic
Počátkem souřadnic SVG canvasu je levý horní roh. 
![SVG Coordinate system](https://raw.githubusercontent.com/Bulva/kartograficka-vizualizace/master/03-Z%C3%A1klady-SVG/images/InitialCoords.png)
> Zkuste najít ve specifikaci jaký je rozdíl mezi canvasem a viewportem

> Co uděláme s jiným souřadnicovým systémem?

#### Základní elemety SVG
* [Rectangle](https://www.w3.org/TR/SVG11/shapes.html#RectElement)
* [Circle](https://www.w3.org/TR/SVG11/shapes.html#CircleElement)
* [Ellipse](https://www.w3.org/TR/SVG11/shapes.html#EllipseElement)
* [Line](https://www.w3.org/TR/SVG11/shapes.html#LineElement)
* [Polygon](https://www.w3.org/TR/SVG11/shapes.html#PolygonElement)
* [Polyline](https://www.w3.org/TR/SVG11/shapes.html#PolylineElement)
* [Path](https://www.w3.org/TR/SVG11/paths.html)
* [Text](https://www.w3.org/TR/SVG11/text.html)

Každý z objektů obsahuje sadu základních atributů (např. `width`, `height`, `x`, `y` apod.), prezentační parametrů (např. `fill`, `stroke` atd.), eventů (`onmouseover` atd.) a dalších core a podmíněných atributů.
> Jaká zasadní výhoda týkající se atributů objektu souvisí s XML (resp. HTML)? 

##### Rectangle
```xml
<svg width="12cm" height="4cm" viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="400" y="100" width="400" height="200"
        fill="yellow" stroke="navy" stroke-width="10"  />
</svg>
```

#### Path
Je trochu složitější, protože může obsahovat různé oblouky a beziérovi křivky. Tvar cesty se zapisuje do parametru `d="path-data"`. Může obsahovat jak relativní tak absolutní přesuny kurzoru (ve smyslu tužky, který kreslí), definice uzavření cesty apod.
```xml
<svg width="12cm" height="4cm" viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 100 100 L 300 100 L 200 300 z"
        fill="red" stroke="blue" stroke-width="3" />
</svg>
```
_M (moveto) - přesune kurzor na určitou pozici, bez kreslení_

_L (lineto) - přesune kurzor na určitou pozici, kreslí linii_

_z nebo Z (closepath) - přesune kurzor na počáteční pozici cesty, uzavře objekt_

Velká písmena (např. M a L) obvykle znamenají absolutní pozici (od levého horního rohu). Málá písmena pak znamenají pozici relativní (od pozice, kde se nachází kurzor)

Další příklady pro jiné elementy ve [specifikaci](https://www.w3.org/TR/SVG11/)

#### SVG v Inkscapu a QGISu
Inkscape používá SVG jako svůj nativní formát (různé formy SVG). Pro editaci přímo v Inkscapu je zabudovaný XML Editor _(Edit -> XML Editor)_. Nezobrazuje však přímo XML jako textový editor, ale jednotlivé elementry rozkládá do hierarchické struktury a v této struktuře umožňuje měnit atributy elementrů.

QGIS nativně nepracuje s SVG, ale lze vyexportovat výřez dat pomocí [SimplSVG pluginu](https://plugins.qgis.org/plugins/simplesvg/). Neumožňuje přidání parametrů s atributové tabulky. Pak lze využít [kartograph.py](http://kartograph.org/docs/kartograph.py/). Je nutné ho nejdříve naklonovat z GitHubu. Kartograph.py je však už neudržovaný a ne vždy funguje dobře. Masochisti můžou použít můj plugin [(SVGAttributes)](https://github.com/Bulva/SvgAttributes), který jsem si napsal kvůli počítačové grafice (ale je taky neudržovaný a je otázka jak teď funguje).







