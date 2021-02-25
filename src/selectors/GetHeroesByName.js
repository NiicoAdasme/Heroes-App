import React from 'react'
import { heroes } from '../data/heroes'

export const GetHeroesByName = (name = '') => {

    if(name === ''){
        return [];
    }else{
        name = name.toLowerCase();
    }

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name) )
}
