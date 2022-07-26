import { readable } from "svelte/store";
import { Programme } from "../Entities/Programme";

const poems = {
    mmd: ``,
    dat: ``,
    beit: ``,
    dig: ``,
    itark: ``,
    web: ``,
    swd: ``,
    itsec: ``,
};

const programmeArray = [
    new Programme('Multimediedesign', '#A7C5E5', poems.mmd),
    new Programme('Datamatiker', '#BCD6AC', poems.dat),
    new Programme('Business Økonomi-IT', '#F3CDA2', poems.beit),
    new Programme('Digital Konceptudvikling', '#8B7FBE', poems.dig),
    new Programme('IT-Arkitektur', null, poems.itark),
    new Programme('Webudvikling', '#B87F9E', poems.web),
    new Programme('Softwareudvikling', '#FAD978', poems.swd),
    new Programme('IT-Sikkerhed', '#DF9D9B', poems.itsec),
];
export const programmes = readable(programmeArray);