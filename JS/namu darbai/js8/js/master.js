// Funkcija turi grąžinti naują masyvą, be vieno elemento (to kuris buvo nurodytas kaip antras argumentas funkcijoje).
function masyvoGrazinimas() {
  var vardai = ["Jonas", "Petras", "Martynas", "Ona", "Urte", "Ema"];
  var vardas = prompt("Iveskite varda is masyvo kuri negrazinti:");
  var naujasMasyvas = new Array();

  for (var i = 0; i < vardai.length; i++) {
        vardas != vardai[i] && naujasMasyvas.push(vardai[i]);
  }

  for (var k = 0; k < naujasMasyvas.length; k++) {
    console.log(naujasMasyvas[k]);
  }
}
