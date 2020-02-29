document.addEventListener("DOMContentLoaded", function (event) {

    var activePlayer, gamePlaying;
    var p1Checks, p2Checks;
    var playButton = document.querySelector('.play-btn');
    var player1Text = document.querySelector('.player1-text');
    var player2Text = document.querySelector('.player2-text');

    init();
    playBtn();


    function playBtn() {

        playButton.addEventListener('click', function () {
            gamePlaying = true;
            activePlayer = 1;
            player1Text.classList.add('player1-active');

            for (var i = 1; i < 10; i++) {
                clickTiles(i);
                document.querySelector('.tile-' + i).classList.add('player-1');
            }
        });
    }


    function clickTiles(i) {
        document.querySelector('.tile-' + i).addEventListener('click', function () {
            if (gamePlaying) {

                if (activePlayer === 1) {
                    document.querySelector('.tile-' + i).classList.add('p1-t' + i);
                    p1Checks[i - 1] = 1;
                    checkP1Win();


                } else {
                    document.querySelector('.tile-' + i).classList.add('p2-t' + i);
                    p2Checks[i - 1] = 1;
                    checkP2Win();
                }

                document.querySelector('.tile-' + i).classList.add('clicked');
                nextPlayer();
            }
        });
    }

    function nextPlayer() {

        if (gamePlaying) {
            if (activePlayer === 1) {
                activePlayer = 2;
            } else {
                activePlayer = 1;
            }

            for (var i = 1; i < 10; i++) {
                if (activePlayer === 2) {
                    document.querySelector('.tile-' + i).classList.remove('player-1');
                    document.querySelector('.tile-' + i).classList.add('player-2');
                    player2Text.classList.add('player2-active');
                    player1Text.classList.remove('player1-active');
                } else {
                    document.querySelector('.tile-' + i).classList.remove('player-2');
                    document.querySelector('.tile-' + i).classList.add('player-1');
                    player1Text.classList.add('player1-active');
                    player2Text.classList.remove('player2-active');
                }
            }
        }

    }



    function init() {
        //initialise evrything here 

        gamePlaying = false;
        p1Checks = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        p2Checks = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        player1Text.classList.remove('player1-active');
        player2Text.classList.remove('player2-active');



        for (var i = 1; i < 10; i++) {
            document.querySelector('.tile-' + i).classList.remove('player-1');
            document.querySelector('.tile-' + i).classList.remove('player-2');
            document.querySelector('.tile-' + i).classList.remove('p1-t' + i);
            document.querySelector('.tile-' + i).classList.remove('p2-t' + i);
            document.querySelector('.tile-' + i).classList.remove('clicked');
        }
    }



    function checkP1Win() {
        //all possible win conditions
        if (p1Checks[0] == 1 && p1Checks[1] == 1 && p1Checks[2] == 1) {
            playerWins();
        } else if (p1Checks[0] === 1 && p1Checks[3] === 1 && p1Checks[6] === 1) {
            playerWins();
        } else if (p1Checks[0] === 1 && p1Checks[4] === 1 && p1Checks[8] === 1) {
            playerWins();
        } else if (p1Checks[1] === 1 && p1Checks[4] === 1 && p1Checks[7] === 1) {
            playerWins();
        } else if (p1Checks[2] === 1 && p1Checks[4] === 1 && p1Checks[6] === 1) {
            playerWins();
        } else if (p1Checks[2] === 1 && p1Checks[5] === 1 && p1Checks[8] === 1) {
            playerWins();
        } else if (p1Checks[3] === 1 && p1Checks[4] === 1 && p1Checks[5] === 1) {
            playerWins();
        } else if (p1Checks[6] === 1 && p1Checks[7] === 1 && p1Checks[8] === 1) {
            playerWins();
        }
    }

    function checkP2Win() {
        //all possible win conditions
        if (p2Checks[0] == 1 && p2Checks[1] == 1 && p2Checks[2] == 1) {
            playerWins();
        } else if (p2Checks[0] === 1 && p2Checks[3] === 1 && p2Checks[6] === 1) {
            playerWins();
        } else if (p2Checks[0] === 1 && p2Checks[4] === 1 && p2Checks[8] === 1) {
            playerWins();
        } else if (p2Checks[1] === 1 && p2Checks[4] === 1 && p2Checks[7] === 1) {
            playerWins();
        } else if (p2Checks[2] === 1 && p2Checks[4] === 1 && p2Checks[6] === 1) {
            playerWins();
        } else if (p2Checks[2] === 1 && p2Checks[5] === 1 && p2Checks[8] === 1) {
            playerWins();
        } else if (p2Checks[3] === 1 && p2Checks[4] === 1 && p2Checks[5] === 1) {
            playerWins();
        } else if (p2Checks[6] === 1 && p2Checks[7] === 1 && p2Checks[8] === 1) {
            playerWins();
        }
    }



    function playerWins() {
        //add code here to make all the tiles unclickable and then display who won 
        for (var i = 1; i < 10; i++) {
            document.querySelector('.tile-' + i).classList.add('clicked');
        }

        if (activePlayer === 1) {
            document.querySelector('.wins1-text-js').classList.remove('wins1-text');
        } else {
            document.querySelector('.wins2-text-js').classList.remove('wins2-text');
        }

        gamePlaying = false;
    }

});
