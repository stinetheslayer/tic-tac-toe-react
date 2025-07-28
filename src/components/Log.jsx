export default function Log({ turns }) {
    // for (const turn of turns) {
    //     const player = turn.player;
    //     const square = turn.square;
    //
    //     console.log(turn);
    //     console.log(square);
    //     console.log(player);
    // }

    return (
    <ol id="log">
        {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} seleted {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
    );
}