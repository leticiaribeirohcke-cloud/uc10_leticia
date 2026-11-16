
// validation.js — validação dos dados dos interessados

function validateLead({ name, email, phone, interest }) {
    const errors = [];

    // Verifica se o nome é um texto com pelo menos 3 caracteres
    if (typeof name !== "string" || name.trim().length < 3) {
        errors.push("Informe seu nome (mínimo de 3 caracteres).");
    }

    // Verifica se o e-mail possui um formato válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (typeof email !== "string" || !emailPattern.test(email.trim())) {
        errors.push("Informe um e-mail válido.");
    }

    // Verifica se o telefone, quando informado, é um texto
    if (phone && typeof phone !== "string") {
        errors.push("O telefone deve ser um texto.");
    }

    // Define as modalidades permitidas
    const allowedInterests = ["Online", "Presencial", "Ainda não sei"];

    // Verifica se a modalidade informada é válida
    if (interest && !allowedInterests.includes(interest)) {
        errors.push("Selecione uma modalidade válida.");
    }

    // Retorna o resultado da validação e os erros encontrados
    return { valid: errors.length === 0, errors };
}

// Normaliza o filtro de modalidade dos cursos
function normalizeCourseFilter(modality) {
    if (!modality || modality === "Todos") return null;

    const allowed = ["Online", "Presencial"];

    return allowed.includes(modality) ? modality : null;
}

// Exporta as funções para serem utilizadas em outros arquivos
module.exports = { validateLead, normalizeCourseFilter };
