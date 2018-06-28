function varduSpausdinimas() {
  var vardai = ["Jonas", "Petras", "Martynas", "Ona", "Urte", "Ema"];
  var vardas = prompt("Iveskite varda, kuri nespausdinti:");

  for (var i = 0; i < vardai.length; i++) {
    if (vardas != vardai[i]){
      console.log(vardai[i]);
    }
    else {
      continue;
    }
  }
}
