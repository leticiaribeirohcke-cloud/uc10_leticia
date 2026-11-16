# Academia Viva — Landing Page

## Sobre o projeto

O Academia Viva é uma landing page desenvolvida para apresentar uma academia e seus cursos, permitindo que os visitantes conheçam as modalidades disponíveis e demonstrem interesse por meio de um formulário de cadastro.

O projeto possui funcionalidades de validação de dados dos interessados, organização de filtros por modalidade e validação de tarefas, garantindo que as informações sejam verificadas antes de serem utilizadas pela aplicação.

## Tecnologias

| Tecnologia | Função |
| ---------- | ------ |
| HTML | Estrutura das páginas web |
| CSS | Estilização e design da aplicação |
| JavaScript | Interatividade e funcionalidades |
| Node.js | Ambiente de execução do JavaScript |
| npm | Gerenciador de pacotes e dependências |
| Jest | Framework utilizado para testes automatizados |

## Requisitos

- Node.js 18 ou superior
- npm
- Visual Studio Code (recomendado)

## Como executar

Para executar o projeto em outra máquina, siga os passos:

1. Baixe ou clone o repositório do projeto.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o terminal integrado.
4. Instale as dependências utilizando:

```bash
npm install
```

5. Abra o arquivo `index.html` utilizando a extensão Live Server do VS Code para visualizar a landing page.

## Como executar os testes

O projeto utiliza o Jest para realizar testes automatizados nas funções de validação.

Para executar os testes, abra o terminal na pasta que contém o `package.json` e utilize:

```bash
npm test
```

Os testes verificam:
- Validação dos dados dos interessados.
- Verificação de nome e e-mail.
- Validação de telefone e modalidade.
- Normalização de filtros de cursos.
- Remoção de espaços desnecessários dos títulos.
- Validação de títulos e descrições de tarefas.
- Limite máximo de 120 caracteres nos títulos.

Cada arquivo `validation.test.js` possui 10 testes automatizados.

## Organização dos arquivos

A estrutura dos arquivos no Visual Studio Code está organizada da seguinte forma:

```text
Academia-Viva/
│
├── index.html
├── package.json
├── package-lock.json
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── 166/
│   ├── validation.js
│   └── validation.test.js
│
└── 161/
    ├── validation.js
    └── validation.test.js
```

**Observação:** a organização apresentada representa a estrutura dos arquivos principais e de validação. Ajuste os nomes das pastas e arquivos caso sua estrutura real seja diferente.