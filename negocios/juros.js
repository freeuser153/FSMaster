const calculoJuros = (p, i, n) => p * Math.pow(i+1,n)

// Torna essa parte disponível para que outras partes possam acessar 
module.exports = {
    calculoJuros
}