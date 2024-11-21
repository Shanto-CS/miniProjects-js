let currentStatus = document.querySelector("h4")
let add = document.querySelector(".add")
var rmv = document.querySelector(".rmv")


add.addEventListener("click", function(){
    currentStatus.innerHTML = `friends<i class="ri-checkbox-circle-line"></i>`
    add.style.display = "none"
    rmv.style.display = "block"
})

rmv.addEventListener("click", function(){
    currentStatus.innerHTML = "Florina"
    add.style.display = "block"
    rmv.style.display = "none"
})

