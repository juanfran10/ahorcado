let palabras = ['multimedia', 'internauta', 'servidor', 'protocolo', 'cortafuegos',
'navegador', 'nodo', 'marco', 'pagina', 'telaraña',
'descargar', 'virtual', 'memoria', 'disco', 'local',
'conectar', 'desconectar', 'encaminador', 'internet', 'dominio',
'dinamico', 'hipervinculo', 'enlace', 'marcador', 'ordenador', 'lapiz', 'ofimatica', 'informe' ];

function obtienePalabra(palabras) {
   //obtiene la palabra para jugar de forma pseudoaleatoria
   let indice = Math.floor ( Math.random() * palabras.length );
   return palabras[indice];
}

let adivinar= obtienePalabra(palabras).split("");
$( 'body' ).keypress(function(event) {
  let tecla= String.fromCharCode(event.which) ;
   console.log(tecla); 
   if (comparar(tecla)) console.log('esta en la palabra');
    else console.log('no esta');
});
 
function comparar(letra){
    return adivinar.some(elem => elem ===letra);
}

