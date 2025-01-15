// Home page for the general website for the game singobingo.com 

// Generate a random lobby code of 4 digits 
// const lobbyCode = Math.floor(Math.random()*1000) + 1000; 
const lobbyCode = 1234;
export function Home() {
    return (
        <>
            <h1>Welcome to Singo Bingo!</h1>
            <h4>Lobby Code: {lobbyCode}</h4>
        </>
    )
}
export { lobbyCode };

