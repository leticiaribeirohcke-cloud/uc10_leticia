
// Importação da função que será testada
const { validateLead } = require("../src/validation");

// Testes unitários da função validateLead()
describe("Testes da função validateLead()", () => {

    // Teste 01 - Cadastro completo válido
    test("Aceita um cadastro completo válido", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            phone: "27999999999",
            interest: "Online"
        });

        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    // Teste 02 - Cadastro mínimo válido
    test("Aceita um cadastro mínimo válido", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com"
        });

        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    // Teste 03 - Nome muito curto
    test("Rejeita um nome muito curto", () => {
        const result = validateLead({
            name: "Al",
            email: "ana@email.com"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe seu nome (mínimo de 3 caracteres)."
        );
    });

    // Teste 04 - Nome com espaços vazios
    test("Rejeita um nome com espaços vazios", () => {
        const result = validateLead({
            name: "     ",
            email: "ana@email.com"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe seu nome (mínimo de 3 caracteres)."
        );
    });

    // Teste 05 - Nome com tipo incorreto
    test("Rejeita um nome com tipo incorreto", () => {
        const result = validateLead({
            name: 12345,
            email: "ana@email.com"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe seu nome (mínimo de 3 caracteres)."
        );
    });

    // Teste 06 - E-mail sem @
    test("Rejeita um e-mail sem @", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "anaemail.com"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe um e-mail válido."
        );
    });

    // Teste 07 - E-mail incompleto
    test("Rejeita um e-mail incompleto", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "email@email"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe um e-mail válido."
        );
    });

    // Teste 08 - E-mail com tipo incorreto
    test("Rejeita um e-mail com tipo incorreto", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: 12345
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Informe um e-mail válido."
        );
    });

    // Teste 09 - Telefone com tipo incorreto
    test("Rejeita um telefone com tipo incorreto", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            phone: 27999999999
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Preencha o telefone corretamente."
        );
    });

    // Teste 10 - Modalidade inválida
    test("Rejeita uma modalidade inválida", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "Híbrido"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Selecione uma modalidade válida."
        );
    });

    // Teste 11 - Modalidade com letras minúsculas
    test("Rejeita modalidade com letras minúsculas", () => {
        const result = validateLead({
            name: "Ana Silva",
            email: "ana@email.com",
            interest: "online"
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain(
            "Selecione uma modalidade válida."
        );
    });

});
