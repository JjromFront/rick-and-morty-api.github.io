import { useState, useEffect } from 'react'
import { Character } from '../components/Characters'


export const Home = () => {
    const [characters, SetCharacters] = useState([])
    const [open, setopen] = useState(false)
    
    const [dataProfile, setdataProfile] = useState({})

    useEffect(() => {
        fetch(process.env.REACT_APP_API_LINK)
            .then(response => response.json())
            .then(data => SetCharacters(data.results))
            .catch(error => console.error(error))
    }, [])
    const handleOpenModal = (characters) => {
        setopen(true)
        setdataProfile(characters)
    }
    console.log(dataProfile)
    return (
        <>
            <div className='charactersContainer'>
                <div className='characterTarget'>
                    {
                        characters.map((characters) => {
                            return (
                                <Character
                                    onClick={() => { handleOpenModal(characters) }}
                                    gender={characters.gender}
                                    image={characters.image}
                                    name={characters.name}
                                    specie={characters.species}
                                    status={characters.status}
                                />
                            )
                        })
                    }
                    {open &&
                        <div className='modal'>
                            {dataProfile.name}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}