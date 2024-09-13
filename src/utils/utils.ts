import { AnswersType } from "@/data/types/answers";

export function isValidEmailAddress(address: string) {
    return !address.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

export const removeSufix = (value: string, sufix?: string): string => {
    const result = value.replace(sufix ? sufix : ".xlsx", "");

    return result;
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth scrolling
    });
};

// Formata o CPF
export const formatCpf = (value: string) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número

    // Aplica a formatação do CPF
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return value;
};

export const validateCpf = (cpf: string) => {
    cpf = cpf.replace(/\D/g, ""); // Remove pontos e traços

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos ou é uma sequência repetida (111.111.111-11)
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
};

export function calculateScore(data: AnswersType[]) {
    let sum = 0;

    data.forEach((question) => {
        question.answers.forEach((answer) => {
            sum += parseFloat(answer.value.toString());
        });
    });

    return sum;
}
