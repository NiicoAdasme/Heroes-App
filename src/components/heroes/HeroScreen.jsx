import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroeById } from '../../selectors/GetHeroeById';


export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    const hero = useMemo(() => GetHeroeById(heroeId), [heroeId]);

    if(!hero){
        return <Redirect to="/"/>;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {

        let redirect;

        if(publisher === 'DC Comics'){
            redirect= 'dc';
        }else{
            redirect= 'marvel';
        }


        (history.length <= 2) ?
        history.push(`/${redirect}`) :
        history.goBack()
    }

    return (
        <>
            <h1>Hero Screen</h1>
            <hr/>

            <div className="row mt-5">
                <div className="col-4">
                    <div className="card">
                        <img src={`../assets/heroes/${heroeId}.jpg`} 
                            alt={superhero}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    </div>
                </div>
                <div className="col-8 animate__animated animate__fadeIn">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego: </b>
                            {alter_ego}
                        </li>
                        <li className="list-group-item">
                            <b>Publisher: </b>
                            {publisher}
                        </li>
                        <li className="list-group-item">
                            <b>First Appearace: </b>
                            {first_appearance}
                        </li>
                    </ul>

                    <h5>Characters </h5>
                    <p>{characters} </p>

                    <button 
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        
                        Return
                    </button>
                </div>
            </div>

        </>
    )
}
