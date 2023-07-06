let stars =document.getElementById("stars");
let moon =document.getElementById("moon");
let mountains3 =document.getElementById("mountains3");
let mountains4 =document.getElementById("mountains4");
let river =document.getElementById("river");
let boat =document.getElementById("boat");
let mountains7 =document.getElementById("mountains7");
let zanger =document.querySelector(".zanger");

window.onscroll= function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value  + "px";
    boat.style.left = value * 3 + "px";
    zanger.style.fontSize = value  + "px";
    if(scrollY >= 101.24232482910156){
            zanger.style.fontSize = 100  + "px";
            zanger.style.position ="fixed";
            if(scrollY>=379.6437683105469)
            zanger.style.display ="none";
    }else{
            zanger.style.display ="block";
    }if(scrollY>=139.20819091796875){
    document.querySelector(".main").style.background="linear-gradient(#376281,#10001f)"
}else{
    document.querySelector(".main").style.background="linear-gradient(#200016,#10001f)"
}
}
