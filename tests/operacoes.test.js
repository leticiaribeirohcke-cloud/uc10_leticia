// TESTES

const {
    calcularAcrescimo,
    classificarDesempenho,
    validarJogador,
    calcularEntrega,
    converterRealParaDolar,
    calcularPedido,
    validarTamanhoSenha,
    verificarDisponibilidade,
    calcularMediaFinal
} = require("../src/operacoes");

/* ---------- QUESTÃO 1 ---------- */

describe("calcularAcrescimo", () => {
    test("deve calcular acréscimo de 10%", () => {
        expect(calcularAcrescimo(100, 10)).toBe(110);
    });

    test("deve calcular acréscimo de 50%", () => {
        expect(calcularAcrescimo(200, 50)).toBe(300);
    });

    test("deve retornar o valor original com 0%", () => {
        expect(calcularAcrescimo(100, 0)).toBe(100);
    });

    test("deve rejeitar valor negativo", () => {
        expect(() => calcularAcrescimo(-50, 10))
            .toThrow("Dados inválidos");
    });
});

/* ---------- QUESTÃO 2 ---------- */

describe("classificarDesempenho", () => {
    test("deve classificar como Excelente", () => {
        expect(classificarDesempenho(9.5)).toBe("Excelente");
    });

    test("deve classificar como Bom", () => {
        expect(classificarDesempenho(8)).toBe("Bom");
    });

    test("deve classificar como Regular", () => {
        expect(classificarDesempenho(6)).toBe("Regular");
    });

    test("deve classificar como Insuficiente", () => {
        expect(classificarDesempenho(4)).toBe("Insuficiente");
    });

    test("deve rejeitar nota inválida", () => {
        expect(() => classificarDesempenho(11))
            .toThrow("Nota inválida");
    });
});

/* ---------- QUESTÃO 3 ---------- */

describe("validarJogador", () => {
    test("deve aceitar todos os dados válidos", () => {
        expect(validarJogador("Lucas", 20, 100)).toBe(true);
    });

    test("deve rejeitar usuário vazio", () => {
        expect(validarJogador("", 20, 100)).toBe(false);
    });

    test("deve rejeitar usuário com espaços", () => {
        expect(validarJogador("   ", 20, 100)).toBe(false);
    });

    test("deve rejeitar idade abaixo de 13", () => {
        expect(validarJogador("Lucas", 12, 100)).toBe(false);
    });

    test("deve rejeitar idade acima de 80", () => {
        expect(validarJogador("Lucas", 81, 100)).toBe(false);
    });

    test("deve rejeitar pontuação negativa", () => {
        expect(validarJogador("Lucas", 20, -5)).toBe(false);
    });

    test("deve aceitar pontuação igual a zero", () => {
        expect(validarJogador("Lucas", 20, 0)).toBe(true);
    });

    test("deve aceitar idade mínima de 13 anos", () => {
        expect(validarJogador("Lucas", 13, 100)).toBe(true);
    });

    test("deve aceitar idade máxima de 80 anos", () => {
        expect(validarJogador("Lucas", 80, 100)).toBe(true);
    });
});

/* ---------- QUESTÃO 4 ---------- */

describe("calcularEntrega", () => {
    test("deve retornar entrega grátis para compra de 350", () => {
        expect(calcularEntrega(350, 10)).toBe(0);
    });

    test("deve cobrar 10 para distância de 3 km", () => {
        expect(calcularEntrega(100, 3)).toBe(10);
    });

    test("deve calcular entrega para distância de 8 km", () => {
        expect(calcularEntrega(100, 8)).toBe(16);
    });

    test("deve retornar entrega grátis para compra de 300", () => {
        expect(calcularEntrega(300, 5)).toBe(0);
    });

    test("deve cobrar 10 para compra de valor zero", () => {
        expect(calcularEntrega(0, 5)).toBe(10);
    });

    test("deve rejeitar valor de compra negativo", () => {
        expect(() => calcularEntrega(-50, 10))
            .toThrow("Valores inválidos");
    });

    test("deve rejeitar distância negativa", () => {
        expect(() => calcularEntrega(100, -2))
            .toThrow("Valores inválidos");
    });
});

/* ---------- QUESTÃO 5 ---------- */

describe("converterRealParaDolar", () => {
    test("deve converter 100 reais para dólares", () => {
        expect(converterRealParaDolar(100, 5)).toBe(20);
    });

    test("deve converter 250 reais para dólares", () => {
        expect(converterRealParaDolar(250, 5)).toBe(50);
    });

    test("deve aceitar valor zero", () => {
        expect(converterRealParaDolar(0, 5)).toBe(0);
    });

    test("deve converter utilizando cotação 4", () => {
        expect(converterRealParaDolar(100, 4)).toBe(25);
    });

    test("deve rejeitar valor em formato texto", () => {
        expect(() => converterRealParaDolar("100", 5))
            .toThrow("Os valores devem ser numéricos");
    });

    test("deve rejeitar cotação em formato texto", () => {
        expect(() => converterRealParaDolar(100, "5"))
            .toThrow("Os valores devem ser numéricos");
    });

    test("deve rejeitar valor negativo", () => {
        expect(() => converterRealParaDolar(-50, 5))
            .toThrow("Valores inválidos");
    });

    test("deve rejeitar cotação igual a zero", () => {
        expect(() => converterRealParaDolar(100, 0))
            .toThrow("Valores inválidos");
    });
});

/* ---------- QUESTÃO 6 ---------- */

test("deve calcular o valor total corretamente", () => {
    expect(calcularPedido(4, 20)).toBe(80);
});

test("deve retornar zero quando o preço for zero", () => {
    expect(calcularPedido(3, 0)).toBe(0);
});

test("deve lançar erro quando a quantidade for zero", () => {
    expect(() => calcularPedido(0, 10))
        .toThrow("Dados inválidos");
});

test("deve calcular o pedido com preço negativo", () => {
    expect(calcularPedido(2, -5)).toBe(-10);
});

/* ---------- QUESTÃO 7 ---------- */

test("deve aceitar senha com 6 caracteres", () => {
    expect(validarTamanhoSenha("abc123")).toBe(true);
});

test("deve rejeitar senha com 5 caracteres", () => {
    expect(validarTamanhoSenha("abc12")).toBe(false);
});

test("deve rejeitar senha com 12 caracteres", () => {
    expect(validarTamanhoSenha("abc123456789")).toBe(false);
});

test("deve aceitar senha com 10 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567")).toBe(true);
});

test("deve rejeitar senha com 13 caracteres", () => {
    expect(validarTamanhoSenha("abc1234567890")).toBe(false);
});

/* ---------- QUESTÃO 8 ---------- */

test("deve autorizar retirada quando há estoque suficiente", () => {
    expect(verificarDisponibilidade(20, 5))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente", () => {
    expect(verificarDisponibilidade(5, 10))
        .toBe("Estoque insuficiente");
});

test("deve autorizar retirada de toda a quantidade disponível", () => {
    expect(verificarDisponibilidade(10, 10))
        .toBe("Retirada autorizada");
});

test("deve informar estoque insuficiente para quantidade zero", () => {
    expect(verificarDisponibilidade(10, 0))
        .toBe("Estoque insuficiente");
});

test("deve lançar erro para estoque negativo", () => {
    expect(() => verificarDisponibilidade(-5, 2))
        .toThrow("Estoque inválido");
});

test("deve lançar erro para quantidade negativa", () => {
    expect(() => verificarDisponibilidade(10, -3))
        .toThrow("Quantidade inválida");
});

/* ---------- QUESTÃO 9 ---------- */

test("deve calcular a média corretamente", () => {
    expect(calcularMediaFinal(6, 8)).toBe(7);
});

test("deve retornar média máxima", () => {
    expect(calcularMediaFinal(10, 10)).toBe(10);
});

test("deve calcular média com nota zero", () => {
    expect(calcularMediaFinal(0, 8)).toBe(4);
});

test("deve rejeitar nota negativa", () => {
    expect(() => calcularMediaFinal(-2, 8))
        .toThrow("Notas inválidas");
});

test("deve rejeitar nota superior a 10", () => {
    expect(() => calcularMediaFinal(8, 12))
        .toThrow("Notas inválidas");
});