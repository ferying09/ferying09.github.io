const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir Carta
btnAbrir.addEventListener("click", () => {

    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");
    

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p")
    h1.style.transform = "translateY(-150px)";
    p.style.transform = "translateY(-150px)";
    h1.style.transition = "0.75s";
    p.style.transition = "0.75s";


    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    

    setTimeout(() => {
        ElementoSuperior.style.zIndex = -1;  

        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoMensaje.style.transition ="0.75s";
        

        const ElementoContenedor = document.querySelector(".contenedor");
        ElementoContenedor.classList.add("abrir-contenedor");
        ElementoContenedor.style.transition = "0.75s";

        const ElementoBotones = document.querySelector(".botones");
        ElementoBotones.classList.add("abrir-botones");
        ElementoBotones.style.transition = "0.75s";

        h1.style.transform = "translateY(-10px)";
        p.style.transform = "translateY(-10px)";
        h1.style.transition = "0.75s";
        p.style.transition = "0.75s";

        setTimeout(() => {
            const ElementoMensaje = document.querySelector(".mensaje");
            ElementoMensaje.classList.add("mostrar-texto");
            ElementoMensaje.style.transition ="0.95s";
        }, 150);

    }, 900);
    
});

//Cerrar Carta
btnCerrar.addEventListener("click", () => {

    const ElementoSuperior = document.querySelector(".superior");
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("mostrar-texto");
    
    setTimeout(() => {
       
        const ElementoSuperior = document.querySelector(".superior");
        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.remove("abrir-mensaje");
        

        const ElementoContenedor = document.querySelector(".contenedor");
        ElementoContenedor.classList.remove("abrir-contenedor");
        ElementoContenedor.style.transition = "0.75s";

        const ElementoBotones = document.querySelector(".botones");
        ElementoBotones.classList.remove("abrir-botones");
        ElementoBotones.style.transition = "0.75s";

        const h1 = document.querySelector("h1");
        const p = document.querySelector("p")
        h1.style.transform = "translateY(-150px)";
        p.style.transform = "translateY(-150px)";
        h1.style.transition = "0.75s";
        p.style.transition = "0.75s";

    }, 500)

    setTimeout(() => {
        const IconoCorazon = document.querySelector(".bx");
        IconoCorazon.classList.remove("bx-rotada");
        
        ElementoSuperior.style.zIndex = 0; 
        ElementoSuperior.classList.remove("abrir-superior");

        const h1 = document.querySelector("h1");
        const p = document.querySelector("p")
        h1.style.transform = "translateY(-10px)";
        p.style.transform = "translateY(-10px)";
        h1.style.transition = "0.75s";
        p.style.transition = "0.75s";

    }, 1250)
    
});

//Con Click en carta
const contenedor = document.querySelector("#AbrirContenedor");

contenedor.addEventListener("click", () => {

    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");
    

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p")
    const a = document.querySelector("a")
    h1.style.transform = "translateY(-150px)";
    p.style.transform = "translateY(-150px)";
    h1.style.transition = "0.75s";
    p.style.transition = "0.75s";
    a.style.zIndex = 0;
    

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");

    

    setTimeout(() => {
        ElementoSuperior.style.zIndex = -1;  

        const ElementoMensaje = document.querySelector(".mensaje");
        ElementoMensaje.classList.add("abrir-mensaje");
        ElementoMensaje.style.transition ="0.75s";
        

        const ElementoContenedor = document.querySelector(".contenedor");
        ElementoContenedor.classList.add("abrir-contenedor");
        ElementoContenedor.style.transition = "0.75s";

        const ElementoBotones = document.querySelector(".botones");
        ElementoBotones.classList.add("abrir-botones");
        ElementoBotones.style.transition = "0.75s";

        h1.style.transform = "translateY(-10px)";
        p.style.transform = "translateY(-10px)";
        h1.style.transition = "0.75s";
        p.style.transition = "0.75s";

        setTimeout(() => {
            const ElementoMensaje = document.querySelector(".mensaje");
            ElementoMensaje.classList.add("mostrar-texto");
            ElementoMensaje.style.transition ="0.95s";
        }, 150);

    }, 900);
    
});