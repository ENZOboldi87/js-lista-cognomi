// variabile
var listaCognomi = document.getElementById('lista-cognomi');

var cognomeUtente = prompt ("inserisci il tuo cognome");
// lista cognomi
var cognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


do {

  if (!isNaN(cognomeUtente)) {
      alert("non hai inserito un cognome");
    }

} while (0 > cognomeUtente.length)  {
  cognomi.push(cognomeUtente);
  cognomi.sort();
}

for (var i = 0; i < cognomi.length; i++) {
  listaCognomi.innerHTML += "<li>" + cognomi[i] + "</li>";
}
alert('il tuo cognome e ' + cognomeUtente)
alert('il tuo cognome e il numero ' + (cognomi.indexOf(cognomeUtente) + 1) + " su " + cognomi.length);
console.log(cognomi);
