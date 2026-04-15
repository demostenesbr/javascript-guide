// Arquivos para download - HMTL + JS:

function numeroAleatorio(a, b) {
    var ntotal = b - a + 1;
    var resultado = Math.floor(Math.random() * ntotal) + a;
    alert("Número gerado: " + resultado);
}