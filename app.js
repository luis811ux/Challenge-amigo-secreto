let amigos = []
let regex = /^[a-zA-Z\s]+$/;

let agregarAmigo=()=>{
  let nombre = document.getElementById("amigo").value
   if(regex.test(nombre)){
    amigos.push(nombre);
    console.log(amigos);    
    document.getElementById("amigo").value=""
  }else{
    alert ("Por favor, inserte un nombre.")
  }
  return;
}

