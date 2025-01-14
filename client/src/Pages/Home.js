// Home page for the general website for the game singobingo.com 


export function Home() {
    // Generate a random lobby code of 4 digits 
    const rand = Math.floor(Math.random()*1000) + 1000; 
    return (
        <>
            <h1>Welcome to Singo Bingo!</h1>
            <h4>Lobby Code: {rand}</h4>
        </>
    )
}