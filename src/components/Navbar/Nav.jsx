import './index.css';

export const Nav = () => {
    return (
        <>
            <ul className="navegation">
            <img className="image_logo" src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" alt="logo" width={113}/>
                <li><a href="https://rickandmortyapi.com/documentation" target="_blank">Documents</a></li>
                <li><a href="https://rickandmortyapi.com/about" target="_blank">About</a></li>
                <button>Support us</button>
            </ul>
            <span className="title">La API de Rick y Morty</span>
            <img className="image_logo2" src="https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif" alt="logo2" width={90} />
            <img className="image_logo3" src="https://images.squarespace-cdn.com/content/v1/528252b7e4b00150d03a4848/1503802778210-U2WB305XUV8G7RNNRLZY/RickAndMorty_MortySad1500_V2.gif" alt="logo3" width={90}/>
        </>
    )
}

