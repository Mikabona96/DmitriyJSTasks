import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Task1 } from '../Lesson7/Task1';
import { Task2 } from '../Lesson7/Task2';
import { Task3 } from '../Lesson7/Task3';

export const Task: FC = () => {
    const location = useLocation();

    switch (location.pathname) {
        case '/lesson7/1':
            return <Task1 />;
        case '/lesson7/2':
            return <Task2 />;
        case '/lesson7/3':
            return <Task3 />;
        default:
            return <div>Nothing....</div>;
    }
};
