
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
            <div className="containerCharacter">
                <img src={image} className="imageCharacter" alt="character"/>
                <div className="informationCharacter">
                    <span>{name} </span>
                    <span>{specie} </span>
                    <span>{status} </span>
                </div>
            </div>
        </>
    )
}