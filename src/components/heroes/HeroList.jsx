import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    // const heroes = GetHeroesByPublisher(publisher);
    const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);

    return (
        <div className=" row card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />

               ))
           } 
        </div>
    )
}
