#### Úkoly
1. Udělejte jakoukoliv jednoduchou animaci pomocí SMILu a vypublikujte ji pomocí [GitHub pages](https://pages.github.com/).

### SMIL(Synchronized Multimedia Integration Language)
SMIL je standard, který definuje tagy a elementy jejíchž pomocí lze animovat SVG. Lze také přidat uživatelské akce (mouseclick, mouseover apod.). Pomocí SMILu lze měnit téměř všechny atributy obsažené v objektech SVG.

[Specifikace SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#Introduction)

```xml
<svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect id="rectangle" x="400" y="100" width="400" height="200" fill="yellow" stroke="navy" stroke-width="10">
    <animate attributeName="width" from="400" to="100" begin="0s" dur="10s" />   
  </rect>
  <animate xlink:href="#rectangle" attributeName="height" from="200" to="50" begin="0s" dur="10s" />
</svg>
```

#### Čtyři tagy pomocí, kterých lze animovat SVG
* **animate** - pro animaci XML nebo CSS atributů
```xml
<svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect id="rectangle" x="400" y="100" width="400" height="200" fill="yellow" stroke="navy" stroke-width="10" />
    <animate xlink:href="#rectangle" fill="freeze" dur="5s" begin="1s" to="#FFFFFF" from="#000000" calMode="linear" attributeName="fill"/>
</svg>
```
* **set** - nastaví atribut pro určitý časový úsek
```xml
<svg width="12cm" height="4cm" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect id="rectangle" x="400" y="100" width="400" height="200" fill="yellow" stroke="navy" stroke-width="10" />
  <set xlink:href="#rectangle" attributeName="fill" to="black" begin="2s" dur="5s" />
</svg>
```
* **animateMotion** - animace podél cesty
```xml
<svg width="1000px" height="1000px">
    <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
    </circle>
</svg>
```
`repeatCount="indefinite"` - animace se bude neustále opakovat (číslem lze zadat počet opakování)
* **animateTransform** - animace transformace objektu (rotace, škálování apod.)
```xml
<svg width="1000px" height="1000px">
    <rect x="0" y="50" width="15" height="34" fill="blue" stroke="black" stroke-width="1">
        <animateTransform
                attributeName="transform"
                begin="0s"
                dur="20s"
                type="rotate"
                from="0 60 60"
                to="360 100 60"
                repeatCount="indefinite" />
    </rect>
</svg>
```
`from="0 60 60"` a `to="360 60 60"` - první hodnota představuje stupeň otočení a další dvě bod, kolem kterého se rotuje
#### Příklad řetězení animace
```xml
<svg width="600" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect id="BlueSquare" stroke="blue" height="80" width="23" stroke-width="5" fill="#ffffff">
        <animate attributeName="x" attributeType="XML" begin="g_anim.end" dur="3s" fill="freeze" from="0" to="300"/>
    </rect>

    <rect id="GreenSquare" stroke="green" height="80" width="67" stroke-width="5" fill="#ffffff">
        <animate id="g_anim" attributeName="x" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="0"/>
    </rect>
</svg>
```
`begin="g_anim.end"` - animace začne po skončení animace s id=g_anim
#### Interaktivní SVG
Stejně jako v případě eventů (mouseout, mouseover, click) v Javascriptu můžeme přidat interaktivitu i do SVG. Animaci můžeme ale také zastavit a znovu spustit. Více příkladů [zde](http://edutechwiki.unige.ch/en/Interactive_SVG-SMIL_animation_tutorial).
```xml
<svg height="200" width="500" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <ellipse stroke-width="2" stroke="black" fill="yellow" cx="3cm" cy="2cm" ry="1cm" rx="2cm">
    <animate fill="freeze" dur="0.1s" to="blue" from="yellow" attributeName="fill" begin="mouseover"/>
    <animate fill="freeze" dur="0.1s" to="yellow" from="blue" attributeName="fill" begin="mouseout"/>
  </ellipse>
</svg>
```

#### Zdroje
* [SVG-SMIL animation tutorial](http://edutechwiki.unige.ch/en/SVG-SMIL_animation_tutorial)
* [Interactive SVG-SMIL animation tutorial](http://edutechwiki.unige.ch/en/Interactive_SVG-SMIL_animation_tutorial)
* [SMIL Animation](https://www.w3.org/TR/smil-animation/)
* [Mozilla Animation with SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)
* [Rotating elements](http://www.petercollingridge.co.uk/blog/svg-animation-rotating-elements)