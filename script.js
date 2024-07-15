console.log("Enter 1 for rock\n2 for scissor\n3 for paper");

let rock = document.getElementById("1");
let scissor = document.getElementById("2");
let paper = document.getElementById("3");
let com = Math.floor(Math.random() * 3 + 1);
let log=document.querySelector("h1");
let text=document.querySelector("p");
let con=document.getElementById("con");

function chose(com){
    if(com==1){
        return "Rock";
    }else if(com==2){
        return "scissor";
    }else{
        return "Paper";
    }
}
rock.addEventListener("click",()=>{
    text.textContent="you chose Rock computer chose "+ chose(com);
    if(com==1){
        log.textContent="draw";
    }else if(com==2){
        log.textContent="win"; 
    }else{
        log.textContent="loss"; 
    }
})
scissor.addEventListener("click",()=>{
    text.textContent="you chose Scissor computer chose "+ chose(com);
    if(com==1){
        log.textContent="loss"; 
    }else if(com==2){
        log.textContent="draw";
    }else{
        log.textContent="win"; 
    }
})
paper.addEventListener("click",()=>{
    text.textContent="you chose Paper computer chose "+ chose(com);
    if(com==1){
        log.textContent="win"; 
    }else if(com==2){
        log.textContent="loss"; 
    }else{
        log.textContent="draw";
    }
})
con.addEventListener("click",()=>{
    location.reload();
})








/*
    let user=parseInt(prompt("Enter 1 for rock\n2 for scissor\n3 for paper"));
    let com=Math.floor((Math.random()*3)+1);
    
    console.log("you chose :"+user+"\ncom chose :"+com);
    if(user==com){
        console.log("match draw");
    }
    else if(user==1){
        if(com==2){
    console.log("you win");
        }else{
    console.log("you loss");
        }
    
    }else if(user==2){
        if(com==1){
            console.log("you loss");
        }else{
            console.log("you win");
        }
    
    }else{
        if(com==1){
            console.log("you win");
        }else{
            console.log("you loss");
        }
    
    }
*/
