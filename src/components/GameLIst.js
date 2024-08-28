import { useEffect, useState } from 'react';
import {useInView} from 'react-intersection-observer';
import { fetchGames } from '../Services/Services';
import {Link} from 'react-router-dom'
//data-scroll data-scroll-speed ='2'
export function GameList(){
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isHoveredMap, setIsHoveredMap] = useState({pathField: null, gameElement: null});
    const {ref, inView} = useInView({
        threshold: 1,
    });

    const loadGames = async () => {
        try{
            setLoading(true);
            const newGames = await fetchGames(page);
            if(Array.isArray(newGames)){
                setGames((prevGames) => [...prevGames, ...newGames]);
            }
            else{
                console.error("Returned a non array");
            }
            console.log("Games fetched successfully");
            setLoading(false);
            console.log("Fetched games:", newGames);
        }
        catch(err){
            console.log(err);
        }
    }
    

    useEffect(() => {
        loadGames();
    }, [page]);

    useEffect(() => {
        if(inView && !loading){
            setPage((prevPage) => prevPage+1);
        }
    }, [inView, loading]);

    return(
        <div className='w-full h-auto flex align-center justify-center flex-wrap gap-6' >
        {   
            
            games.map((game, index) => (
                <div className=' relative h-96 w-64 bg-blue-800 bg-cover flex flex-col align-center justify-between bg-center rounded-lg border-4 border-black' onMouseEnter={() => setIsHoveredMap({pathField: index, gameElement: game})} onMouseLeave={() => setIsHoveredMap({pathField: null, gameElement: null})} style={{ backgroundImage: `url(${game.background_image})` }} key={game.id}>

                    <div> 
                    </div>
                    <div className='h-20 bg-black w-full content-center'>
                        <h1 className='text-gray-300 text-center font-bold text-2xl'>{game.name}</h1>
                    </div>

                    {
                        isHoveredMap.pathField === index && (
                            <div className='h-96 w-72 bg-black absolute top-4 left-4 border-2 border-gray-600 rounded-lg flex flex-col p-2 align-center justify-center z-30 '>
                                <h1 className='font-bold text-gray-300 text-start w-full text-xl'><Link to={`/${game.id}`}>{game.name}</Link></h1>
                                <img className='border-2 border-gray-700 mt-2 mb-2' src={isHoveredMap.gameElement.short_screenshots[1].image} alt="" />

                                <div>
                                    <div className='w-full flex justify-between border-b-2 border-gray-600 pb-2 pl-4 pr-4'>
                                        <h2 className='text-gray-400 font-bold'>Genre</h2>
                                        <h2 className='text-gray-400 font-bold'>{isHoveredMap.gameElement.genres[0].name}</h2>
                                    </div>
                                    <div className='w-full flex justify-between border-b-2 border-gray-600 pb-2 pl-4 pr-4'>
                                        <h2 className='text-gray-400 font-bold'>Released</h2>
                                        <h2 className='text-gray-400 font-bold'>{isHoveredMap.gameElement.released}</h2>
                                    </div>
                                    <div className='w-full flex justify-between border-b-2 border-gray-600 pb-2 pl-4 pr-4'>
                                        <h2 className='text-gray-400 font-bold'>Reviews</h2>
                                        <h2 className='text-gray-400 font-bold'>{isHoveredMap.gameElement.suggestions_count}</h2>
                                    </div>
                                    <div className='w-full flex justify-between border-b-2 border-gray-600 pb-2 pl-4 pr-4'>
                                        <h2 className='text-gray-400 font-bold'>Rating</h2>
                                        <h2 className='text-gray-400 font-bold'>{isHoveredMap.gameElement.rating}/5.0</h2>
                                    </div>
                                    <div className='w-full flex justify-between border-b-2 border-gray-600 pb-2 pl-4 pr-4'>
                                        <h2 className='text-gray-400 font-bold'>Metacritic</h2>
                                        <h2 className='text-gray-400 font-bold'>{isHoveredMap.gameElement.metacritic}</h2>
                                    </div>
                                    

                                </div>
                            </div>
                        )
                    }
                </div>
            ))
            
            
        }
        <div ref={ref}></div>
        </div>

    );
}


