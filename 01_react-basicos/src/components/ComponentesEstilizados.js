import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components'

export default function ComponentesEstilizados(props) {

    let mainColor = '#db7093'
    let mainAlphaColor80 = '#db709380'

    const transition = (time) => `all ${time}s ease-out`

    const anim = keyframes`
        0% {
            oppacity: 0;
        }
        100%{
            oppacity: 1;
        }
    `;

    const MyH3 = styled.h3`
        padding : 3rem;
        text-align : center;
        color : ${(props) => props.col};
        color : ${({ col }) => col};
        color : ${({ col }) => col || `#000`};
        background-color : ${mainColor};
        transition : ${transition('1')};
        animation : ${anim} 5s ease-out;

        ${props => props.isButton && css` // css sirve para poder concatenar aun mas propiedades en los styled components
            margin: auto;
            max-width: 50%;
            border-radious: 0.25rem;
            cursor: pointer;
        `}

        &:hover{
            background-color : ${mainAlphaColor80};
        }

    `;

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color : ${({ theme }) => theme.color};
        background-color : ${({ theme }) => theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyles = createGlobalStyle`
        h2{
            color:blue;
            text-transform: uppercase;
        }
    `;

    const light = {
        color: '#222',
        bgColor: '#DDD'
    }

    const dark = {
        color: '#DDD',
        bgColor: '#222'
    }

    return (
        <>
            <GlobalStyles />
            <h2>Styled components</h2>
            <MyH3>Hola soy un h3 estilizado con styled components</MyH3>
            <MyH3 col='#61dafb'>Hola soy un h3 con otro color</MyH3>
            <MyH3 isButton={true}>Hola soy un h3 como boton</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
                <Box>Soy una caja dark</Box>
            </ThemeProvider>
        </>
    )
}