import bingo_card from '../pictures/bingo_card_img.jpg';

export function BingoCard() {
    return (
        <>
            <h1>Bingo Card</h1>
            <img src={bingo_card} alt="Bingo Card" height={"200px"} width={"150px"}/>
        </>
    )
}