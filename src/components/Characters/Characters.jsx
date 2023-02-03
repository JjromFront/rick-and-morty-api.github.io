import './index.css';

export const Character = ({
    image,
    location,
    name,
    origin, 
    specie,
    status,
    onClick = () => {}
}) => {
    return(
        <>
            <div className="insideTargetCharacter" onClick={onClick}>
                <img src={image} className="imageCharacter" alt="character"/>
                <div className="informationCharacter">
                    <span className="nameCharacter">{name} </span>

                    <div className={
                        status === "Alive" ? "indicator isAlive" : "indicator isDead"
                    }></div>

                    <span className="descCharacter">{status} - {specie}</span>
                    <br/>
                    <br/>

                    <label htmlFor="locationCharacterResume" className="labelLocation">Last known location: </label>
                    <br/>
                    <span className="locationCharacterResume locationInformation">{location}</span>

                    <br/>
                    <br/>
                    <label htmlFor="originCharacterResume" className="labelOrigin">First seen in: </label>
                    <br/>   
                    <span className="originCharacterResume locationInformation">{origin}</span>
                </div>
            </div>
        </>
    )
}