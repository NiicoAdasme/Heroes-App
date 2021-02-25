import { heroes } from '../data/heroes';

export const GetHeroeById = (id) => {
    return heroes.find( hero => hero.id === id);
}
