import { useState, useEffect } from 'react'
import { Character } from '../components/Characters/Characters'
import './index.css'


export const Home = () => {
    const [characters, SetCharacters] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dataProfile, setDataProfile] = useState({})

    useEffect(() => {
        setLoading(true)
        fetch(process.env.REACT_APP_API_LINK)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
                SetCharacters(data.results)
            })
            .catch(error => console.error(error))
    }, [])
    const handleOpenModal = (characters) => {
        setOpen(true)
        setDataProfile(characters)
    }
    if (loading) return <>Loading</>
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
                                    location={characters.location.name}
                                    name={characters.name}
                                    origin={characters.origin.name}
                                    specie={characters.species}
                                    status={characters.status}
                                />
                            )
                        }) 
                    }

                    {
                        isOpen &&
                        <div className='modal'>
                            {dataProfile.name}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}