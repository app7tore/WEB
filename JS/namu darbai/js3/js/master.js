function amziausTikrinimas() {
  var amzius = prompt("Iveskite jusu amziu:");
  if (Number(amzius) >= 18){
    alert("Jus galite uzeiti i svetaine.");
  }
  else {
    alert("Jusu amzius per mazas, i svetaine uzeiti negalite.");
  }
}
