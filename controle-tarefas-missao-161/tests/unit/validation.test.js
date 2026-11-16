
// Importa as funções do arquivo validation.js
const { normalizeTitle, validateTaskInput } = require('./validation');

// Agrupa os testes de validação de tarefas
describe('Validação de tarefas', () => {

    // TESTE 1: Verifica se remove os espaços do início e do fim do título
    test('Remove espaços do início e do fim do título', () => {
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário');
    });

    // TESTE 2: Verifica se retorna uma string vazia quando recebe um valor que não é uma string
    test('Retorna string vazia se o título não for uma string', () => {
        expect(normalizeTitle(15487)).toBe('');
        expect(normalizeTitle(null)).toBe('');
        expect(normalizeTitle(undefined)).toBe('');
    });

    // TESTE 3: Verifica se retorna uma string vazia quando o título está vazio
    test('Retorna string vazia quando o título está vazio', () => {
        expect(normalizeTitle('')).toBe('');
    });

    // TESTE 4: Verifica se mantém o título sem espaços extras
    test('Mantém o título original', () => {
        expect(normalizeTitle('Estudar programação')).toBe('Estudar programação');
    });

    // TESTE 5: Verifica se aceita uma tarefa com título válido
    test('Aceita uma tarefa válida', () => {
        expect(validateTaskInput({
            title: 'Estudar programação',
            description: 'Aprender JavaScript'
        })).toEqual({
            valid: true,
            data: {
                title: 'Estudar programação',
                description: 'Aprender JavaScript'
            }
        });
    });

    // TESTE 6: Verifica se rejeita uma tarefa sem título
    test('Rejeita uma tarefa com título vazio', () => {
        expect(validateTaskInput({ title: '' })).toEqual({
            valid: false,
            error: 'O título da tarefa é obrigatório.'
        });
    });

    // TESTE 7: Verifica se rejeita um título contendo apenas espaços
    test('Rejeita um título contendo apenas espaços', () => {
        expect(validateTaskInput({ title: '   ' }).valid).toBe(false);
    });

    // TESTE 8: Verifica se rejeita títulos com mais de 120 caracteres
    test('Rejeita um título com mais de 120 caracteres', () => {
        expect(validateTaskInput({
            title: 'A'.repeat(121)
        })).toEqual({
            valid: false,
            error: 'O título deve ter no máximo 120 caracteres.'
        });
    });

    // TESTE 9: Verifica se remove os espaços desnecessários da descrição
    test('Remove espaços do início e do fim da descrição', () => {
        expect(validateTaskInput({
            title: 'Estudar',
            description: '   Aprender programação   '
        }).data.description).toBe('Aprender programação');
    });

    // TESTE 10: Verifica se aceita uma tarefa sem descrição
    test('Aceita uma tarefa sem descrição', () => {
        expect(validateTaskInput({
            title: 'Fazer exercícios'
        }).data.description).toBe('');
    });

});