const etanol = 4.22;
const gasolina = 5.63;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 12;
const distanciaEmKm = 500; 


if (tipoCombustivel === "Etanol") {
    console.log((distanciaEmKm / kmPorLitro * etanol).toFixed(2));
} else {
    console.log((distanciaEmKm / kmPorLitro * gasolina).toFixed(2));
}