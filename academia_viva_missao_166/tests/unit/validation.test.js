
// Importa a função validateLead do arquivo validation.js
const { validateLead } = require('./validation');

// Agrupa os testes de validação de leads
describe('Validação de leads', () => {

    // TESTE 1: Verifica se aceita um cadastro completo com todos os campos válidos
    test('Aceita um cadastro completo válido', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: '27999999999',
            interest: 'Online'
        });

        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    // TESTE 2: Verifica se aceita um cadastro apenas com os campos obrigatórios
    test('Aceita um cadastro mínimo válido', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com'
        });

        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    // TESTE 3: Verifica se rejeita um nome com menos de 3 caracteres
    test('Rejeita um nome muito curto', () => {
        const result = validateLead({
            name: 'Al',
            email: 'ana@email.com'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe seu nome (mínimo de 3 caracteres).');
    });

    // TESTE 4: Verifica se rejeita um nome contendo apenas espaços em branco
    test('Rejeita um nome com espaços vazios', () => {
        const result = validateLead({
            name: '     ',
            email: 'ana@email.com'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe seu nome (mínimo de 3 caracteres).');
    });

    // TESTE 5: Verifica se rejeita um nome que não seja do tipo string
    test('Rejeita um nome com tipo incorreto', () => {
        const result = validateLead({
            name: 12345,
            email: 'ana@email.com'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe seu nome (mínimo de 3 caracteres).');
    });

    // TESTE 6: Verifica se rejeita um e-mail que não possui o símbolo @
    test('Rejeita um e-mail sem @', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'anaemail.com'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe um e-mail válido.');
    });

    // TESTE 7: Verifica se rejeita um e-mail sem domínio completo e sem ponto
    test('Rejeita um e-mail incompleto', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'email@email'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe um e-mail válido.');
    });

    // TESTE 8: Verifica se rejeita um e-mail que não seja do tipo string
    test('Rejeita um e-mail com tipo incorreto', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 12345
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Informe um e-mail válido.');
    });

    // TESTE 9: Verifica se rejeita um telefone enviado como número em vez de texto
    test('Rejeita um telefone com tipo incorreto', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            phone: 27999999999
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('O telefone deve ser um texto.');
    });

    // TESTE 10: Verifica se rejeita uma modalidade que não está na lista permitida
    test('Rejeita uma modalidade inválida', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            interest: 'Híbrido'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Selecione uma modalidade válida.');
    });

    // TESTE 11: Verifica se diferencia letras maiúsculas e minúsculas na modalidade
    test('Rejeita modalidade com letras minúsculas', () => {
        const result = validateLead({
            name: 'Ana Silva',
            email: 'ana@email.com',
            interest: 'online'
        });

        expect(result.valid).toBe(false);
        expect(result.errors).toContain('Selecione uma modalidade válida.');
    });

});