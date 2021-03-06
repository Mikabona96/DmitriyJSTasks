/* eslint-disable max-len */
import React, { FC } from 'react';

class Stringer {
    reverse(str: string) {
        return str.split('').reverse()
            .join('');
    }

    uppercaseFirst(str: string) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    uppercaseAll(str: string) {
        return str.toUpperCase();
    }
}
const stringer = new Stringer();

export const Task4: FC = () => {
    console.log(stringer.reverse('good morning!')); // !gninrom doog
    console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
    console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

    return (
        <div>
            <h1>Задача 4.</h1>
            <div>
                * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
                *
                * - reverse(string) — возвращает строку в перевернутом виде;
                * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
                * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript.
                */
            </div>
        </div>
    );
};
