let amigos = []
let regex = /^[a-zA-Z\s]+$/;
let lista = document.getElementById("listaAmigos")


let agregarAmigo=()=>{
  let nombre = document.getElementById("amigo").value
   if(regex.test(nombre)){
    amigos.push(nombre);
    console.log(amigos);    
    document.getElementById("amigo").value=""
  }else{
    alert ("Por favor, inserte un nombre.")
  }
  return actualizarAmigos()
}


let actualizarAmigos=()=>{
  
  lista.innerHTML=""
  for(i=0; i<amigos.length; i++){
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(nuevoAmigo);
  }

}


