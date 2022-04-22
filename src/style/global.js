import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
//Fonts
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

//Reset
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

//variable
:root {
//Colors
--color-primary:        #008238;
--color-second:         #FF6100;
--color-third:          #FFAF81;
--color-fourth:         #ffffff;

--font-color-primary:   #231d1e;
}

//General
html, body{
    height: 100%;
    overflow-x: hidden;

    font-family: 'Poppins', sans-serif;
    letter-spacing: -0.03em;
}

.bg__primary{
    background-color: var(--color-primary);
}
`;
