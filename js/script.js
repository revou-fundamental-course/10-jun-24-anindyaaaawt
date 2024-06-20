let inputSatu = document.getElementById('inputSatu');
let inputDua = document.getElementById('inputDua');
let rumus = document.getElementById('rumus');
let kondisi = 1;

let labelSatu = document.getElementById('labelSatu');
let labelDua = document.getElementById('labelDua');

function konversi() {
    if (kondisi==1){
        inputDua.value = (inputSatu.value * 9/5) + 32;
        rumus.value = "(" + inputSatu.value + " x 9/5) + 32 = " + inputDua.value;
    } else {
        inputDua.value = (inputSatu.value - 32) * 5/9;
        rumus.value = "(" + inputSatu.value + " - 32) x 5/9 = " + inputDua.value;
    }
}
function restart() {
    inputSatu.value = "";
    inputDua.value = "";
    rumus.value = "";
}
function switchKonversi() {
    konversiMode = !konversiMode;
    if (konversiMode) {
      document.getElementById('labelSatu').textContent = 'Celsius';
      document.getElementById('labelDua').textContent = 'Fahrenheit';
    } else {
      document.getElementById('labelSatu').textContent = 'Fahrenheit';
      document.getElementById('labelDua').textContent = 'Celsius';
    }
  }
