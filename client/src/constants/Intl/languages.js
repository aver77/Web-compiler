import { LOCALES } from "./locales";

const currentYear = new Date().getFullYear();

export const languages = {
    [LOCALES.ENGLISH]: {
        ru: "Ru",
        eng: "Eng",
        light: "Light",
        dark: "Dark",
        inputPlaceholder: "Enter code here...",
        programmingLanguages: "Available languages:",
        btnText: "Run",
        outputPlaceholder: "Compiler answer...",
        footerText: `© ${currentYear} NW Project | All Rights Reserved`,
    },
    [LOCALES.RUSSIAN]: {
        ru: "Рус",
        eng: "Анг",
        light: "Светлая",
        dark: "Темная",
        inputPlaceholder: "Введите код программы...",
        programmingLanguages: "Доступные языки:",
        btnText: "Запуск",
        outputPlaceholder: "Ответ компилятора...",
        footerText: `© ${currentYear} NW Project | Все права защищены`,
    },
};
