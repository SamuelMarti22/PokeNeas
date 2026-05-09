import os from 'os';
import { getRandomPokena } from '../api/pokeneasApi.js';

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