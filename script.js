let num = Math.floor(Math.random() * 100 + 1);
console.log(num)
let guess_num = document.querySelector('.input-number');
const guessnumber=document.querySelector('.guessnumber')
const success = document.querySelector('.success')
const loworhigh = document.querySelector('.loworhigh');
const track_guess=document.querySelector('.track-guess');
const gameover=document.querySelector('.gameover')
let count=0;
let maxCount=10;
let num_of_option=document.querySelector('.num-of-option');
let numOfOption=10;

let restart=document.querySelector(".restart");
function reset(){
    count=0;
    num=Math.floor(Math.random()*100+1);
guessnumber.disabled=false;
}
restart.addEventListener('click',()=>{
    reset();
    track_guess.textContent="";
    loworhigh.textContent="";
    success.textContent="";
    num_of_option.textContent="";
    guess_num.value="";
    numOfOption=10;
    console.log("the number is ",num);
    
    
})


function setgameover(){
    console.log("game ended");
    guessnumber.disabled=true;
}


function guesscheck() {
let userGuess = Number(guess_num.value)
numOfOption--;
num_of_option.textContent=`you have  ${numOfOption} option now`;
track_guess.textContent+=" "+userGuess;
if(num==userGuess){
        success.textContent="Contragulation ......"
        console.log('success');
        loworhigh.textContent="";
        setgameover();

    }

   else if(maxCount==count){
gameover.textContent="Game ended you did not find it ";
gameover();
        return console.log('game over you did not find it')
    }
    else if(num>userGuess){
        loworhigh.textContent="Guess Number Is Less"
    }
    else if(num<userGuess){
        loworhigh.textContent="Guess Number Is High";
    }
count++;
}
    

guessnumber.addEventListener('click', () => {
    console.log(count);
    guesscheck();

})