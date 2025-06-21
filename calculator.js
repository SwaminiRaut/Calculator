let buttons = document.querySelectorAll(".btn");
const dis = document.querySelector(".dis-container");
const acbtn = document.querySelector(".ac")
const delbtn = document.querySelector(".del");
const equalbtn = document.querySelector(".equal");
//display the buttons
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        dis.innerText += btn.innerText;
    });
})
//clear the screen
const ac = ()=>{
    dis.innerText="";
}
//delete last number
const del=()=>{
    dis.innerText=dis.innerText.slice(0,-1);
}
//eval expression is used for expressions like addition,substraction etc
const equal = ()=>{
    try{
        dis.innerText = eval(dis.innerText);
    }catch(e){
        dis.innerText = "Error";
    }
    setTimeout(()=>{
        dis.innerText="";
    },4000);

};
acbtn.addEventListener("click",ac);
delbtn.addEventListener("click",del);
equalbtn.addEventListener("click",equal);