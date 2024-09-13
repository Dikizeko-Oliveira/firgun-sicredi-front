"use client";

import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

import { TextInput } from "./text-input";
import { Modal } from "./modal";
import { CheckBoxInput } from "./checkbox-input";
import { RadioInput } from "./radio-input";
import { usePage } from "@/contexts/page-context";
import {
    calculateScore,
    formatCpf,
    scrollToTop,
    validateCpf,
} from "@/utils/utils";
import { QuestionType } from "@/data/types/question";
import Loading from "./loading";
import { useAnswers } from "@/contexts/answers-context";
import { SpinnerIcon } from "@/icons/SpinnerIcon";
import { axios_api } from "@/data/api";
import { useDays } from "@/contexts/days-context";

export function Formulary({
    questions_list,
    slug,
}: {
    questions_list: QuestionType[];
    slug: string;
}) {
    const router = useRouter();
    const { page, setPage } = usePage();
    const { answers, setAnswers } = useAnswers();
    const { setDays } = useDays();

    const [cpf, setCpf] = useState("");
    const [hasError, setHasError] = useState(false);
    const [fieldsError, setFieldsError] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [openSubmitModal, setOpenSubmitModal] = useState(false);

    useEffect(() => {
        setQuestions(questions_list);
        setMounted(true);
    }, []);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleCloseSubmitModal = () => {
        setOpenSubmitModal(false);
        setLoading(false);
    };

    const handleNextStep = () => {
        if (!cpf) {
            setHasError(true);
            scrollToTop();
        } else if (!isValid) {
            scrollToTop();
        } else {
            const questionsToAnswerLength = questions
                .filter((item) => item.screen === page)
                .map((question) => question.id).length;

            let questionsAnsweredLength = answers.filter(
                (item) => item.screen === page,
            ).length;

            if (page === 1) {
                questionsAnsweredLength = questionsAnsweredLength + 1;
            }

            if (questionsToAnswerLength > questionsAnsweredLength) {
                setFieldsError(true);
            } else {
                // mais 1 por causa da questao do tipo text(cpf) que nao esta inserida no array pois nao tem pontuacao
                if (questions.length === answers.length + 1) {
                    setOpenSubmitModal(true);
                } else {
                    setFieldsError(false);
                    setPage(page + 1);
                    scrollToTop();
                }
            }
        }
    };

    const handleCleanFormulary = () => {
        setAnswers([]);
        setPage(1);
        setFieldsError(false);
        setHasError(false);
        setIsValid(true);
        setCpf("");
    };

    const handleSubmitForm = async () => {
        try {
            setLoading(true);
            await axios_api.post("/scores", {
                cpf,
                slug,
                score: calculateScore(answers),
            });
            handleCloseSubmitModal();
            router.push("/success");
            handleCleanFormulary();
        } catch (error: any) {
            console.log(error);
            if (
                error?.status === 401 &&
                error?.message === "CPF already responded"
            ) {
                setDays(error?.remaining_days);
                redirect("/already-answered");
            }
            setFieldsError(false);
            handleCloseSubmitModal();
            setOpenModal(true);
        }
    };

    const handlePreviuosStep = () => {
        setPage(page - 1);
        scrollToTop();
    };

    const handleChange = (value: string) => {
        const formattedCpf = formatCpf(value);
        setCpf(formattedCpf);

        // Valida o CPF formatado
        if (formattedCpf.length === 14) {
            setIsValid(validateCpf(formattedCpf));
        } else {
            setIsValid(true); // Evita erro enquanto o usuário ainda está digitando
        }
    };

    if (!mounted) return <Loading />;

    return (
        <>
            <div className="w-[50vw] min-h-72 max-lg:w-full flex flex-col bg-white rounded-xl p-14 max-lg:p-5 mt-40">
                <div className="flex flex-col items-center mb-8">
                    <h1 className="text-primary text-[2.3rem] max-lg:text-[1.5rem] max-lg:mt-[-5px] font-semibold italic mt-[-20px]">
                        Formulário de aprofundamento
                    </h1>
                    <p className="text-base font-medium text-center mt-4 text-third">
                        Queremos conhecer mais sobre seus habitos e
                        conhecimentos para entender melhor o seu perfil, é
                        importante que você responda sozinho.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-6">
                    {questions
                        .filter((item) => item.screen === page)
                        .map((question) =>
                            question.type === "text" ? (
                                <TextInput
                                    key={question.id}
                                    label={question.name}
                                    text={cpf}
                                    setText={handleChange}
                                    hasError={hasError}
                                    isValid={isValid}
                                    length={14}
                                    placeholder="xxx.xxx.xxx-xx"
                                />
                            ) : question.type === "radio" ? (
                                <RadioInput
                                    key={question.id}
                                    question={question}
                                    hasError={fieldsError}
                                />
                            ) : (
                                <CheckBoxInput
                                    key={question.id}
                                    question={question}
                                    hasError={fieldsError}
                                />
                            ),
                        )}

                    <div className="flex flex-col items-center mt-8 gap-5">
                        <div className="w-full flex items-center justify-between">
                            {page > 1 && (
                                <button
                                    onClick={handlePreviuosStep}
                                    className="w-48 h-10 rounded-3xl flex items-center justify-center text-secondary font-medium text-base bg-transparent border border-secondary transition-all hover:bg-button"
                                >
                                    Voltar
                                </button>
                            )}
                            <button
                                onClick={handleNextStep}
                                className="w-48 h-10 ml-auto rounded-3xl flex items-center justify-center text-secondary font-medium text-base bg-button transition-all hover:bg-primary hover:text-white"
                            >
                                {questions.length === answers.length + 1
                                    ? "Enviar"
                                    : "Próximo"}
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            <p>
                                Página {page} de{" "}
                                {Math.ceil(questions.length / 5)}
                            </p>
                            <p className="text-sm text-primary mt-4">
                                <span className="font-bold">Atenção: </span>
                                Corrija os campos demarcados com *
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for erros */}
            {openModal && (
                <Modal handleClose={handleCloseModal} isModalOpen={openModal}>
                    <div className="w-full h-full flex flex-col justify-between gap-5">
                        <h1 className="text-lg text-error font-bold mt-[-8px]">
                            {!fieldsError
                                ? "Erro ao enviar o formulário"
                                : "Campos obrigatórios"}
                        </h1>

                        <div className="w-full flex flex-col gap-5">
                            <p className="text-base font-medium text-error">
                                {!fieldsError
                                    ? "Houve um erro ao enviar o formulário, tente novamente!"
                                    : "Todos os campos são obrigatórios, preencha todos por favor!"}
                            </p>
                        </div>

                        <div className="flex items-center justify-start gap-5 mt-5">
                            <button
                                onClick={handleCloseModal}
                                className="w-32 h-10 rounded-3xl flex items-center justify-center text-secondary font-medium text-base bg-transparent border border-secondary transition-all hover:bg-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Modal confirm submit */}
            {openSubmitModal && (
                <Modal
                    handleClose={handleCloseSubmitModal}
                    isModalOpen={openSubmitModal}
                >
                    <div className="w-full h-full flex flex-col justify-between gap-5">
                        <h1 className="text-lg text-secondary font-bold mt-[-8px]">
                            {!loading
                                ? "Confirmação de envio"
                                : "Aguarde um momento!"}
                        </h1>

                        <div className="w-full flex flex-col gap-5">
                            {!loading ? (
                                <p className="text-base font-medium text-secondary">
                                    Tem certeza que deseja realmente enviar o
                                    formulário?
                                </p>
                            ) : (
                                <div className="w-full flex flex-col items-center">
                                    <SpinnerIcon className="w-14 h-14 text-primary" />
                                    <p className="animate-bounce mt-3">
                                        Carregando...
                                    </p>
                                </div>
                            )}
                        </div>

                        {!loading && (
                            <div className="flex items-center justify-between gap-5 mt-5">
                                <button
                                    onClick={handleCloseSubmitModal}
                                    className="w-32 h-10 rounded-3xl flex items-center justify-center text-secondary font-medium text-base bg-transparent border border-secondary transition-all hover:bg-button"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSubmitForm}
                                    className="w-32 h-10 ml-auto rounded-3xl flex items-center justify-center text-secondary font-medium text-base bg-button transition-all hover:bg-primary hover:text-white"
                                >
                                    Confirmar
                                </button>
                            </div>
                        )}
                    </div>
                </Modal>
            )}
        </>
    );
}
