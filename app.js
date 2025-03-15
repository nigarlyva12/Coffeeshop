let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");

next.onclick = function () {
    showSlider("next");
}
prev.onclick = function () {
    showSlider("prev");
};
let time =3000;
let runTimeOut;
let timeAutoNext =8000;
let autoRun=setTimeout(()=>{
    next.click();
}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
    
    if(type==="next"){
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add("next"); 
    }else{
        let positionLast = itemSlider.length-1;
        let lastSliderItem = itemSlider[positionLast];
        let lastThumbnailItem = itemThumbnail[itemThumbnail.length-1];
        listItem.prepend(lastSliderItem);
        thumbnail.prepend(lastThumbnailItem);
        carousel.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(function(){
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
    },time);
    clearTimeout(autoRun);
    autoRun=setTimeout(()=>{
        next.click();
    }, timeAutoNext);
}