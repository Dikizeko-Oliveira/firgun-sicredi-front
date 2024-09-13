export interface AnswerType {
    id: string;
    name: string;
    value: number;
    questionsId: string;
}

export interface QuestionType {
    id: string;
    name: string;
    type: string;
    screen: number;
    answers: AnswerType[];
}
