import React, { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { GetHeroesByName } from '../../selectors/GetHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);
    
    const initialForm = {
        hero: q
    };

    const [values, handleInputChange] = useForm(initialForm);
    // const [values, setValues] = useState(initialForm);

    const {hero} = values;

    // const heroesFiltered = useMemo(() => GetHeroesByName(hero), [hero])
    const heroesFiltered = useMemo(() => GetHeroesByName(q), [q])
    // const heroesFiltered = GetHeroesByName(hero)

    const handleSubmit = e => {
        e.preventDefault();

        history.push(`?q=${hero}`);

        localStorage.setItem('LastPath',`/search?q=${q}`);
    };

    // useEffect(() => {
    //     history.push(`?q=${hero}`);
    // }, [hero]);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-md-4">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSubmit} >
                        <input 
                            type="text" 
                            name="hero" 
                            className="form-control"
                            onChange={handleInputChange}
                            value={hero}
                            placeholder="Find your Hero"
                            autoComplete="off"
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>
                <div className="row col-md-8">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '') && 
                        <div className="alert alert-info">
                            Search a Hero :)
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) && 
                        <div className="alert alert-danger">
                            {q} is not a Hero or is not found :c
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
