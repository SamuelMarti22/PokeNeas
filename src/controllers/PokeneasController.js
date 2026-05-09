import os from 'os';
import { getRandomPokena } from '../api/pokeneasApi.js';

export class PokeneasController {

    index(req, res) {
        const pokeneaData = getRandomPokena();
        const viewData = {
            "containerId": os.hostname(),
            "pokenea": pokeneaData
        };

        res.render('home', viewData);
    }
}