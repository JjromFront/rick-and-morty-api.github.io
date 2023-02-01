
export const Character = ({
    gender,
    image,
    name,
    numberEpisodes,
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
                    <span className="descCharacter">{status} - {specie}</span>
                </div>
            </div>
        </>
    )
}