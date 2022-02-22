// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentWrapper, TaskWrapper, Response } from '../styles';


export const Lesson18: FC = () => {
    return (
        <TaskWrapper>
            <ContentWrapper>
                <Response>
                    <Outlet />
                </Response>
            </ContentWrapper>
        </TaskWrapper>
    );
};
