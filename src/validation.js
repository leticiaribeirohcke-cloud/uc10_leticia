
// validation.js — validação dos dados
// Verifica se o título foi informado, remove espaços desnecessários
// e impede títulos com mais de 120 caracteres.
// Evita que dados inválidos sejam enviados para o banco.

// Se o título for uma string, remove os espaços em branco
// Senão, retorna uma string vazia
function normalizeTitle(title) {
    return typeof title === 'string' ? title.trim() : '';
}

// Valida o título e a descrição da tarefa
function validateTaskInput(input) {

    // Normaliza o título usando a função normalizeTitle
    const title = normalizeTitle(input?.title);

    // Verifica se o título foi informado
    if (!title) {
        throw new Error('O título da tarefa é obrigatório.');
    }

    // Verifica se o título tem mais de 120 caracteres
    if (title.length > 120) {
        throw new Error('O título deve ter no máximo 120 caracteres.');
    }

    // Normaliza a descrição, removendo espaços desnecessários
    const description = typeof input?.description === 'string'
        ? input.description.trim()
        : '';

    // Retorna os dados validados
    return { valid: true, data: { title, description } };
}

// Exporta as duas funções para serem usadas em outros arquivos
module.exports = { normalizeTitle, validateTaskInput };
