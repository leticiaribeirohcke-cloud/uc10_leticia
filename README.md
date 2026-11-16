
# UC10 - Realizar Testes nas Aplicações Desenvolvidas

## Controle de tarefas

Aplicação CRUD simples para cadastrar, listar, concluir e excluir tarefas.

## Tecnologias

| Tecnologia | Função |
| ---------- | ------ |
| HTML | Estrutura/esqueleto da página web |
| CSS | Estilização/design da página |
| JavaScript | Interatividade/comportamento |
| Node.js | Ambiente de execução que permite executar o JS no servidor |
| Jest | Framework de testes automatizados |
| SQLite | Banco de dados relacional |
| Express | Framework back-end que recebe requisições do front-end |
| Supertest | Ferramenta que simula requisições HTTP para testar sua API |

# Testes

## Testes Unitários

| Caso de teste | Funcionalidade | Entrada | Saída esperada |
| ------------- | -------------- | ------- | -------------- |
| 1 | Remover espaços do início e do fim do título | "   Teste Unitário   " | "Teste Unitário" |
| 2 | Verificar se o título é uma string | Número, null ou undefined | Retornar string vazia |
| 3 | Verificar se o título está vazio | "" | Retornar string vazia |
| 4 | Manter o título sem espaços extras | "Estudar programação" | "Estudar programação" |
| 5 | Validar uma tarefa com título e descrição | Tarefa com dados válidos | Retornar os dados validados |
| 6 | Verificar se o título foi informado | Título vazio | Exibir erro de título obrigatório |
| 7 | Rejeitar título contendo apenas espaços | "   " | Exibir erro de título obrigatório |
| 8 | Verificar o limite de caracteres do título | Título com 121 caracteres | Exibir erro de limite de 120 caracteres |
| 9 | Remover espaços desnecessários da descrição | "   Aprender programação   " | "Aprender programação" |
| 10 | Validar tarefa sem descrição | Título válido e sem descrição | Retornar descrição vazia |
