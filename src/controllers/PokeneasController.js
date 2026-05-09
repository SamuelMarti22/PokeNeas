import os from 'node:os';
import { getRandomPokenea } from '../api/pokeneasApi.js';

export class PokeneasController {

    index(req, res) {
        const pokenea = getRandomPokena();
        const viewData = {
            containerId: os.hostname(),
            pokenea
        };

        res.render('home', viewData);
    }
}