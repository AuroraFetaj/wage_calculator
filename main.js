let myChart;

function radioBtn() {
  const radioButtons = document.querySelectorAll('input[name="bruto-neto"]');
  
  let selectedBtn;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedBtn = radioButton.value;
      break;
    }
  }

  return selectedBtn;
}

function calculateSigurimeShoqerorePunemarresi(paga) {

    let sigShoqPunemarresi = 0;

    if(paga < 176416){
        sigShoqPunemarresi = Math.round(paga * 0.095);
    }
    else if(paga >= 176416){
        sigShoqPunemarresi = Math.round(176416 * 0.095);
    }
  
    return sigShoqPunemarresi;
  }

  function calculateSigurimeShoqerorePunedhenesi(paga) {

    let sigShoqPunedhenesi = 0;

    if(paga < 176416){
        sigShoqPunedhenesi = Math.round(paga * 0.15);
    }
    else if(paga >= 176416){
        sigShoqPunedhenesi = Math.round(176416 * 0.15);
    }
  
    return sigShoqPunedhenesi;
  }

  function calculateSigurimeShendetsorePunemarresi(paga) {

    let sigShendPunemarresi = Math.round(paga *0.017);
  
    return sigShendPunemarresi;
  }

  function calculateSigurimeShendetsorePunedhenesi(paga) {

    let sigShendPunedhenesi = Math.round(paga *0.017);
  
    return sigShendPunedhenesi;
  }

  function calculateTAP(Paga) {

    let tap = 0;

    if(Paga <= 4000){
      tap = 0;
    }
    else if (Paga > 40000 && Paga <= 50000){
      tap = ((Paga - 30000) * 0.13 * 0.5);
    }
    else if (Paga > 50000 && Paga <= 200000){
      tap = ((Paga - 30000) * 0.13);
    }
    else if (Paga > 200000){
      tap = (((Paga - 200000) * 0.23) + 22100);
    }
  
    return tap;
  }

  function calculatePagaNeto(paga) {
    let radioButon = radioBtn();
    let pagaNeto = 0;

    if (radioButon == "bruto"){
      let tap = calculateTAP(paga);
      let sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi(paga);
      let sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi(paga);
      pagaNeto = paga - sigShoqPunemarresi - sigShendPunemarresi - tap;
    }

    else if (radioButon == "neto"){
      pagaNeto = paga;
    }

    return pagaNeto;
  }

  function calculatePagaBruto (paga) {
    let radioButon = radioBtn();
    let pagaBruto = 0;

    if (radioButon == "bruto"){
      pagaBruto = paga;
    }

    else if(radioButon == "neto"){
      let tap = calculateTAP(paga);
      let sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi(paga);
      let sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi(paga);
      pagaBruto = paga + sigShoqPunemarresi + sigShendPunemarresi + tap;
    }

    return pagaBruto;
  }

function calculateAndDisplaySigurimeShoqerorePunemarresi() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi(paga);
  
    const outputElement = document.getElementById('value');
    outputElement.innerHTML = `${sigShoqPunemarresi}`;
  }

  function calculateAndDisplaySigurimeShoqerorePunedhenesi() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const sigShoqPunedhenesi = calculateSigurimeShoqerorePunedhenesi(paga);
  
    const outputElement = document.getElementById('value2');
    outputElement.innerHTML = `${sigShoqPunedhenesi}`;
  }

  function calculateAndDisplaySigurimeShendetsorePunemarresi() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi(paga);
  
    const outputElement = document.getElementById('value3');
    outputElement.innerHTML = `${sigShendPunemarresi}`;
  }

  function calculateAndDisplaySigurimeShendetsorePunedhenesi() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const sigShendPunedhenesi = calculateSigurimeShendetsorePunedhenesi(paga);
  
    const outputElement = document.getElementById('value4');
    outputElement.innerHTML = `${sigShendPunedhenesi}`;
  }

  function calculateAndDisplayTAP() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const tap = calculateTAP(paga);
  
    const outputElement = document.getElementById('value5');
    outputElement.innerHTML = `${tap}`;
  }

  function calculateAndDisplayPagaNeto() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const neto = calculatePagaNeto(paga);
  
    const outputElement = document.getElementById('neto');
    outputElement.value = neto;
  }

  function calculateAndDisplayPagaBruto() {

    const pagaInput = document.getElementById('paga').value;

    const paga = parseFloat(pagaInput);

    const bruto = calculatePagaBruto(paga);

    const outputElement = document.getElementById('bruto');
    outputElement.value = bruto;
  }

  
  function allfunctions() {
    calculateAndDisplaySigurimeShoqerorePunemarresi();
    calculateAndDisplaySigurimeShoqerorePunedhenesi();
    calculateAndDisplaySigurimeShendetsorePunemarresi();
    calculateAndDisplaySigurimeShendetsorePunedhenesi();
    calculateAndDisplayTAP();
    calculateAndDisplayPagaNeto();
    calculateAndDisplayPagaBruto();
    radioBtn();
    calculateAndDisplayChart();
  }
  

const displayChart = (sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Sigurime shoqërore Punëmarrësi', 'Sigurime shoqërore Punëdhënësi', 'Sigurime shëndetsore Punëmarrësi', 'Sigurime shëndetsore Punëdhënësi', 'TAP'],
      datasets: [{
        data: [sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap],
        backgroundColor: ['#2085ec', '#72b4eb', '#0a417a', '#8464a0', '#cea9bc'],
        borderWidth: 0,
      }],
    },
  });
};

const updateChart = (sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap) => {
  myChart.data.datasets[0].data[0] = sigShoqPunemarresi;
  myChart.data.datasets[0].data[1] = sigShoqPunedhenesi;
  myChart.data.datasets[0].data[2] = sigShendPunemarresi;
  myChart.data.datasets[0].data[3] = sigShendPunedhenesi;
  myChart.data.datasets[0].data[4] = tap;
  myChart.update();
};


const calculateAndDisplayChart = () => {
  const pagaInput = document.getElementById('paga').value;
  const paga = parseFloat(pagaInput);

  const sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi(paga);
  const sigShoqPunedhenesi = calculateSigurimeShoqerorePunedhenesi(paga);
  const sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi(paga);
  const sigShendPunedhenesi = calculateSigurimeShendetsorePunedhenesi(paga);
  const tap = calculateTAP(paga);

  if (myChart) {
    updateChart(sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap);
  } else {
    displayChart(sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap);
  }
};

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', allfunctions);

var input = document.getElementById("paga");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calculate").click();
  }
});