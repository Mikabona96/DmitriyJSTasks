// Core
import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-2'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-2'>Lesson 2
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson2/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/4');
                            } }>Task #4
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/5');
                            } }>Task #5
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/6');
                            } }>Task #6
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/7');
                            } }>Task #7
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/8');
                            } }>Task #8
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/9');
                            } }>Task #9
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/10');
                            } }>Task #10
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/11');
                            } }>Task #11
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/12');
                            } }>Task #12
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/13');
                            } }>Task #13
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson2/14');
                            } }>Task #14
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson3 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-3'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-3'>Lesson 3
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson3/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/4');
                            } }>Task #4
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/5');
                            } }>Task #5
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/6');
                            } }>Task #6
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/7');
                            } }>Task #7
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson3/8');
                            } }>Task #8
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson4 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-4'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-4'>Lesson 4
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson4/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson4/2');
                            } }>Task #2
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson5 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-5'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-5'>Lesson 5
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson5/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson5/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson5/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson5/4');
                            } }>Task #4
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson6 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-6'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-6'>Lesson 6
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson6/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson6/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson6/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson6/4');
                            } }>Task #4
                            </div>

                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson7 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-7'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-7'>Lesson 7
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson7/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson7/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson7/3');
                            } }>Task #3
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson9 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-9'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-9'>Lesson 9
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson9/1');
                            } }>Task #1
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson10 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-10'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-10'>Lesson 10
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson10/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson10/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson10/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson10/4');
                            } }>Task #4
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson11 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-11'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-11'>Lesson 11
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson11/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson11/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson11/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson11/4');
                            } }>Task #4
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson14 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-14'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-14'>Lesson 14
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson14/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson14/2');
                            } }>Task #2
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson15 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-15'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-15'>Lesson 15
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson/15/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson/15/2');
                            } }>Task #2
                            </div>

                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson16 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-16'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-16'>Lesson 16
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson16/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson16/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson16/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson16/4');
                            } }>Task #4
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson17 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-17'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-17'>Lesson 17
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson17/1');
                            } }>Task #1
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson18 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-18'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-18'>Lesson 18
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson18/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson18/2');
                            } }>Task #2
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson20 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-20'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-20'>Lesson 20
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson20/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson20/2');
                            } }>Task #2
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Lesson21 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-21'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-21'>Lesson 21
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/lesson21/1');
                            } }>Task #1
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson21/2');
                            } }>Task #2
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson21/3');
                            } }>Task #3
                            </div>
                            <div onClick = { () => {
                                navigate('/lesson21/4');
                            } }>Task #4
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};
const Grid = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Accordion>
                <div className = 'Accordion-item'>
                    <input
                        className = 'Accordion-input'
                        id = 'Accordion-grid'
                        type = 'checkbox'
                    />
                    <label
                        className = 'Accordion-title'
                        htmlFor = 'Accordion-grid'>Grid
                    </label>
                    <div className = 'Accordion-text'>
                        <S.Links>
                            <div onClick = { () => {
                                navigate('/grid-keyboard');
                            } }>Grid Keyboard
                            </div>
                        </S.Links>
                    </div>
                </div>
            </Accordion>
        </div>
    );
};

export const JavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Image>
                <img
                    alt = 'Js'
                    src = 'https://miro.medium.com/max/2400/1*uZ094Kxwv_qLih3tn9AZ6Q.jpeg'
                />
            </S.Image>
            <S.LinkWrapper>
                <Grid />
                <Lesson2 />
                <Lesson3 />
                <Lesson4 />
                <Lesson5 />
                <Lesson6 />
                <Lesson7 />
                <Lesson9 />
                <Lesson10 />
                <Lesson11 />
                <Lesson14 />
                <Lesson15 />
                <Lesson16 />
                <Lesson17 />
                <Lesson18 />
                <Lesson20 />
                <Lesson21 />
            </S.LinkWrapper>
            <S.Output>
                <Outlet />
            </S.Output>
        </S.Container>
    );
};
