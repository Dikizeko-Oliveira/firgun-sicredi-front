interface AnswerType {
    id: string;
    name: string;
    value: number;
    questionsId: string;
}

export interface AnswersType {
    question: string;
    type: string;
    screen: number;
    questionsId: string;
    answers: AnswerType[];
}
