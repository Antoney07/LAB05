Exercício 2 - Sistema de Gerenciamento de Funcionários

Descrição:
Resolução do estudo de caso para o gerenciamento de funcionários de uma empresa. O código foi construído em TypeScript e aplica conceitos de Programação Orientada a Objetos, como criação de classes, tipagem estática e modificadores de acesso (public/private).

Como executar o programa

Pelo terminal, navegue até a pasta onde o arquivo index.ts está salvo e execute o comando:

ts-node index.ts

Testes Realizados

Para validar o funcionamento e as regras de negócio, algumas funções de teste foram criadas no final do código. Ao rodar o sistema, ele executa os seguintes passos automaticamente e imprime os resultados no terminal:

Teste de Cadastro: Instancia 3 funcionários com matrículas, nomes, cargos e salários diferentes, adicionando-os na base da empresa.

Teste de Atualização de Salário: Altera o salário da matrícula 102 com sucesso.

Teste de Erro (Atualização): Tenta atualizar o salário de uma matrícula fictícia (999), ativando a validação de erro que informa que o funcionário não foi encontrado.

Teste de Consulta: Busca os dados da matrícula 101, validando a pesquisa e imprimindo as informações detalhadas no terminal.

Teste de Erro (Consulta): Tenta consultar os dados da matrícula 999, validando a regra que retorna "undefined" e imprimindo o erro corretamente no console.
