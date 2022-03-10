let tiles = document.getElementsByClassName("tile");
let turn = document.getElementById("turn")
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let tokken = 1, tile_id
let drawvalue = 0, current_move = -1, iter = 0
function draw() {


        computer_move(current_move)
    
        comp_won();

}
function won() {
    let won = 0

    for (let index = 0; index < 9; index++) {

        if (board[index] != 5) {
            won = won + board[index]
            if (won == 3) {
                turn.innerHTML = 'You Won'
               
                for (let i = 0; i < 9; i++)
                    tiles[i].removeEventListener('click', user_move)
                    return 1
            }
        }

        iter = iter + 1
        if (iter > 2) {
            iter = 0;
            won = 0;
        }


    }

    if ((board[0] + board[3] + board[6] == 3) || (board[1] + board[4] + board[7] == 3) || (board[2] + board[5] + board[8] == 3)) {
         
        turn.innerHTML = 'You Won'
        for (let i = 0; i < 9; i++)
            tiles[i].removeEventListener('click', user_move)
        return 1;
    }
    if ((board[0] + board[4] + board[8] == 3) || (board[2] + board[4] + board[6] == 3)) {

        turn.innerHTML = 'You Won'
        for (let i = 0; i < 9; i++)
            tiles[i].removeEventListener('click', user_move)
        return 1;
    }

}
function comp_won() {
    let won = 0

    for (let index = 0; index < 9; index++) {

        if (board[index] != 1) {
            won = won + board[index]
            if (won == 15) {
                turn.innerHTML = 'You Lose'
                for (let i = 0; i < 9; i++)
                    tiles[i].removeEventListener('click', user_move)
            }
        }

        iter = iter + 1
        if (iter > 2) {
            iter = 0;
            won = 0;
        }


    }

   
    if ((board[0] + board[3] + board[6] == 15) || (board[1] + board[4] + board[7] == 15) || (board[2] + board[5] + board[8] == 15)) {

        turn.innerHTML = 'You Lose'
        for (let i = 0; i < 9; i++)
            tiles[i].removeEventListener('click', user_move)
        return;
    }
    if ((board[0] + board[4] + board[8] == 15) || (board[2] + board[4] + board[6] == 15)) {

        turn.innerHTML = 'You Lose'
        for (let i = 0; i < 9; i++)
            tiles[i].removeEventListener('click', user_move)
        return;
    }

}

function tie() {

    for (let index = 0; index < 9; index++) {
        if (board[index] == 0) {

            return 1;
        }


    }
    return 0;
}
function computer_move(move) {
    let ran;
    if (move == -1) {


        ran = Math.floor(Math.random() * 9);


        while (board[ran] == 1 || board[ran] == 5) {
            ran = Math.floor(Math.random() * 9);
        }

        let cmove = document.getElementById(ran);
        board[ran] = 5;

        cmove.innerHTML = 'O';
        tokken = 1;
        
    }
    else {
        let cmove = document.getElementById(move);
        board[move] = 5;
        console.log(board)
        cmove.innerHTML = 'O';
        tokken = 1;
       
    }
}
function user_move() {

    if (tokken == 1) {
        tile_id = this.getAttribute('id');
        tiles[tile_id].innerHTML = 'X';
        board[tile_id] = 1
        
        tokken = 0;
        
        if(won()!=1)
        {
            if (tie() == 0) {
                turn.innerHTML = "TIE"
                return
            }
        draw();
        }
    }

}
function Reset()
{
    location.reload();
}

for (let i = 0; i < 9; i++)
    tiles[i].addEventListener('click', user_move)
