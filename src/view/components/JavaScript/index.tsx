// Core
import React, { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Accordion } from './styles';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson2 = () => {
    const [ selected, setSelected ] = useState();

    return (
        <Accordion>
            Lesson 2
            <S.Links>
                <Link to = '/lesson2/1'>Task #1</Link>
                <Link to = '/lesson2/2'>Task #2</Link>
                <Link to = '/lesson2/3'>Task #3</Link>
                <Link to = '/lesson2/4'>Task #4</Link>
                <Link to = '/lesson2/5'>Task #5</Link>
                <Link to = '/lesson2/6'>Task #6</Link>
                <Link to = '/lesson2/7'>Task #7</Link>
                <Link to = '/lesson2/8'>Task #8</Link>
                <Link to = '/lesson2/9'>Task #9</Link>
                <Link to = '/lesson2/10'>Task #10</Link>
                <Link to = '/lesson2/11'>Task #11</Link>
                <Link to = '/lesson2/12'>Task #12</Link>
                <Link to = '/lesson2/13'>Task #13</Link>
                <Link to = '/lesson2/14'>Task #14</Link>
            </S.Links>
        </Accordion>
    );
};

export const JavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.LinkWrapper>
                <Link to = '/grid-keyboard'>Grid Keyboard</Link>

                {/* <Link to = '/lesson2'>Lesson #2</Link>
                <Link to = '/lesson3'>Lesson #3</Link>
                <Link to = '/lesson4'>Lesson #4</Link>
                <Link to = '/lesson5'>Lesson #5</Link>
                <Link to = '/lesson6'>Lesson #6</Link>
                <Link to = '/lesson7'>Lesson #7</Link>
                <Link to = '/lesson9'>Lesson #9</Link>
                <Link to = '/lesson10'>Lesson #10</Link>
                <Link to = '/lesson11'>Lesson #11</Link>
                <Link to = '/lesson14'>Lesson #14</Link>
                <Link to = '/lesson15'>Lesson #15</Link>
                <Link to = '/lesson16'>Lesson #16</Link>
                <Link to = '/lesson17'>Lesson #17</Link>
                <Link to = '/lesson18'>Lesson #18</Link>
                <Link to = '/lesson20'>Lesson #20</Link>
                <Link to = '/lesson21'>Lesson #21</Link> */}
            </S.LinkWrapper>
            <S.Output>
                <Outlet />
            </S.Output>
        </S.Container>
    );
};
