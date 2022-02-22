/* eslint-disable no-tabs */
// Core
import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   width: 100%;
   overflow-y: hidden;
   overflow-x: hidden;
   height: 100vh;
`;
export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
	min-height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
	z-index: 50;
`;
export const TaskWrapper = styled.div`
   margin-top: 30px;
`;
export const ContentWrapper = styled.div`

`;
export const Links = styled.div`
   display: flex;
    flex-direction: column;
    font-size: 24px;
    div {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 5px;
        margin: 5px 0;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
            transition: .4s;
        }
    }
`;
export const Output = styled.div`
    width: 300px;
    margin: 0 auto;
`;
export const Response = styled.div`
    margin-top: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
`;


// Accordion


export const Accordion = styled.div`
   max-width: 500px;    
.Accordion-item {
    margin-bottom: 5px;

    /* border: 1px solid #a9bafe; */
}

.Accordion-title {
    display: block;
    padding: 10px 15px;
    position: relative;

    color: #000000;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;

    transition: background .2s ease-out;
    &:hover {
        color: white;
    }
}

.Accordion-title:after {
    content: "";
    display: block;

    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: #ff8080 transparent transparent transparent;

    position: absolute;
    top: 50%;
    right: 15px;

    transform: translateY(-50%);

    &:hover {
        border-color: #fff transparent transparent transparent;
    }
}

.Accordion-title:hover {
    background-color: #ff8080;
}

.Accordion-input {
    width: 0;
    height: 0;

    -webkit-appearance: none;
    appearance: none;

    position: absolute;
}

.Accordion-input:checked ~ .Accordion-title {
    background-color: #ff8080;
}

.Accordion-input:checked ~ .Accordion-title:after {
    border-style: solid;
    border-width: 0 5px 8px 5px;
    border-color: transparent transparent #fff transparent;
}
.Accordion-input:checked ~ .Accordion-title {
    color: #fff;
}

.Accordion-input:checked ~ .Accordion-text {
    display: block;
}

.Accordion-text {
    display: none;
    /* padding: 10px 15px; */

    color: #fff;
    font-size: 14px;
}
`;

export const Image = styled.div`
    position: absolute;
    z-index: -1;
    height: 100%;
    overflow: hidden;
    img {
        width: 100%;
    }
`;

