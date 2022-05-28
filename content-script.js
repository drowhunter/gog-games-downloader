
class Thingy {

    constructor(){
        
        this.isGamesPage =  window.location.href.indexOf("/game/") === -1;
    }

    hello(){
        alert("hello");
    }

    hideCartButton(){
        document.querySelector("div[main-button-decider]>button").style.display='none';
    }

    convertGogUrl(url){
        var m = url.match(/(?<=.*\/[a-z]{2}\/game\/)\w+/);
        if(m && m.length > 0){
            return "https://gog-games.com/game/"+ m[0];
        }
        //debugger;
        return url.replace(/gog\.com\/\w+?(?=\/)/g,"gog-games.com");
    }

    addDlButtons(){
        setTimeout(() => {
            const rotatorLinks = [...document.querySelectorAll("a.big-spot")].filter(l => l.href);
            for (let i = 0; i < rotatorLinks.length; i++) {
                const tile = rotatorLinks[i];
                const url = tile.getAttribute("href");
                    
                if(url.indexOf("/game/") === -1){
                    continue;
                }
                tile.removeAttribute("onclick");

                const atn = tile.querySelector("div.big-spot__action");
                atn.innerHTML = '';

                
                this.addDLButton(atn, this.convertGogUrl(url));
            }

            const links = [...document.querySelectorAll("a[class^=product-tile]")].filter(l => l.href);
            const img =  chrome.runtime.getURL("assets/floppy.svg");
            for (let i = 0; i < links.length; i++) {
                const tile = links[i];
                if(tile.getAttribute) {

                    let cover = tile.querySelector(".product-tile__cover") ?? tile.querySelector(".product-tile__image-wrapper");
                    
                    const url = tile.getAttribute("href");
                    tile.removeAttribute("href");
                    
                    
                    
                    let w = document.createElement("a");
                    w.href = url;
                    w.insertAdjacentElement("afterbegin", cover);

                    tile.insertAdjacentElement("afterbegin", w);

                    // cover.addEventListener("click",()=>{
                    //     window.location.href(url);
                    // });

                    const p = tile.querySelector(".product-tile__title");
                    const title  = p.getAttribute("title") ?? p.innerHTML;
                
                    if(!url){
                        debugger;
                        continue;
                    }
                    
                    const a = this.createGameLink(this.convertGogUrl(url),`<img src="${img}" alt="${title}" class="dl-floppy" />` );
                    
                    p.insertAdjacentElement("afterend",a); 
                } else {
                   // debugger;
                }
            };
        }, 1000);
        
    }

    addDLButton(node, url){
        //const n = document.querySelector("div[main-button-decider]");
        
        const link = this.createGameLink(url);
        if(node){
            const btn = this.createBtn(() => {
                link.click();
            });
            //btn.addEventListener ("click", );

            node.insertAdjacentElement('afterBegin', btn); 
            // = document.querySelector("#gog-game-dl");
           
        }
    }

    createGameLink(url, title){
        const a = document.createElement("a");
            a.href = url;
            a.innerHTML = title;
            a.target = "blank";

        return a;
    }
    /**
     * @param {String} HTML representing a single element
     * @return {Element}
     */
    htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    createBtn (clickFunc) {
        const btn = this.htmlToElement(
        `<button id="gog-game-dl" class="dl-button-ext">
            <span class="cart-button__wrapper">
                <span class="cart-button__state-default">
                <img class="inner-dl-icon" src="${chrome.runtime.getURL("assets/floppy.svg")}" alt="Download"/>Download
                </span>
            </span>
        </button>`);
        if(typeof(clickFunc) === 'function'){
            btn.addEventListener ("click", clickFunc);
        }
        return btn;
    }
}

{
    const tooly = new Thingy();
    if(!tooly.isGamesPage) {
        tooly.hideCartButton();
        const url = tooly.convertGogUrl( window.location.href);
        tooly.addDLButton(document.querySelector("div[main-button-decider]"), url);
    } else {
        tooly.addDlButtons();
    }

    
}