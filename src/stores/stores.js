import { readable, writable } from "svelte/store";
import { Programme } from "../Entities/Programme";
import { Howl, Howler } from "howler";

/* export const poem = `
Hey du der, pludselig stod du i bare tæer, du skal huske dine sko, fordi du skal til introuge, øhh nej, dage. 
Husk en roulade, gerne med mælkechokolade eller marmelade, vi håber ikke du kommer til skade på din håndflade.
Vi gerne se dig den 19 august, fredag kl 12 den, hvor vi vil indeholde dig på et hold, du skal også pakke noget, på en sej måde. Du skal medtage en kikkert til at snape, og en selfiestang, fordi vi er der dagen lang. Når man, og den roulade, som du måske kan få ned i din mave. Når ja, vi ses på ​​Guldbergsgade 29N. fordi det er her vi alle russer har hjem.

Selvom vi skal hygge fredagen lang, så skal det ikke stoppe os for sejrssang. Det vil vi gøre lørdag den 20 august kl 12, hvor du skal dyste sammenhold eller et skjold, eller måske en støvle i guld, den er ihvertfald mega sej tror jeg. Der vil være en sandwich til alle, inden dystens ånd vil kalde. Til sidst på dagen vil der blive holdt en fest, hvor du er inviteret med som gæst.
`; */

const programmeArray = [
    new Programme('Multimediedesign', '#394BF2', 'blå'),
    new Programme('Datamatiker', '#81C259', 'grøn'),
    new Programme('Business Økonomi-IT', '#F39C39', 'orange'),
    new Programme('Digital Konceptudvikling', '#FFFFFF', 'hvid'),
    new Programme('IT-Arkitektur', '#000000', 'sort'),
    new Programme('Webudvikling', '#FF9FE4', 'lyserød'),
    new Programme('Softwareudvikling', '#FFD954', 'gul'),
    new Programme('IT-Sikkerhed', '#D95B4D', 'rød'),
];
export const programmes = readable(programmeArray);

export const sound = writable(new Howl({
    src: ["/static/turndown.mp3"],
    volume: 0.05,
    onend: function() {
        musicTxt = "Sæt gang i festen!"
    }
  }))