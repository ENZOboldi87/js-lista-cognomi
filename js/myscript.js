var listaCognomi = document.getElementById('lista-cognomi');


// lista cognomi
var cognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


do {
  cognomeUtente = prompt ("inserisci il tuo cognome");
  if (!isNaN(cognomeUtente)) {
      alert("non hai inserito un cognome");
    }


} while ((0 > cognomeUtente.length) || (!isNaN(cognomeUtente)))  {
  cognomi.push(cognomeUtente);
  cognomi.sort();
}

alert('il tuo cognome e ' + cognomeUtente)
alert('il tuo cognome e il numero ' + (cognomi.indexOf(cognomeUtente) + 1) + " su " + cognomi.length);
console.log(cognomi);
