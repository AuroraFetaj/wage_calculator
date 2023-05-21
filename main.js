// const PagaInput = document.querySelector(".c");
// const BrutoNetoInput = document.querySelector(".radio");

// const SigurimeShoqerorePunemarresiValue = document.querySelector(".sig-shoq-punemarresi");
// const SigurimeShoqerorePunedhenesiValue = document.querySelector(".sig-shoq-punedhenesi");
// const SigurimeShendetsorePunemarresiValue = document.querySelector(".sig-shend-punemarresi");
// const SigurimeShendetsorePunedhenesiValue = document.querySelector(".sig-shend-punedhenesi");
// const TAPValue = document.querySelector(".tap");

// const calculateBtn = document.querySelector(".calculate-btn");

// let Paga = parseFloat(PagaInput.value);
// let BrutoNeto = parseFloat(BrutoNetoInput.value);

// const calculateSigurimeShoqerorePunemarresi = () => {
//     let sigShoqPunemarresi = 0;
    
//     if(Paga < 176416){
//         sigShoqPunemarresi = Paga * 0.095;
//     }
//     else if(Paga >= 176416){
//         sigShoqPunemarresi = 176416 * 0.095;
//     }

//     return sigShoqPunemarresi;
// };

// const calculateSigurimeShoqerorePunedhenesi = () => {

//     let sigShoqPunedhenesi = Paga * 0.017;

//     return sigShoqPunedhenesi;
// };

// const calculateSigurimeShendetsorePunemarresi = () => {

//     let sigShendPunemarresi = Paga * 0.017;

//     return sigShendPunemarresi;
// };

// const calculateSigurimeShendetsorePunedhenesi = () => {

//     let sigShendPunedhenesi = Paga * 0.15;

//     return sigShendPunedhenesi;
// };

// const calculateTAP = () => {

//     let tap = 0;

//     if(Paga <= 4000){
//         tap = 0;
//     }
//     else if (Paga > 40000 && Paga <= 50000){
//         tap = ((Paga - 30000) * 0.13 * 0.5);
//     }
//     else if (Paga > 50000 && Paga <=200000){
//         tap = ((Paga - 30000) * 0.13);
//     }
//     else if (Paga > 200000){
//         tap = (((Paga - 200000) * 0.23) + 22100);
//     }

//     return tap;
// };

// const updateData = (sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap) => {
//     SigurimeShoqerorePunemarresiValue.innerHTML = Math.round(sigShoqPunemarresi);
//     SigurimeShoqerorePunedhenesiValue.innerHTML = Math.round(sigShoqPunedhenesi);
//     SigurimeShendetsorePunemarresiValue.innerHTML = Math.round(sigShendPunemarresi);
//     SigurimeShendetsorePunedhenesiValue.innerHTML = Math.round(sigShendPunedhenesi);
//     TAPValue.innerHTML = Math.round(tap);
// }

// const init = () => {
//     let sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi();
//     let sigShoqPunedhenesi = calculateSigurimeShoqerorePunedhenesi();
//     let sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi();
//     let sigShendPunedhenesi = calculateSigurimeShendetsorePunedhenesi();
//     let tap = calculateTAP();
//     updateData(sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap);
// }

// init();

// const refreshInputValues = () => {
//     Paga = parseFloat(PagaInput.value);
// }

// calculateBtn.addEventListener("click", () => {
//     refreshInputValues();
//     let sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi();
//     let sigShoqPunedhenesi = calculateSigurimeShoqerorePunedhenesi();
//     let sigShendPunemarresi = calculateSigurimeShendetsorePunemarresi();
//     let sigShendPunedhenesi = calculateSigurimeShendetsorePunedhenesi();
//     let tap = calculateTAP();
//     updateData(sigShoqPunemarresi, sigShoqPunedhenesi, sigShendPunemarresi, sigShendPunedhenesi, tap);
// });




function calculateSigurimeShoqerorePunemarresi(paga) {

    let sigShoqPunemarresi = 0;

    if(paga < 176416){
        sigShoqPunemarresi = paga * 0.095;
    }
    else if(paga >= 176416){
        sigShoqPunemarresi = 176416 * 0.095;
    }
  
    return sigShoqPunemarresi;
  }


function calculateAndDisplaySigurimeShoqerorePunemarresi() {

    const pagaInput = document.getElementById('paga').value;
  
    const paga = parseFloat(pagaInput);
  
    const sigShoqPunemarresi = calculateSigurimeShoqerorePunemarresi(paga);
  
    const outputElement = document.getElementById('value');
    outputElement.innerHTML = `${sigShoqPunemarresi}`;
  }

  
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculateAndDisplaySigurimeShoqerorePunemarresi);
