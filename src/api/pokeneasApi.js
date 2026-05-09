import { json } from "express";
import pokenea from "../data/pokenea.json";

export class PokeneasApi {

    getRandomPokenea(req, res) {
        const number = Math.floor(Math.random() * 7);

        pokenea = {
            id: pokenea[number].id,
            name: pokenea[number].name,
            height: pokenea[number].height,
            skill: pokenea[number].skill,
            imageUrl: pokenea[number].imageUrl,
            phrase: pokenea[number].phrase
        }

        res.json(pokenaData);
    }
}