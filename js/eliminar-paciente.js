var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){            //setTimeOut ejecuta la tarea luego de x ms
        event.target.parentNode.remove();   //parentNode sube un nivel de jerarquia
    }, 500);
    
});