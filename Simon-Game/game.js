var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keypress",function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }else{
        startOver();
    }
});

// Player
$(".btn").on("click",function(){
    var chosenColor = this.id;
    userClickedPattern.push(chosenColor);
    makeSound(chosenColor);
    animatePress(chosenColor);
    check(userClickedPattern.length -1);
});

// Make Sound
function makeSound(name){
    var buttonSound = new Audio("sounds/"+name+".mp3");
    buttonSound.play();
}
// Animation when clicked
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

// Start Over
function startOver(){
    console.log("starting over");
    level = 0;
    gamePattern = [];
    started = false;
    $("#level-title").text("Level 0");
    nextSequence();
}

// Get to next level
function nextSequence(){
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level 0");

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenNumber = buttonColors[randomNumber];
    gamePattern.push(randomChosenNumber);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function check(currentlevel){
    if(gamePattern[currentlevel] === userClickedPattern[currentlevel]){
        console.log("Correct!");
        if (gamePattern.length ===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}