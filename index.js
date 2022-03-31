let boton = document.getElementById("icono_input");
let nav = document.getElementsByClassName("nav")[0]

console.log(nav)

estado_boton_menu = 0
boton.addEventListener("click",() => {
    if(estado_boton_menu == 0){
        nav.classList.add("visible")
        nav.classList.remove("novisible")
        estado_boton_menu++
    }else{
        nav.classList.add("novisible")
        nav.classList.remove("visible")
        estado_boton_menu--
    }
})



