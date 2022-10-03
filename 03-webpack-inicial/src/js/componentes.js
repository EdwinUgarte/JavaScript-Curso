import '../css/componentes.css';
// import logo from '../assets/img/webpack-logo.png'

export const saludar = (nombre = 'sin nombre') => {
    console.log(`Hola que tal ${nombre}`);
    const h1 = document.createElement('h1');
    h1.innerText = `Hola que tal ${nombre} bienvenido!`;

    document.body.append(h1);


    //Img
    // const img = document.createElement('img');
    // img.src = logo;
    // document.body.append(img);

}