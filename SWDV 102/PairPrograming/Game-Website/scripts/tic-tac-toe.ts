


window.addEventListener('DOMContentLoaded', () => {
    /*
    Indexes within the board
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
 */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];



    const tttboxes = document.querySelectorAll('[title="TTT-Box"]');

    const handleClick = (event: Event) => {
        console.log('TTT-Box clicked!', event);
    };
});

