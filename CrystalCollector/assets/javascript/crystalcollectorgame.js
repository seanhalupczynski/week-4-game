$(document).ready(function() {

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
        userValue: 0
    };
    var result;
    console.log(values);
    // Display for start of the game
    document.getElementById("wins").innerHTML = "Wins: " + scoreboard.win;
    document.getElementById("loss").innerHTML = "Losses: " + scoreboard.loss;
    document.getElementById("randomNumber").innerHTML = values.targetValue;

    // var addValue =;
    // Adding values to the user's total
    // while (values.targetValue >= values.userValue) {
        // if (values.targetValue > values.userValue) {
            if (values.targetValue > values.userValue) {
            $("#ruby, #diamond, #citrine, #emerald").click(function() {
                if(this.id == "ruby") {
                    // $("#scoreTotal").text(values.rubyValue);
                    console.log(values.rubyValue);
                    result = values.rubyValue + values.userValue;
                    console.log(result);
                    
                }
                else if(this.id == "diamond") {
                    // $("#scoreTotal").text(values.diamondValue);
                    console.log(values.diamondValue);
                    result = values.diamondValue + values.userValue;
                    console.log(result);
                }
                else if(this.id == "citrine") {
                    // $("#scoreTotal").text(values.citrineValue);
                    console.log(values.citrineValue);
                    result = values.citrineValue + values.userValue;
                    console.log(result);
                }
                else if(this.id == "emerald") {
                    // $("#scoreTotal").text(values.emeraldValue);
                    console.log(values.emeraldValue);
                    result = values.emeraldValue + values.userValue;
                    console.log(result);
                };
            });
        }
    //     }
    //     else if (values.targetValue === values.userValue) {
    //         alter("YOU ARE A WINNER!!!!");
    //         confirm("Would you like to play again?")
    //     }
    //     else if (values.targetValue > values.userValue) {
    //         alter("You loss :( ");
    //         confirm("Would you like to play again?")
    //     }
    //     else {
    //         break;
    //     };
    // };
});