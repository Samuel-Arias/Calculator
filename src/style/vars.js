import styled from "styled-components"

const vars = {
    color: {
        white: '#FFFFFF',
        black: '#000000',
        lessWhite: '#DDDDDD',
        lessBlack: '#222222'
    }
}

export const ContDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${ ({tema}) => (
        (tema === 'light') ? vars.color.white : '#111111'
    ) };

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Calcu = styled.div`
    width: min-content;
    padding: 15px 10px 18px;
    background-color: ${ ({tema}) => (
        (tema === 'light') ? vars.color.lessBlack : vars.color.white
    ) };
    border-radius: 10px;
`

export const Boton = styled.button`
    border-radius :${
        ({col}) => {
            if (col) return '30px'
            if (!col) return '50%'
        }    
    };
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${
        ({tema}) => (
            (tema === 'light') ? vars.color.white : vars.color.lessBlack
        )
    };
    color: ${
        ({tema}) => (
            (tema === 'light') ? vars.color.black : vars.color.white
        )
    };
    cursor: pointer;
    box-shadow: 5px 5px 10px -3px #000000;

    grid-column: ${
        ({col}) => {
            if (col === '2') return 'span 2'
        }
    };
    
    &:active {
        background-color: ${
            ({tema}) => (
                (tema === 'light') ? '#CCCCCC' : '#111111'
            )
        };
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: default;
    font-size: 1.5rem;
    text-align: ${({ alignEnd }) => (
        alignEnd ?('end') :('start')
    )};

    &::placeholder {
        font-size: 1.5rem;
    }
`

export const ToggleTema = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`