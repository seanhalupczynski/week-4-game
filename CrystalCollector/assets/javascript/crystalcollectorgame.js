// $(document).ready(function() {

    // Setting Variables
    var scoreboard = {
        win: 0,
        loss: 0                
    };
    var values = {
        targetValue: Math.floor(Math.random() * (101 + 1)) + 19,
        rubyValue: Math.floor(Math.random() * 12) + 1,
        diamondValue: Math.floor(Math.random() * 12) + 1,
        citrineValue: Math.floor(Math.random() * 12) + 1,
        emeraldValue: Math.floor(Math.random() * 12) + 1,
    };
    console.log(values);
    // Display for start of the game
    document.getElementById("wins").innerHTML = "Wins: " + scoreboard.win;
    document.getElementById("loss").innerHTML = "Losses: " + scoreboard.loss;
    document.getElementById("randomNumber").innerHTML = values.targetValue;

    // Adding values to the user's total
    // while (values.targetValue >= userScore) {
        // if (values.targetValue > userScore) {
                
    var userScore = 0;

    $("#ruby, #diamond, #citrine, #emerald").click(function() {
        //Click the ruby button and add it to the score 
        if(this.id == "ruby") {
            console.log(values.rubyValue);
            userScore += values.rubyValue;
            console.log(userScore);
            // Alert win and ask to play again
            // if (values.targetValue === userScore) {
            //     alert("YOU WON!!!!");
            //     var playAgainWin = confirm("Would you like to play again?");
            // };
            // // Alert loss and ask to play again
            // if (values.targetValue < userScore) {
            //     alert("You loss.");
            //     var playAgainLoss = confirm("Would you like to play again?")
            // };

            // if (playAgainWin = true) {
            //     $("#wins").text(scoreboard.win++);
            // };

            // if (playAgainLoss = true) {
            //     $("#loss").text(scoreboard.loss++);
            // };
        }
        // Click the diamond and add it to the score
        else if(this.id == "diamond") {
            console.log(values.diamondValue);
            userScore += values.diamondValue;
            console.log(userScore);
            // // Alert win and ask to play again
            // if (values.targetValue === userScore) {
            //     alert("YOU WON!!!!");
            //     var playAgainWin = confirm("Would you like to play again?");
            // };
            // // Alert loss and ask to play again
            // if (values.targetValue < userScore) {
            //     alert("You loss.");
            //     var playAgainLoss = confirm("Would you like to play again?")
            // };

            // if (playAgainWin = true) {
            //     $("#wins").text(scoreboard.win++);
            // };

            // if (playAgainLoss = true) {
            //     $("#loss").text(scoreboard.loss++);
            // };
        }
        // Click the citrine button and add it to the score
        else if(this.id == "citrine") {
            console.log(values.citrineValue);
            userScore += values.citrineValue;
            console.log(userScore);
            // // Alert win and ask to play again
            // if (values.targetValue === userScore) {
            //     alert("YOU WON!!!!");
            //     var playAgainWin = confirm("Would you like to play again?");
            // };
            // // Alert loss and ask to play again
            // if (values.targetValue < userScore) {
            //     alert("You loss.");
            //     var playAgainLoss = confirm("Would you like to play again?")
            // };

            // if (playAgainWin = true) {
            //     $("#wins").text(scoreboard.win++);
            // };

            // if (playAgainLoss = true) {
            //     $("#loss").text(scoreboard.loss++);
            // };
        }
        // Click the emerald button and add it to the score
        else if(this.id == "emerald") {
            console.log(values.emeraldValue);
            userScore += values.emeraldValue;
            console.log(userScore);
            // // Alert win and ask to play again
            // if (values.targetValue === userScore) {
            //     alert("YOU WON!!!!");
            //     var playAgainWin = confirm("Would you like to play again?");
            // };
            // // Alert loss and ask to play again
            // if (values.targetValue < userScore) {
            //     alert("You loss.");
            //     var playAgainLoss = confirm("Would you like to play again?")
            // };

        };

        $("#scoreTotal").text(userScore);

        // Alert win and ask to play again
        if (values.targetValue === userScore) {
            alert("YOU WON!!!!");
            var playAgainWin = confirm("Would you like to play again?");
            // Incrementing wins
            if (playAgainWin === true) {
                $("#wins").text("Wins: " + scoreboard.win++);
            };
        };
        // Alert loss and ask to play again
        if (values.targetValue < userScore) {
            alert("You loss.");
            var playAgainLoss = confirm("Would you like to play again?")
            // Incrementing losses
            if (playAgainLoss === true) {
                $("#loss").text("Losses: " + scoreboard.loss++);
            };
        };
    });
