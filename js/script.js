const manu = document.querySelector(".manu");
const mobile_icon = document.querySelector(".fa-bars")
const mobile_icon2 = document.querySelector(".fa-xmark")
var anker_link = document.querySelector(".hlink")

console.log(anker_link)


mobile_icon.addEventListener("click", () =>{
    manu.classList.remove("hidden");
    mobile_icon2.classList.remove("hidden");
    mobile_icon.classList.add("hidden");
})

mobile_icon2.addEventListener("click", () =>{
    manu.classList.add("hidden");
    mobile_icon2.classList.add("hidden");
    mobile_icon.classList.remove("hidden");
})

anker_link.addEventListener("click", () => {
    manu.classList.add("hidden");
    mobile_icon2.classList.add("hidden");
    mobile_icon.classList.remove("hidden");
} )