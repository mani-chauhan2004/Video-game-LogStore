import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchGame } from '../../Services/Services';

function Details() {
    let searchedGame;
    const {id} = useParams;
    const API_KEY = '75b4832064c44048ac634990055da47f';

    const loadGame = async (id) => {
        try{
            const game = await fetchGame(id);

        }
        catch(err){
            console.error("404: Not found. Unable to fetch the data");
        }
    } 

    useEffect(() => {
        loadGame(id);
    }, []);

    return (
        <div>
            <h1 className='text-white text-3xl'>{game[0].name}</h1>

        </div>
    )
}

export default Details