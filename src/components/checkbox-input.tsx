"use client";

import { useAnswers } from "@/contexts/answers-context";
import { AnswerType, QuestionType } from "@/data/types/question";

interface InputProps {
    question: QuestionType;
    hasError: boolean;
}

export function CheckBoxInput({ question, hasError }: InputProps) {
    const { answers, setAnswers } = useAnswers();

    const handleSelectQuestion = (
        question: QuestionType,
        answer: AnswerType,
    ) => {
        const findQuestion = answers.find(
            (quest) =>
                quest.questionsId === question.id &&
                quest.question === question.name,
        );

        if (findQuestion) {
            const ans = findQuestion.answers.find(
                (ans) => ans.name === answer.name && ans.id === answer.id,
            );

            if (ans) {
                const newAns = answers.map((item) => {
                    if (
                        item.questionsId === question.id &&
                        item.question === question.name &&
                        item.type === question.type
                    ) {
                        item.answers = item.answers.filter(
                            (ans) =>
                                ans.id !== answer.id &&
                                ans.name !== answer.name,
                        );
                    }
                    return item;
                });
                setAnswers([...newAns]);
            } else {
                const newAnswers = answers.map((item) => {
                    if (
                        item.questionsId === question.id &&
                        item.question === question.name &&
                        item.type === question.type
                    ) {
                        item.answers = [
                            ...item.answers,
                            {
                                name: answer.name,
                                value: answer.value,
                                id: answer.id,
                                questionsId: question.id,
                            },
                        ];
                    }
                    return item;
                });
                setAnswers([...newAnswers]);
            }
        } else {
            const data = {
                question: question.name,
                type: question.type,
                screen: question.screen,
                questionsId: question.id,
                answers: [answer],
            };

            setAnswers([...answers, data]);
        }
    };

    const isChecked = (question: QuestionType, answer: AnswerType) => {
        return answers.some(
            (ans) =>
                ans.question === question.name &&
                ans.answers?.some((item) => item.name === answer.name),
        );
    };

    const isFilled = (question: QuestionType) => {
        return answers.some(
            (ans) =>
                ans.question === question.name &&
                ans.questionsId === question.id,
        );
    };

    return (
        <div className="flex flex-col mt-1 max-sm:text-sm">
            <span className="font-semibold text-third">
                {question.name}
                <span className="text-red-600">*</span>
            </span>
            <div className="flex flex-wrap gap-x-8 gap-y-5 mt-3">
                {question.answers.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <input
                            id={question.name + item.name}
                            type="checkbox"
                            onChange={() =>
                                handleSelectQuestion(question, item)
                            }
                            checked={isChecked(question, item)}
                            name={question.name}
                            className="w-6 h-6 accent-primary outline-none cursor-pointer"
                        />
                        <label
                            htmlFor={question.name + item.name}
                            className="w-full ms-2 text-base font-medium text-secondary cursor-pointer max-sm:text-sm"
                        >
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
            <span
                className={`mt-1 transition-all duration-500 ${
                    !isFilled(question) && hasError ? "block" : "hidden"
                } text-sm text-red-600`}
            >
                Campo obrigatório
            </span>
        </div>
    );
}
