var img = document.querySelector("#image");
var love = document.querySelector(".love");
var likes = document.querySelector(".likes");

var like = 0;

img.addEventListener("dblclick",function(){
    love.style.transform = "translate(-50%, -50%) scale(2)";
    like++;
    likes.innerHTML = like;
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)"
    }, 1500)
})