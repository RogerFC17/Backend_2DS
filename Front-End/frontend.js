// Declaração de uma função que verifica a maioridade
function verificarMaioridade(idade) {
    // Condicional para avaliar o valor recebido na variável 'idade'
    if (idade >= 18) {
        // Retorna uma mensagem caso a condição seja verdadeira
        return "Você é maior de idade. Acesso permitido.";
    } else {
        // Retorna uma mensagem caso a condição seja falsa
        return "Você é menor de idade. Acesso negado.";
    }
}

// Criando uma variável para simular a idade do usuário
let idadeUsuario = 20;

// Executando a função e exibindo o resultado no console do navegador
console.log(verificarMaioridade(idadeUsuario));