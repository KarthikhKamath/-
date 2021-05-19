var cursor = document.querySelector(".cursor")
var links = document.querySelectorAll(".link")
var heading = document.querySelector("h1 ")
var logo = document.querySelector(".logo")


window.addEventListener("mousemove",movement)
function movement(e){
    cursor.style.top = e.pageY +"px"
    cursor.style.left = e.pageX +"px"    
}
links.forEach(links => {
    links.addEventListener("mouseover", function(){
    cursor.classList.add("grow")
    })
     links.addEventListener("mouseleave", function(){
    cursor.classList.remove("grow")
    })
})

heading.addEventListener("mousemove", function(){
    cursor.classList.add("grows")
})
heading.addEventListener("mouseleave", function(){
    cursor.classList.remove("grows")
})


    logo.addEventListener("mouseover", function(){
    cursor.classList.add("grow")
    })
     logo.addEventListener("mouseleave", function(){
    cursor.classList.remove("grow")
    })

