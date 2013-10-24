// ---- MasterMind Javascript ----

function Row(choice1, choice2, choice3, choice4) {
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
}

//Set a random colo code
function setCode() {
    var setCode = {
        color1: "",
        color2: "",
        color3: "",
        color4: ""
    };

    for (var color in setCode) {
        if (Math.random() < .16) {
            setCode[color] = "black";
        } else if (Math.random() < .33) {
            setCode[color] = "white";
        } else if (Math.random() < .51) {
            setCode[color] = "red";
        } else if (Math.random() < .67) {
            setCode[color] = "green";
        } else if (Math.random() < .84) {
            setCode[color] = "red";
        } else {
            setCode[color] = "yellow";
        }
    }
    
setColor1 = setCode.color1;
setColor2 = setCode.color2;
setColor3 = setCode.color3;
setColor4 = setCode.color4;
}
setCode();

var board = new Row(setColor1, setColor2, setColor3, setColor4);



function guess(turn, color1, color2, color3, color4) {
    
    var newRow = {
        choice1: color1,
        choice2: color2,
        choice3: color3,
        choice4: color4
    };
    board[turn] = newRow;
}


function feedback(turn) {
    
// cycle through the first color chocie and mark
    // wether or not there is a match on feedback1
    if (board[turn].choice1 === board.choice1) {
        board[turn].feedback1 = "black";
    } else if (
        board[turn].choice1 === board.choice2 || 
        board[turn].choice1 === board.choice3 || 
        board[turn].choice1 === board.choice4) {
        board[turn].feedback1 = "white";
    }
    // Cycle through the second color chocie and mark
    // wether or not there is a match on feedback1,
    // if feedback1 is alread marked mark feedback2
    if (board[turn].choice2 === board.choice2) {
        if (
            board[turn].feedback1 !== "black" && 
            board[turn].feedback1 !== "white") {
            board[turn].feedback1 = "black";
        } else {
            board[turn].feedback2 = "black";
        }
    } else if (
        board[turn].choice2 === board.choice1 || 
        board[turn].choice2 === board.choice3 || 
        board[turn].choice2 === board.choice4) {
        if (
            board[turn].feedback1 !== "black" && 
            board[turn].feedback1 !== "white") {
            board[turn].feedback1 = "white";
        } else {
            board[turn].feedback2 = "white";
        }
    }
    // Cycle through the third color chocie and mark
    // wether or not there is a match on feedback1,
    // if feedback1 is alread marked mark feedback2,
    // if feedback2 is alread marked mark feedback3
    if (board[turn].choice3 === board.choice3) {
        if (
            board[turn].feedback1 !== "black" && 
            board[turn].feedback1 !== "white") {
            board[turn].feedback1 = "black";
        } else if (
            board[turn].feedback2 === "black" && 
            board[turn].feedback2 === "white") {
            board[turn].feedback2 = "black";
        } else {
            board[turn].feedback3 = "black";
        }
    } else if (
        board[turn].choice3 === board.choice1 || 
        board[turn].choice3 === board.choice2 || 
        board[turn].choice3 === board.choice4) {
        if (
            board[turn].feedback1 === "black" && 
            board[turn].feedback1 === "white") {
            board[turn].feedback1 = "white";
        } else if (
            board[turn].feedback2 === "black" && 
            board[turn].feedback2 === "white") {
            board[turn].feedback2 = "white";
        } else {
            board[turn].feedback3 = "white";
        }
    }
    // Cycle through the fourth color choice and mark
    // wether or not there is a match on feedback1,
    // if feedback1 is alread marked mark feedback2,
    // if feedback2 is alread marked mark feedback3,
    // if feedback3 is alread marked mark feedback4
    if (board[turn].choice4 === board.choice4) {
        if (
            board[turn].feedback1 !== "black" && 
            board[turn].feedback1 !== "white") {
            board[turn].feedback1 = "black";
        } else if (
            board[turn].feedback2 === "black" && 
            board[turn].feedback2 === "white") {
            board[turn].feedback2 = "black";
        } else if (
            board[turn].feedback3 === "black" && 
            board[turn].feedback3 === "white") {
            board[turn].feedback3 = "black";
        } else {
            board[turn].feedback4 = "black";
        }
    } else if (
        board[turn].choice4 === board.choice1 || 
        board[turn].choice4 === board.choice2 || 
        board[turn].choice4 === board.choice3) {
        if (
            board[turn].feedback1 === "black" && 
            board[turn].feedback1 === "white") {
            board[turn].feedback1 = "white";
        } else if (
            board[turn].feedback2 === "black" && 
            board[turn].feedback2 === "white") {
            board[turn].feedback2 = "white";
        } else if (
            board[turn].feedback3 === "black" && 
            board[turn].feedback3 === "white") {
            board[turn].feedback3 = "white";
        } else {
            board[turn].feedback4 = "white";
        }
    }
}

function dupeFix(turn) {
    guessColor = {
        black: 0,
        white: 0,
        red: 0,
        blue: 0,
        yellow: 0,
        green: 0
    };
    baseColor = {
        black: 0,
        white: 0,
        red: 0,
        blue: 0,
        yellow: 0,
        green: 0
    };
    // Sets count to zero and counts colors in guessed set
    for (var color in guessColor) {
        count = 0
        if (board[turn].choice1 === color) {
            count += 1;
            guessColor[color] = count;
        }
        if (board[turn].choice2 === color) {
            count += 1;
            guessColor[color] = count;
        }
        if (board[turn].choice3 === color) {
            count += 1;
            guessColor[color] = count;
        }
        if (board[turn].choice4 === color) {
            count += 1;
            guessColor[color] = count;
        }
    // Resets and counts each color in the Base Row

        for (var color in baseColor) {
            count = 0;
            if (board.choice1 === color) {
                count += 1;
                baseColor[color] = count;
            }
            if (board.choice2 === color) {
                count += 1;
                baseColor[color] = count;
            }
            if (board.choice3 === color) {
                count += 1;
                baseColor[color] = count;
            }
            if (board.choice4 === color) {
                count += 1;
                baseColor[color] = count;
            }
        }
    }
//    console.log("/// This is the guessColor ///");
//    console.log(guessColor);
//    console.log("");
//    console.log("/// This is the baseColor ///");
//    console.log(baseColor);
    // Find duplicate and excess matches
    var diff = {};
    totalDiff = 0;
    for (var color in guessColor) {
//        console.log("/// " + color + " ///");
//        console.log(guessColor[color]);
//        console.log(baseColor[color]);
        if (guessColor[color] > baseColor[color] && baseColor[color] !== 0) {
            diff[color] = guessColor[color] - baseColor[color];
        }
    }
    for (var color in diff) {
        totalDiff += diff[color];
    }
//    console.log(totalDiff);
    // Replace duplicate and excess white feedback tags
    while (totalDiff !== 0) {
        if (board[turn].feedback4 === "white") {
            board[turn].feedback4 = "null";
            totalDiff -= 1;
        } else if (board[turn].feedback3 === "white") {
            board[turn].feedback3 = "null";
            totalDiff -= 1;
        } else if (board[turn].feedback2 === "white") {
            board[turn].feedback2 = "null";
            totalDiff -= 1;
        } else {
            board[turn].feedback1 = "null";
            totalDiff -= 1;
        }
    }
//    console.log("/// This is the difference ///");
//    console.log(diff);

}
  
}

    

console.log("/// Let the Game Begin! /// ");
turn = 0;
score = 0;
while (turn <= 12) {
    turn += 1;
    userChoice1 = prompt("Black, white, red, yellow, blue or green?");
    userChoice2 = prompt("Black, white, red, yellow, blue or green?");
    userChoice3 = prompt("Black, white, red, yellow, blue or green?");
    userChoice4 = prompt("Black, white, red, yellow, blue or green?");
    guess(turn, userChoice1, userChoice2, userChoice3, userChoice4);
//    guess(turn, "white", "white", "black", "green");
    feedback(turn);
    dupeFix(turn);
    console.log(board[turn]);
    console.log("break");
    if (
        board[turn].feedback1 === "black" && 
        board[turn].feedback2 === "black" && 
        board[turn].feedback3 === "black" && 
        board[turn].feedback4 === "black") {
            console.log("Code Maker score = " + score);
            console.log("You Win!");
            console.log(board);
            break;
    } else if (
        userChoice1 === "I give up" ||
        userChoice2 === "I give up" ||
        userChoice3 === "I give up" ||
        userChoice4 === "I give up") {
            score += 1;
            console.log("Code Maker score = " + score);
            console.log("You Lose!");
            console.log(board);
            break;
    } else if (turn === 12) {
            console.log("You Lose!");
            console.log(board);
            score += 1;
            console.log("Code Maker score = " + score);
            break;
    }
    score += 1;
}