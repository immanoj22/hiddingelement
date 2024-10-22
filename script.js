let box=document.getElementById("box1");
let btn=document.getElementById("btn");
box.style.display="none";
btn.addEventListener("click", event=>{
    if(box.style.display==="none"){
        box.style.display="block"
        btn.textContent="Hide❤️"
        box.style.display="flex";
        box.style.justifyContent="center";
        box.style.alignItems="center";
       
    }
    else{
        box.style.display="none"
        btn.textContent="See me"
        
        
    }
})
