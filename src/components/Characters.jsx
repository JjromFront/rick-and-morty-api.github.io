
export const Character = ({
    gender,
    image,
    name,
    numberEpisodes,
    specie,
    status
}) => {
    return(
        <>
            <div className="insideTargetCharacter">
                <img src={image} className="imageCharacter" alt="character"/>
                <div className="informationCharacter">
                    <span className="nameCharacter">{name} </span>
                    <span className="descCharacter">{status} - {specie}</span>
                </div>
            </div>
        </>
    )
}