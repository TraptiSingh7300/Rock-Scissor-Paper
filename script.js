const rock=document.getElementById('rock');
const scissor=document.getElementById('scissor');
const paper=document.getElementById('paper');

function rockResult(){
    let user="USER :  🥌";
    let computer=Math.random()*3;
    if(computer<1){
        let result="COMPUTER :  🥌";
        alert(user+"\n"+result+"\n\n"+"match tie");
    }else if(computer>0 && computer<2){
        let result="COMPUTER :  ✂";
        alert(user+"\n"+result+"\n\n"+"user win");
    }else{
        let result="COMPUTER :  📃";
        alert(user+"\n"+result+"\n\n"+"computer win");
    }
}

function scissorResult(){
    let user="USER :  ✂";
    let computer=Math.random()*3;
    if(computer<1){
        let result="COMPUTER :  🥌";
        alert(user+"\n"+result+"\n\n"+"computer win");
    }else if(computer>0 && computer<2){
        let result="COMPUTER :  ✂";
        alert(user+"\n"+result+"\n\n"+"match tie");
    }else{
        let result="COMPUTER :  📃";
        alert(user+"\n"+result+"\n\n"+"user win");
    }
}

function paperResult(){
    let user="USER :  📃";
    let computer=Math.random()*3;
    if(computer<1){
        let result="COMPUTER :  🥌";
        alert(user+"\n"+result+"\n\n"+"user win");
    }else if(computer>0 && computer<2){
        let result="COMPUTER :  ✂";
        alert(user+"\n"+result+"\n\n"+"computer win");
    }else{
        let result="COMPUTER :  📃";
        alert(user+"\n"+result+"\n\n"+"match tie");
    }
}