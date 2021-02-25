import React from 'react'
import { heroes } from '../data/heroes'

export const GetHeroesByName = (name = '') => {

    if(name === ''){
        return [];
    }else{
        name = name.toLowerCase().trim();
    }

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().trim().includes(name) )
}
