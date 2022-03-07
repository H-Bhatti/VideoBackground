var btn = document.getElementById("button");

var vid = document.getElementById("video")

btn.addEventListener("click", playPause=>{
console.log("button pressed")
    if (vid.paused)
    {
        vid.play();
        btn.innerHTML="Pause";
        console.log("plays")
        play=false;
    }
    else
    {
        vid.pause();
        btn.innerHTML="Play"; 
    }
})


const preloader = document.querySelector(".preloader");

window.addEventListener("load", prelpreload());
function prelpreload(){
    console.log("preloaded")
    preloader.classList.add("hide-preloader");
    }