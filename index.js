let buttons=document.querySelectorAll("button");
for (let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(){
            let button=this;
            let para=button.nextElementSibling;
            let displaySetting=para.style.display;
            if (displaySetting=="block"){
                para.style.display="none";
                button.style.fontWeight="400";
                
            }else{para.style.display="block";
            button.style.fontWeight="700";}
           
                });}
