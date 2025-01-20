let amigos = []
let regex = /^[a-zA-Z\s]+$/;
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


let agregarAmigo=()=>{
  let nombre = document.getElementById("amigo").value;
   if(regex.test(nombre)){
    amigos.push(nombre);
    console.log(amigos);    
    document.getElementById("amigo").value="";
  }else{
    alert ("Por favor, inserte un nombre.");
  }
  return actualizarAmigos();
}


let actualizarAmigos=()=>{
  
  lista.innerHTML="";
  for(i=0; i<amigos.length; i++){
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigos[i];
    lista.appendChild(nuevoAmigo);
  }
 return;
}

let sortearAmigo=()=>{
  if(amigos.length!==0){
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    console.log(indiceAleatorio);
    let nombreSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = nombreSorteado;
  }
}



