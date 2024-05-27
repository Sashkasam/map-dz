/* eslint-disable no-undef */
import ErrorRepository from "../app";

const newError  = new ErrorRepository();

newError.errors.set(400, 'Bad request');
newError.errors.set(500, 'Internal Server Error ');

test ('Должен вернуть расшифровку ошибки', () => {
    expect(newError.translate(400)).toBe('Bad request');
});

test ('Должны получить ошибку при вводе не существующего кода', () => {
    expect(newError.translate(401)).toBe('Unknown error');
});