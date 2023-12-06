// qua definisco COSA FARE all'invio del form

// prima di tutto è necessario poter interagire con questa operazione di submit
// questa operazione non avviene tramite i bottoni, o la pressione del tasto enter
// ma proprio a livello del tag form!

// prendiamo un riferimento all'elemento form:
const pageForm = document.getElementById('main-form') // il tag <form>

// ora dobbiamo interagire con la sua operazione di invio, che in inglese viene chiamata "submit"
pageForm.addEventListener('submit', function (e) {
  // la pagina si sta per aggiornare! è un comportamento vecchio di 30 anni...
  // dobbiamo FERMARE questo comportamento di default per poter interagire con questo form in una maniera "moderna"
  e.preventDefault() // evito che la pagina si aggiorni!
  // preventDefault() dev'essere la PRIMA COSA che inserite in questo addEventListener

  // ora possiamo cominciare a fare le cose che vogliamo!
  // ad esempio, recuperare i valori del form!
  console.log('Comincio a recuperare i dati del form')

  // per recuperare il valore dei campi input, prima di tutto seleziono dal form i campi input:
  const nameInputField = document.getElementById('firstName') // riferimento all'input del nome
  const ageInputField = document.getElementById('age') // riferimento all'input del nome
  const cityInputField = document.getElementById('city') // riferimento all'input del nome
  const bioInputField = document.getElementById('bio') // riferimento all'input del nome

  // ora che abbiamo i riferimenti dei campi, posso leggere il loro contenuto tramite la loro proprietà "value"

  console.log(nameInputField.value) // ad es. 'Stefano'
  console.log(ageInputField.value) // ad es. '19'
  console.log(cityInputField.value) // ad es. 'Roma'
  console.log(bioInputField.value) // ad es. 'Ciao'

  //   alert('grazie! dati inviati')

  // ultimo passaggio: creare un elemento nella pagina a partire dai dati creati
  // creiamo un div vuoto
  const userCard = document.createElement('div')
  // <div></div>
  // inserisco ora il contenuto testuale del div, prendendo anche i valori veri dal form!
  userCard.innerHTML = `
        <p>${nameInputField.value}</p>
        <p>${ageInputField.value}</p>
        <p>${cityInputField.value}</p>
        <p>${bioInputField.value}</p>
    `
  // es.:
  // <div>
  //     <p>Stefano</p>
  //     <p>19</p>
  //     <p>Roma</p>
  //     <p>GATTIIIII</p>
  // </div>

  // mettiamo ora questo div nella pagina! lo appenderò dentro la sezione "phonebook"
  const phoneBookSection = document.getElementById('phonebook')
  phoneBookSection.appendChild(userCard)

  // svuotiamo il form
  nameInputField.value = '' // stringa vuota, cancello il contenuto del campo
  ageInputField.value = ''
  cityInputField.value = ''
  bioInputField.value = ''
})
