const totalslide= document.querySelectorAll(".slideshow-element");
let count=1;
setInterval(() => {
    count++;
    let currentele=document.querySelector(".current");
    currentele.classList.remove("current");
    if(count>totalslide.length){
        totalslide[0].classList.add("current");
        count=1;
    }else{
        currentele.nextElementSibling.classList.add("current");
    }
}, 3000);
