let usuarios = [];
usuarios.push('Javier', 'Edwin', 'Juan', 'Pablo');

function setNombre(nuevoNombre){
    usuarios.push(nuevoNombre);
}


const getNombres = () => {
    for(let i = 0; i < usuarios.length; i++){//012345
    console.log(usuarios[i]);
    }  
}


getNombres();

