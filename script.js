 

  const win = document.querySelector(".win"),
       btn = document.querySelector(".btn"),
       modal = document.querySelector(".modal")
    //    div = document.querySelectorAll("div")



  btn.addEventListener("click" , ()=>{
  
    win.style.width = "300px"
  })

  modal.addEventListener("click",(e) =>{
    // console.log(e.target);
    if(e.target==modal || e.target==win){
        win.style.width = "0px" 
        console.log(e.target);
    }
   })
  

   