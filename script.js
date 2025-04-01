let alfabet = {
    "a": " •- ", "ą": " •-•- ", "b": " -••• ", "c": " -•-• ", "ć": " -•-•• ",
    "d": " -•• ", "e": " • ", "ę": " ••-•• ", "f": " ••-• ", "g": " --• ",
    "h": " •••• ", "i": " •• ", "j": " •--- ", "k": " -•- ", "l": " •-•• ",
    "ł": " -•-••- ", "m": " -- ", "n": " -• ", "ń": " --•-- ", "o": " --- ",
    "ó": " ---• ", "p": " •--• ", "q": " --•- ", "r": " •-• ", "s": " ••• ",
    "ś": " •••-••• ", "t": " - ", "u": " ••- ", "v": " •••- ", "w": " •-- ",
    "x": " -••- ", "y": " -•-- ", "z": " --•• ", "ź": " --••- ", "ż": " --••-• ",
    "1": " •---- ", "2": " ••--- ", "3": " •••-- ", "4": " ••••- ", "5": " ••••• ",
    "6": " -•••• ", "7": " --••• ", "8": " ---•• ", "9": " ----• ", "0": " ----- ", " ": "/", 
    ".": " •-•-•- ", ",": " --••-- ", "'": " •----• ", "\"": " •-••-• ", "_": " ••--•- ", 
    ":": " ---••• ", ";": " -•-•-• ", "?": " ••--•• ", "!": " -•-•-- ", "-": " -••••- ",
    "+": " •-•-• ", "/": " -••-• ", "(": " -•--• ", ")": " -•--•- ","=": " -•••- ",
    "@": " •--•-• "
};

const galaktyczny = {
    "a": "ᔑ", "b": "ʖ", "c": "ᓵ", "d": "↸", "e": "ᒷ", "f": "⎓", "g": "⊣", "h": "⍑", 
    "i": "╎", "j": "⋮", "k": "ꖌ", "l": "ꖎ", "m": "ᒲ", "n": "リ", "o": "𝙹", "p": "!¡",
    "q": "ᑑ", "r": "∷", "s": "ᓭ", "t": "ℸ ̣", "u": "⚍", "v": "⍊", "w": "∴", "x": " ̇/", 
    "y": "||", "z": "⨅", ".": "._.", " ": "  "
};


let tekst = document.getElementById("tekst");
let pole = document.getElementById("pole");
let but = document.getElementById("guzik");
let reset = document.querySelector("input[type='reset']");
let tlumaczenie = "";
let guzik_morse = document.querySelector("#mors");
let guzik_minecraft = document.querySelector("#craft");
let plik_css = document.getElementById("zmianaStylu");
let h1 = document.querySelector("h1");
let h4 = document.querySelector("h4");

function tlumacz_morse() {
    tlumaczenie = "";
    for (const litera of tekst.value) {
        if (!(litera.toLowerCase() in alfabet)){
            continue;
        }
        else{
            tlumaczenie += alfabet[litera.toLowerCase()];
        }
    }
    pole.textContent = tlumaczenie;

}

function tlumacz_craft(){
    tlumaczenie = "";
    for (const litera of tekst.value) {
        if (!(litera.toLowerCase() in galaktyczny)){
            tlumaczenie += litera;
        }
        else{
            tlumaczenie += galaktyczny[litera.toLowerCase()];
        }
    }
    pole.textContent = tlumaczenie;
}



guzik_morse.addEventListener("click", (event) => {
    event.preventDefault();
    plik_css.href = "morse_media.css";
    tekst.removeEventListener("input", tlumacz_craft);
    tekst.addEventListener("input", tlumacz_morse);
    h1.textContent = "Konwenter tekstu na kod Morse'a";
    h1.style.fontSize = "1.75rem";
    h4.style.fontSize = " 0.9rem";
    document.body.classList.remove("czcionka_mc");
    pole.style.letterSpacing = "0";
    reset.click();
});

guzik_minecraft.addEventListener("click", (event) => {
    event.preventDefault();
    plik_css.href = "minecraft_media.css";
    tekst.removeEventListener("input", tlumacz_morse);
    tekst.addEventListener("input", tlumacz_craft);
    h1.innerHTML = "Konwerter tekstu na alfabet z gry Minecraft";
    h1.style.fontSize = "1.1rem";
    h4.style.fontSize = " 0.55rem";
    document.body.classList.add("czcionka_mc");
    pole.style.letterSpacing = "2px";
    reset.click();
});

tekst.addEventListener("input", tlumacz_morse);
reset.addEventListener("click", () => {pole.textContent = "";});
pole.addEventListener("dblclick", (event) => {
    event.preventDefault();
    let kopia = pole.innerText;
    navigator.clipboard.writeText(kopia).then(function() {
        h4.textContent = "Skopiowano tekst!";
        setInterval(() => {
            h4.textContent = "Kliknij podwójnie na tłumaczenie aby je skopiować";
        }, 2000);
        console.log("dziala");
        
        
    }).catch(function(err) {
        console.error("Błąd kopiowania: ", err);
    });

});


