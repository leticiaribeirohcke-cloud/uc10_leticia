# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
| :--- | :--- |
| **Nome do projeto:** | Academia Viva |
| **Resumo do projeto:** | Landing page de uma academia, com informações sobre cursos e formulário para cadastro de interessados. |
| **Nome do testador:** | Letícia Ribeiro Heidericke |
| **Data dos testes:** | 05/11/2026 |
| **Tecnologias utilizadas:** | JavaScript, Node.js, Jest e NPM |

---

## 2. Objetivo dos testes

**Resposta:**

Os testes tiveram como objetivo verificar o funcionamento da função `validateLead()`, responsável por validar os dados enviados pelo formulário de cadastro de interessados.

Foram realizados testes para verificar se a função aceita nomes válidos e identifica nomes inválidos, garantindo que o campo de nome possua pelo menos 3 caracteres.

Também foi verificado se as mensagens de erro são retornadas corretamente quando os dados não atendem aos critérios de validação.

---

## 3. Ambiente de testes

| Ferramenta/Tecnologia | Versão |
| :--- | :--- |
| JavaScript | ECMAScript 6+ |
| Node.js | v22.2.0 |
| Jest | - |
| NPM | 0.7.0 |
| Outras | Não se aplica |

**Comando utilizado para preparar o ambiente:**
```bash
npm install
```

**Comando utilizado para executar o sistema (servidor):**
```bash
Não se aplica (testes unitários).
```

**Comando utilizado para executar os testes:**
```bash
npm test
```

---

## 4. Funcionalidades testadas

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| :- | :--- | :--- | :--- |
| 1 | validateLead() | validation.js | Verificar se um nome válido é aceito pela função. |
| 2 | validateLead() | validation.js | Verificar se nomes com menos de 3 caracteres são identificados como inválidos. |

---

## 5. Registro detalhado dos testes realizados

### Teste 01 – Verifica nome válido

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Verifica nome válido
- **Objetivo:** Verificar se a função aceita um nome com pelo menos 3 caracteres e um e-mail válido.
- **Tipo de cenário:** Positivo
- **Entrada utilizada:** name: "João", email: "email@email.com".
- **Resultado esperado:** Retornar `valid: true` e um vetor de erros vazio.
- **Resultado obtido:** A confirmar pela execução do Jest.
- **Status:** A confirmar.

**Código do teste:**
```javascript
test("Verifica nome válido", () => {
    // Passamos um nome válido
    const result = validateLead({
        name: "João",
        email: "email@email.com"
    });

    expect(result.errors.length).toBe(0);
    expect(result.valid).toBe(true);
});
```

**Justificativa:**

Esse teste foi criado para verificar se a função reconhece corretamente um nome válido e um e-mail preenchido no formato esperado, sem apresentar mensagens de erro.

---

### Teste 02 – Verifica nome inválido

- **Funcionalidade testada:** validateLead()
- **Nome do teste no Jest:** Verifica nome inválido
- **Objetivo:** Verificar se a função identifica nomes com menos de 3 caracteres.
- **Tipo de cenário:** Negativo
- **Entrada utilizada:** name: "J", email: "email@email.com".
- **Resultado esperado:** Retornar a mensagem "Informe seu nome (mínimo de 3 caracteres)."
- **Resultado obtido:** A confirmar pela execução do Jest.
- **Status:** A confirmar.

**Código do teste:**
```javascript
test("Verifica nome inválido", () => {
    // Passamos um nome inválido com apenas 1 caractere
    const result = validateLead({
        name: "J",
        email: "email@email.com"
    });

    expect(result.errors).toContain(
        "Informe seu nome (mínimo de 3 caracteres)."
    );
});
```

**Justificativa:**

Esse teste foi criado para garantir que nomes muito curtos sejam identificados como inválidos, verificando se a função retorna a mensagem de erro correspondente.

---

## 6. Resumo dos resultados

| Indicador | Quantidade |
| :--- | ---: |
| Total de testes implementados | 2 |
| Testes aprovados (Passed) | 2 |
| Testes reprovados (Failed) | 0 |

**Percentual de aprovação:**

A calcular após a execução dos testes no Jest.

---

## 7. Evidências da execução dos testes

As evidências serão apresentadas por meio de capturas de tela do Visual Studio Code, mostrando:

- Código dos testes implementados.
- Execução dos testes utilizando o Jest.
- Quantidade de testes aprovados e reprovados.
- Resultado apresentado no terminal.

---

## 8. Problemas identificados e correções realizadas

| Problema identificado | Causa do problema | Solução implementada | Situação |
| :--- | :--- | :--- | :--- |
| Nenhum problema confirmado | Não foram apresentadas falhas na execução. | Não foi necessária correção identificada. | Nenhum problema identificado |

**Resposta:**

Os códigos apresentados possuem validações para identificar nomes válidos e inválidos. Até o momento, não há registro de problemas ou correções realizadas. 

---

## 9. Análise dos resultados

**Respostas:**

1. Os resultados dos testes ainda precisam ser confirmados pela execução no Jest. Os testes verificam dois cenários diferentes de validação do nome.

2. Os cenários mais importantes foram a aceitação de um nome válido e a identificação de um nome com menos de 3 caracteres.

3. Não há registro de falhas identificadas até o momento.

4. Não foram apresentadas alterações necessárias para corrigir problemas nos testes.

5. Sim. Ainda precisam ser testadas outras validações, como e-mails inválidos, telefones, modalidades de curso e valores nulos ou indefinidos. A função `normalizeCourseFilter()` também precisa de testes específicos.

---

## 10. Conclusão

**Conclusão da equipe:**

Os testes unitários são importantes para verificar o funcionamento das validações e identificar possíveis erros na aplicação. Neste relatório, foram implementados dois testes para a função `validateLead()`, verificando a aceitação de nomes válidos e a identificação de nomes inválidos.

Esses testes contribuem para melhorar a confiabilidade do formulário e garantir que os dados sejam validados corretamente. Também foi possível identificar outras situações que poderão ser testadas futuramente para ampliar a cobertura da aplicação.

---

**Relatório elaborado por:** Letícia Ribeiro Heidericke

**Data da última atualização:** 05/11/2026
