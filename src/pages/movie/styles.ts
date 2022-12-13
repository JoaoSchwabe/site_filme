import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
    nav h1 {
        text-align: center;
    }
`;

export const Container = styled.div`
    text-align: center;
`;

export const LinkButton = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
        transform: scale(1.1);
    }
`;
export const ImgMovie = styled.img`
    width: 20%;
    margin: 0 40%;
`;

export const MovieDesc = styled.div`
    text-align: justify;
`;

export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 30%;
    h4 {
        font-size: 24px;
    }
    p {
        text-indent: 30px;
    }
`;
