import axios from "axios";

    const API_KEY = 'API_KEY';
    const BASE_URL = 'https://api.rawg.io/api';

export async function fetchGames(page=1, pageSize=10){
    try{
        const gameData = await axios.get(`${BASE_URL}/games`, {
            params: {
                key: API_KEY,
                page: page,
                page_size: pageSize,
            },
        });
        return gameData.data.results;
    }
    catch(err){
        console.log(err);
    }

    
}

export async function fetchGame(id){
    try{
        const game = await axios.get(`${BASE_URL}/games`, {
            params: {
                id: id,
                key: API_KEY,
            }
        });
        const gameData = game.data.results;
        return gameData;
    }
    catch(err){
        console.error("404: Not found. Unable to fetch the data");
    }
} 