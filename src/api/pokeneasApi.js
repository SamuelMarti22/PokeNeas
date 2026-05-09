import { json } from "express";

/**
 * Obtiene un Pokena aleatorio
 * @ts-check
 * @param {Object} req - Request de Express
 * @param {Object} res - Response de Express
 * @returns {json} - Un objeto JSON con los datos del Pokena aleatorio
 */

export function getRandomPokena(req,res) {
  const number = Math.floor(Math.random() * 7);

  pokeneaData = {
    id: number,
    name: pokena[name],
    height: pokena[height],
    skill: pokena[skill], 
    imageUrl: pokena[image],
    phrase: phrases[number]
  }

    res.json(pokenaData);
}