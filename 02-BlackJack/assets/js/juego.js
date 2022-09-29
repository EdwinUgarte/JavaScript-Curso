//?  Patron modulo, siempre se coloca para que el usuario
//?  no pueda acceder a las variables ni funciones, el codigo se hace mas seguro
//Funcion anonima autoinvocadas
const miModulo = (() => {
    "use strict"; //* Modo estricto, evalua que el codigo este bien escrito

    let deck    = [];
    const tipos      = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    //* Referencias HTML
    const btnPedir   = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo   = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          smallPoints   = document.querySelectorAll("small");



    //? Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for(let i = 0; i<numJugadores; i++){
          puntosJugadores.push(0);
        }

      smallPoints.forEach( elem => elem.innerText = 0 );

      divCartasJugadores.forEach( elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
    } 
          

    //? Esta funcion crea una nueva baraja
    const crearDeck = () => {

      deck = [];
      for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
          deck.push(i + tipo);
        }
        for (let tipo of tipos) {
          for (let esp of especiales) {
            deck.push(esp + tipo);
          }
        }
      }
  
      return _.shuffle(deck);
    };

    

    //? Esta funcion me permite tomar una carta

    const pedirCarta = () => {
      let carta = "";
      if (deck.length > 0) {
        return deck.pop();
      } else {
        throw "No hay cartas";
      }

   
    };


    const valorCarta = (carta) => {
      //* substring('inicio', final) - nos ayuda a cortar un string, en este caso estamos quitando el ultimo digito
      const valor = carta.substring(0, carta.length - 1);
      return !isNaN(valor) ? parseInt(valor) : valor === "A" ? 11 : 10;
    };

      const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        smallPoints[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {

      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
      divCartasJugadores[turno].append( imgCarta );

  }


  const determinarGanador = () => {
    
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if( puntosComputadora === puntosMinimos ) {
          alert('Nadie gana :(');
      } else if ( puntosMinimos > 21 ) {
          alert('Computadora gana')
      } else if( puntosComputadora > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
  }


    //!Turno de la computadora

    const turnoComputadora = ( puntosMinimos ) => {

      let puntosComputadora = 0;

      do {
          const carta = pedirCarta();
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
          crearCarta(carta, puntosJugadores.length - 1 );

      } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

      determinarGanador();
  }


    //? Eventos

    btnPedir.addEventListener('click', () => {

      const carta = pedirCarta();
      const puntosJugador = acumularPuntos( carta, 0 );
      
      crearCarta( carta, 0 );


      if ( puntosJugador > 21 ) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );

      } else if ( puntosJugador === 21 ) {
          console.warn('21, genial!');
          btnPedir.disabled   = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador );
      }

  });

    btnDetener.addEventListener("click", () => {
      btnDetener.disabled = true;
      btnPedir.disabled = true;
      turnoComputadora(puntosJugadores[0]);
    });



    btnNuevo.addEventListener("click", () => {
      
      inicializarJuego();
     
    });



   // Aqui declaramos el return del modulo, esta parte del return, seria lo unico public de nuestro modulo
      // es lo unico a lo cual podemos tener acceso de forma externa
    return {
      nuevoJuego: inicializarJuego
    };
  })();
