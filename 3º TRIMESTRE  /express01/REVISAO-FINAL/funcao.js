// São blocos de código reaproveitáveis
// Remetem a alguma ação ou procedimento (replicável)
// Exige nomes auto-explicativos
                    // isso é apenas 1 modelo
function montarCarros(pecas, regras, documentos, montador){
    return { // expor os valores da função para reaproveitamento
        itens: [pecas, regras, documentos, montador],
        montar: function(){ console.log('Carro obtido com sucesso \\o/')}
    }
} // TODOS OS DADOS SERÃO DESCARTADOS
montarCarros(['motor', 'portas', 'rodas'], 
    'como montar um Monza',
    'Seu Zé'
)