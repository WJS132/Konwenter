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
    "y": "||", "z": "⨅", ".": "._."
};


let tekst = document.getElementById("tekst");
let pole = document.getElementById("pole");
let but = document.getElementById("guzik");
let reset = document.querySelector("input[type='reset']");
let tlumaczenie = "";
let guzik_morse = document.querySelector("#mors");
let guzik_minecraft = document.querySelector("#craft");
let plik_css = document.getElementById("zmianaStylu");

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

guzik_minecraft.addEventListener("click", () => {pole.textContent = "jebac dziwki";});

guzik_morse.addEventListener("click", (event) => {
    event.preventDefault();
    plik_css.href = "morse_media.css";
    
    
});

guzik_minecraft.addEventListener("click", (event) => {
    event.preventDefault();
    plik_css.href = "minecraft_media.css";
    
});

tekst.addEventListener("input", tlumacz_morse);
reset.addEventListener("click", () => {pole.textContent = "";});

