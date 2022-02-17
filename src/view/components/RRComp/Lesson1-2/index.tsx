import React, { FC } from 'react';
import { Response } from './styles';
import { Accordion } from './components/Accordion';
import { News } from './components/News';
import source from './source.json';

const data = [
    {
        question: 'What is your name?',
        answer:   'My name is Anton',
    },
    {
        question: 'What is your Business?',
        answer:   'Fried Chicken',
    },
    {
        question: 'Where are you from?',
        answer:   'Zhashkiv',
    },
];

export const LessonOneTwo: FC = () => {
    return (
        <Response>
            <News
                array = { source }
            />
            <Accordion array = { data } />
        </Response>
    );
};
