let gameseq=[];
let userSeq=[];

let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
console.log(h2);
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game satarted");
        started=true;
        levelUp();
    }
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
},300);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
},300);
}
function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randmindex=Math.floor(Math.random()*4);
    let randmColor=btns[randmindex];
    let randmbtn=document.querySelector(`.${randmColor}`);
    gameseq.push(randmColor);
    console.log(gameseq);
    //console.log(randmbtn);
    gameFlash(randmbtn);
}
function checkAns(idx)
{
    console.log("curr level :" ,level);
    //let idx=level-1;
    if(userSeq[idx]===gameseq[idx])
    {
    //     console.log("samevalue");
        if(userSeq.length===gameseq.length)
        {
           setTimeout(levelUp,1000); 
        }
    }
    else{
        h2.innerHTML =`game over! your score was <b>${level}<b> <br> press any key to start`;
        //console.log("game entered in wrong mode");
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress()
{
    //console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

    
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
   // console.dir(btn);
    btn.addEventListener("click",btnPress)
}
function reset()
{
    // console.log("error occoured");
    started=false;
    gameseq=[];
    userSeq=[];
    level=0;
}