// variabile
var listaCognomi = document.getElementById('lista-cognomi');
var cognomeUtente = '';
var tentativo = 0;
var messaggio = 'Inserisci il tuo cognome';


// lista cognomi
var cognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];


do {

  if (++tentativo > 1) {
    messaggio = 'Non hai inserito un cognome valido';
    }
cognomeUtente = prompt(messaggio);

} while ((cognomeUtente.length == 0) || (!isNaN(cognomeUtente)));
  cognomi.push(cognomeUtente);
  cognomi.sort();


for (var i = 0; i < cognomi.length; i++) {
  listaCognomi.innerHTML += "<li>" + cognomi[i] + "</li>";
}
alert('il tuo cognome e ' + cognomeUtente)
alert('il tuo cognome e il numero ' + (cognomi.indexOf(cognomeUtente) + 1) + " su " + cognomi.length);
console.log(cognomi);
