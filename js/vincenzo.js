// VINCENZO'S STUFF

let imageHasBeenSeen = false
window.addEventListener('scroll', function (e) {
  //   console.log('SCROLLATO!', window.scrollY)

  if (this.window.scrollY === 532) {
    console.log('sei arrivato in fondo')
    imageHasBeenSeen = true
  }

  if (imageHasBeenSeen && window.scrollY < 10) {
    // cambiamo la src dell'immagine
    this.document
      .getElementById('test-img')
      .setAttribute('src', 'https://placedog.net/500')
  }
})
