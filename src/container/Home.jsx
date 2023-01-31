import {useState, useEffect} from 'react'
import {Character} from '../components/Characters'


export const Home = () => {
    const [characters, SetCharacters] = useState([])
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_LINK)
            .then(response => response.json())
            .then(data => SetCharacters(data.results)) 
    },[])

    return(
        <>
            <div className='characterContainer'>
            {
                characters.map((characters) => {
                    return(
                        <Character 
                        gender={characters.gender}
                        image={characters.image}
                        name={characters.name} 
                        specie={characters.species}
                        status={characters.status}
                        />
                    )
                })
            }
            </div>
        </>
    )
}