import { atom } from "jotai";

const surveyAnswersAtom = atom<any>(0);
const languageAtom = atom<any>("en");

export { surveyAnswersAtom, languageAtom };