### [jQuery](https://jquery.com/)
Jedná se o JavaScriptovou knihovnu (současná verze 3.3.1 z 20. ledna 2018), která má především usnadnit přístup a manipulaci s DOM objekty. Samotný JavaScript v tomto ohledu přiliš nevynikal a byl trochu těžkopádný. Z tohoto důvodu vzniklo v roce 2006 jQuery.

Použití jQuery je velice široké a kromě přístupu k elementům v DOM umožňuje také změnu stylování elementů, přidání eventů, poskytuje sadu animací nebo umožňuje funkci pro volání pomocí AJAX requestů.

Na internetu se lze dočíst, že jQuery už je mrtvé a jeho doba slávy je dávno pryč. Je i není to pravda. Vývoj jQuery je stále velmi aktivní. To lze poznat třeba z jeho [repozitáře](https://github.com/jquery/jquery) na GitHubu. Kromě samotného vlastního použití jQuery je na této knihovně závislá celá řada jiných knihoven. I od této závislosti se ale ustupuje. Z pohledu budoucího vývoje je praktičtější použít rovnou webové frameworky napsané v čistém JavaScriptu pro použití na frontendu (např. [Vue.js](https://vuejs.org/), [Angular](https://angular.io/), [React](https://reactjs.org/)). Tyto frameworky umožňují hierarchickou strukturu (obvykle MVC nebo podobnou) včetně manipulace s objekty. 

#### Úkoly
1. Přepište kód z předchozího cvičení pomocí jQuery a srovnejte délku a efektivitu použití čistého JavaScriptu a jQuery.
1. Vyzkoušejte některý z efektů, které nabízí jQuery.


### Použití jQuery
Nejdříve je nutné naimportovat jQuery. Jedná se o jeden soubor. Stejně jako v případě ostatních JavaScriptových knihoven existuje celá řada možností jak vložit knihovnu do stránky.

Jeden z běžných způsobů je stažení jQuery z jejich [webu](https://jquery.com/) a vložení souboru do své struktury. Poté vložíme knihovnu do stránky jako jakýkoliv jiný skript.
Výhodou je, že máte knihovnu u sebe a máte nad ní plnou moc.
```html
<script type="application/javascript" src="/path/to/jquery.js"></script>
```

Další z běžných způsobů je vložení knihovny z CDN (Content Delivery Network). Výhodou tohoto způsobu je, že uživatelé procházající různými weby mají stejné verze knihoven už nacachované, což umožňuje používat stále stejnou verzi, aniž by se musela znovu stahovat.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

> Co je minifikovaná verze knihovny? Obvykle ve formátu jquery.min.js.
 
jQuery je pouze knihovna ne samostatný jazyk (mohou tedy koexistovat a jQuery se bez JavaScriptu často neobejde). Často se ovšem uvádí, že je jednodušší se nejdříve naučit jQuery a poté až JavaScript.

jQuery se volá přes objekt jQuery (častěji se pro něj ale používá alias $). Tyto dva zápisy jsou naprosto shodné. V praxi se ale vždy použije $. 
```javascript
// příklad dvou shodných zápisů
// oba dva zápisy počkají na načtení stránky a následně vypíší do konzole ahoj.
jQuery(document).ready(function() {
    console.log('ahoj');
});

$(document).ready(function() {
    console.log('ahoj');
});
```

Jednou z největších výhod jQuery oproti JavaScriptu jsou selektory. Selektory umožňují jednoduše vybírat elementy z DOMu a následně jim přirazovat vlastnosti a různě s nimi interagovat.
```javascript
// počkáme opět na načtení stránky
$(document).ready(function() {
    
    // do konzole vypíše objekt s id=content
    console.log($('#content'));
    
    // přidá objektu s id=content třídu bigger. Tu je potřeba mít definovanou v CSS 
    $('#content').addClass('bigger');
    
    // selektory se dají použít různě. Další možnosti najdete v dokumentaci jQuery
    // tento selektor vybírá zvlášť liché a sudé řádky tabulky
    $('tr:odd').addClass('lichyPruh');
    $('tr:even').addClass('sudyPruh');
    
    // vybírat můžeme i podle třídy, ne jen podle id
    // vybere element p s třídou paragraph
    let hiddenBox = $('#banner-message');
    $('p.paragraph').on('click', function(event) {
        hiddenBox.show();
    });
});
```

#### Animace
jQuery poskytuje funkci `animate`. Jedná se vlastně o jednoduchý způsob deklarativní animace. Je velice podobný také funkci `setTimeout()` v JavaScriptu.

Formát funkce vypadá takto: `$(selector).animate({params},speed,callback);` 
* Selector určuje nad kterým objektem animace proběhne. 
* Params obsahují změny CSS vlastností.
* Speed určuje rychlost s jakou animace proběhne.
* Callback může obsahovat další funkci, která provede nějakou operaci po skončení animace. 
```javascript
// při kliknutí na tlačítko se spustí sekvence 4 animací, které budou postupně měnit výšku, šířku a průhlednost divu. 
// Místo rychlosti v milisekundách lze použít i slow
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
```

Kromě animace lze použít další efekty (např. hide, fadeIn, slideDown). Seznam efektů lze najít v [dokumentaci](https://api.jquery.com/category/effects/)


