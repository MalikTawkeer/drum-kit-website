// document.querySelector("button").addEventListener("click", function(){
//     alert("clicked");
// });

//                          OR

/* document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("Malik");
}  */


//FOR DETECTING BUTTONS
//using loop
var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         this.style.color = "white";
         this.style.fontFamily = "Verdana";
         this.style.backgroundColor = "red";

         var buttonName = this.innerHTML;
         buttonAnimation(buttonName);
         makeSound(buttonName);
         //USING IF-ELSE

        //  if(this == document.querySelector(".w")){
        //     var audio = new Audio("sounds/snare.wav");
        //     audio.play();
        //  }else if(this == document.querySelector(".a")){
        //     var audio = new Audio("sounds/Power-Up-Retro.mp3");
        //     audio.play();
        //  }else if(this == document.querySelector(".l")){
        //     var audio = new Audio("sounds/Lazer-Zap-Mini-Pack.mp3");
        //     audio.play();
        //  }

        
        
    });
}

//FOR DETECTING KEYBOARD BUTTONS
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key){

    buttonAnimation(key);
    
    switch(key)
        {
            case "w":
                audio = new Audio("sounds/snare.wav");
                audio.play();
                break;
            case "a":
                audio = new Audio("sounds/a.mp3");
                audio.play();
                break;
            case "l":
                audio = new Audio("sounds/l.mp3");
                audio.play();
                break;
        }
}


// Animation Part
function buttonAnimation(currentBtn){
    var activeButton = document.querySelector("."+currentBtn);
    activeButton.classList.add("pressed");

    setTimeout( function(){activeButton.classList.remove("pressed");}, 100);
}