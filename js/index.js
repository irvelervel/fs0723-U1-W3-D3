const htmlButtonClick = function (e) {
  alert('HAI PREMUTO IL BOTTONE!')
  // questa funzione è collegata ad un onclick assegnato via HTML
  // questa funzione NON riceverà in automatico l'evento e a meno che nell'HTML non venga esplicitamente
  // passato "event" come paramtetro di htmlButtonClick
  console.log(e)
}

const htmlButtonHovered = function () {
  console.log('mouse sopra bottone!')
  // cambiamo il colore del titolo!
  // 1) prendere un riferimento del titolo
  const mainTitle = document.querySelector('h1')
  // 2) manipolo l'elemento
  mainTitle.style.color = 'orange'
}

const htmlButtonNotHovered = function () {
  console.log('mouse uscito dal bottone!')
  const mainTitle = document.querySelector('h1')
  mainTitle.style.color = 'black'
}

const loadKitten = function () {
  // voglio far comparire sotto al bottone l'immagine di un gattino
  // 2 passaggi:
  // 1) devo CREARE l'immagine col gattino
  const image = document.createElement('img') // <img />
  image.setAttribute('src', 'https://placekitten.com/' + 300) // genero sempre lo stesso gattino
  //   image.style.width = '200px'
  //   image.style.height = '700px'
  // 'https://placekitten.com/' + (Math.floor(Math.random() * 201) + 300)
  // ottengo un numero tra 300-500, generando un gattino diverso ogni volta
  // <img src="https://placekitten.com/300" />
  image.setAttribute('alt', 'immagine di gattino generata da JS')
  // <img src="https://placekitten.com/300" alt="immagine di gattino generata da JS" />

  // il gatto sarebbe pronto per finire nella pagina. Tuttavia supponiamo però che io voglia
  // rendere quest'immagine cliccabile...
  // se avessi quest'immagine direttamente nel documento HTML potrei usare un "onclick"
  // dobbiamo usare sull'immagine un metodo chiamato "addEventListener"
  //   image.addEventListener('click', function (e) {
  //     console.log('ho cliccato il gattino!')
  //     console.log(e) // questo oggetto è viene chiamato Event Object, è un report completo di cosa sia successo con questo click
  //     // viene ricevuto IN AUTOMATICO se utilizzate addEventListener
  //   })

  image.addEventListener('click', externalFunction)
  // externalFunction va scritta SENZA le ()! perchè sto semplicemente fornendo la funziona da eseguire.
  // se mettessi externalFunction(), la riga 48 eseguirebbe automatimente externalFunction!

  //   image.addEventListener('mouseenter', function () {
  //     alert('come hai osato spostare il cursore sul gatto!')
  //   })
  // addEventListener richiede 2 parametri: l'EVENTO da ascoltare, e la funzione da lanciare!

  // 2) devo APPENDERLA nel DOM
  // vado a prendere un riferimento a quel div vuoto con id="images"
  const emptyDiv = document.getElementById('images')
  emptyDiv.appendChild(image) // l'elemento viene appeso ALLA FINE del tag
}

// x Michela, colleghiamo una funzione esterna ad un addEventListener
const externalFunction = function (e) {
  // voglio che questa funzione venga collegata al click del gatto
  console.log(
    "hai cliccato il gatto da una funzione esterna all'addEventListener"
  )
  console.log("l'evento è", e)
}
