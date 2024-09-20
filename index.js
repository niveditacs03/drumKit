
// function AudioObject(audios)
// {
//     var audio= new Audio(audios);
//     audio.play();
// }
// for (let index = 0; index < document.querySelectorAll("button").length; index++) {
//    document.querySelectorAll("button")[index].addEventListener("click",function()
// {
//     var buttonINNERHTML = this.innerHTML;//this gives the identity of the button called
//     console.log(buttonINNERHTML);
//     switch (buttonINNERHTML) {
//         case 'w':
//         var crash = AudioObject('sounds/crash.mp3');
//         break;
//         case 'a':
//         var kickBass= AudioObject('sounds/kick-bass.mp3');
//         break;
//         case 's':
//         var snare= AudioObject('sounds/snare.mp3');
//         break;
//         case 'd':
//         var tom1= AudioObject('sounds/tom-1.mp3');
//         break;
//         case 'j':
//         var tom2= AudioObject('sounds/tom-2.mp3');
//         break;
//         case 'k':
//         var tom3= AudioObject('sounds/tom-3.mp3');
//         break;
//         case 'l':
//         var tom4= AudioObject('sounds/tom-4.mp3');
//         break;
    
//         default:
//             alert("wrong input");
//             break;
//     }
// })
    
// }
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",function()
{
    var buttonINNERHTML=this.innerHTML;
    makeSound(buttonINNERHTML);
    buttonFlash(buttonINNERHTML);
});//for clicks
    
} 
document.addEventListener("keydown" , event=>{
    makeSound(event.key);
    buttonFlash(event.key);
}) //for key presses

function AudioObject(audname)
{
    var audio = new Audio(audname);
    audio.play();
}
function makeSound(key)
{
     switch (key) {
        case 'w':
        var crash = AudioObject('sounds/crash.mp3');
        break;
        case 'a':
        var kickBass= AudioObject('sounds/kick-bass.mp3');
        break;
        case 's':
        var snare= AudioObject('sounds/snare.mp3');
        break;
        case 'd':
        var tom1= AudioObject('sounds/tom-1.mp3');
        break;
        case 'j':
        var tom2= AudioObject('sounds/tom-2.mp3');
        break;
        case 'k':
        var tom3= AudioObject('sounds/tom-3.mp3');
        break;
        case 'l':
        var tom4= AudioObject('sounds/tom-4.mp3');
        break;
       }
}
function buttonFlash(key)
{
    var buttonKey=document.querySelector("." + key);
    buttonKey.classList.add("pressed");
    setTimeout(() => {
        buttonKey.classList.remove("pressed")
    }, 100);
}
