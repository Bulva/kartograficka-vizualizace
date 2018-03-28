### Javascript
Animovat SVG jde taky pomocí CSS. Protože při animaci JavaScriptu vlastně používáme CSS atributy, můžeme tyto atributy upravovat samozřejmě taky v CSS. CSS3 přidalo do standardu možnosti jak vytvořit interaktivní animace. Postup je o něco méně intuitivní než v případě JavaScriptu, neumožňuje tolik možností pro složitější animace, ale lze taky použít. Problematické taky bude přistupovaní k atributům objektů, takže animace nebude tak univerzální. Ale my ji můžeme použít spíš jako doplněk hlavní animace.

Pozor na podporu starších prohlížečů, typicky EI9 a Safari 4-8. Některé mohou mít problém s animací v CSS a je potřeba tyto atributy upravit pomocí předpony `-ms-` nebo `-webkit-`. 
#### Úkoly
1. Vyexportujte si do SVG silnice pro Jihomoravský kraj a animujte je podobně jako v příkladu krajů. Poslední část textu (Příklad s dokreslením linie) 


### Přehled základních atributů týkajících se animace
Všechny atributy lze použít a změnit také v JavaScriptu a můžeme je dohromady kombinovat.
#### transition
Selektuje objekty z DOMu pomocí ID
```css
/* 
   transition mění atribut v nějakém časovém úseku. V tomto případě nastaví stroke-width v rozsahu 2 sekund.
   Velikost jakou nastaví jsme definovali po najetí na cestu 
*/
.path {
    transition: stroke-width 2s;
}

path:hover {
    stroke-width: 20px;
}
```

Hodnoty taky můžeme definovat zvlášť
```css
.path {
    transition-property: stroke-width;
    transition-duration: 2s;
}
```

#### transform
Transformuje objekt (rotace, deformace, velikost...)
```css
/*
    transform mění vlastnosti objektu. Pokud ho spojíme s transition tak animaci zase můžeme přiřadit nějaký časový úsek.
    Transform-origin mění místo od kterého změna začíná. Například v případě rotace udává střed rotace.
*/
.path {
    transition: transform 2s;
    fill: #000000;
}

path:hover {
    transform: rotate(45deg);
    transform-origin: 50px 50px;
}
```

#### @keyframes rule
Definuje v CSS kód pro animaci. Obvykle definuje začátek (0 % animace) a konec (100 % animace).
Jednoduchý příklad na [w3schools](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_keyframes).
```css
.path {
    fill: #000000;
    animation: mymove 5s infinite;    
}

/* začne animovat na 0px a postupně klesne o 200px dolů */
@keyframes mymove {
    from {top: 0;}
    to {top: 200px;}
}
```

##### Příklad s dokreslením linie
```css
.path {
    /* stroke-dasharray nastavuje přerušovanou čáru */
    stroke-dasharray: 10000;
    stroke: #000000;
    
    /* stroke-dashoffset definuje kde začne přerušení */
    stroke-dashoffset: 10000;
    
    /* forwards ponechá poslední styl, který doběhl nakonci animace */
    animation: dash 10s linear forwards;
}

@keyframes dash {
    to {
        stroke-dashoffset: 0;
    }
}
```
[Návod jak to udělat společně s JavaScriptem](https://jakearchibald.com/2013/animated-line-drawing-svg/)