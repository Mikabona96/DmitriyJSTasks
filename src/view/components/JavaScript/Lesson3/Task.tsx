import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson3/Task1';
import { Task2 } from '../Lesson3/Task2';
import { Task3 } from '../Lesson3/Task3';
import { Task4 } from '../Lesson3/Task4';
import { Task5 } from '../Lesson3/Task5';
import { Task6 } from '../Lesson3/Task6';
import { Task7 } from '../Lesson3/Task7';
import { Task8 } from '../Lesson3/Task8';


export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/lesson3/1':
            return <Task1 />;
        case '/lesson3/2':
            return <Task2 />;
        case '/lesson3/3':
            return <Task3 />;
        case '/lesson3/4':
            return <Task4 />;
        case '/lesson3/5':
            return <Task5 />;
        case '/lesson3/6':
            return <Task6 />;
        case '/lesson3/7':
            return <Task7 />;
        case '/lesson3/8':
            return <Task8 />;
        default:
            return <div>Nothing....</div>;
    }
};
