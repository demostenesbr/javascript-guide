// Blocos de marcação são marcados com fonte monoescapaçada:
function numeroAleatorio(a, b) {
  var ntotal = b - a + 1;
  var resultado = Math.floor(Math.random() * ntotal) + a;
  alert("Número gerado: " + resultado);
}

// Trechos de marcação que merecem destaque são marcados em negrito

var s = "DjkAarstbEc43Afg8hmn";
var sResultado = s.match(/[A-E]/gi);
alert(sResultado);
s.match(/[A-E]/gi); // retorna um array com as letras maiúsculas de A a E encontradas na string s, ignorando a diferença entre maiúsculas e minúsculas. O resultado será: ['D', 'A', 'E', 'A'].
alert(sResultado); // exibe um alerta com o resultado do match, que é o array ['D', 'A', 'E', 'A'].
alert(sResultado[0]); // exibe um alerta com o primeiro elemento do array sResultado, que é 'D'.
alert(sResultado[5]); // exibe um alerta com o sexto elemento do array sResultado. No entanto, como o array sResultado contém apenas 4 elementos (índices 0 a 3), acessar o índice 5 resultará em undefined, e o alerta exibirá "undefined".

// Explicando o passo a cada linha de script com as linhas numeradas:

var i = 0;
var contador = null;
var contando = false;
function contar() {
    i++;
    document.forms[0].elements[0].value = i;
    contador = setTimeout(contar, 1000);
}

// Linha 2: Declaração e definição da variável i destinada a mostrar a contagem.
// Linha 3: Declaração e definição da variável contador, que será usada como o identificador do temporizador criado pela função setTimeout().

