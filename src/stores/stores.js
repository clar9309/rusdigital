import { readable } from "svelte/store";
import { Programme } from "../Entities/Programme";
const programmeArray = [
    new Programme('Multimediedesign', '#A7C5E5'),
    new Programme('Datamatiker', '#BCD6AC'),
    new Programme('Business Økonomi-IT', '#F3CDA2'),
    new Programme('Digital Konceptudvikling', '#8B7FBE'),
    new Programme('IT-Arkitektur'),
    new Programme('Webudvikling', '#B87F9E'),
    new Programme('Softwareudvikling', '#FAD978'),
    new Programme('IT-Sikkerhed', '#DF9D9B')
];
export const programmes = readable(programmeArray);