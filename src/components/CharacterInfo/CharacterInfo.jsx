import './index.css';
export const CharacterInfo = ({
    name,
    status,
    specie,
    type,
    gender,
    image,
    origin,
    location,
    onClick = () => { }
}) => {
    return (
        <div className='characterInfoBg'>
            <div className="characterInfoContainer">
                <div className="characterInfoClose">
                    <button className="closeButton" onClick={onClick}>Close</button> 
                </div>
                <div className='characterInfoImgContainer'>
                    <img src={image} className='characterInfoImg' alt=''/>
                </div>
                <div className='characterInfo'>
                    <span className='characterInfoName'>{name}</span>

                    <div className={
                        status === "Alive" ? "indicatorMod isAlive" : "indicatorMod isDead"
                    }></div>
                    <span className='characterInfoStatus'>{status} - {specie}</span>

                    <label htmlFor='characterInfoType' className='typeLabel'>Type: </label>
                    <span className='characterInfoType'>{type === "" ? "No type" : type}</span>

                    <label htmlFor='characterInfoGender' className='labelGender'>Gender: </label>
                    <span className='characterInfoGender'>{gender}</span>

                    <label htmlFor='characterInfoLocation' className='labelLocation'>Last known location</label>
                    <span className='characterInfoLocation'>{location}</span>

                    <label htmlFor='characterInfoOrigin' className='labelOrigin'>First seen in</label>
                    <span className='characterInfoOrigin'>{origin}</span>

                    <label htmlFor='characterInfoNumEpisodes' className='labelEpisodes'>Number of episodes: </label>
                    <span className='characterInfoNumEpisodes'>No episodes yet</span>
                </div>
            </div>
        </div>
    )
}