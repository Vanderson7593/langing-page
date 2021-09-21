import { css } from '@emotion/react'

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 70%;
  }

  body {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom-style: none;
    font-size:14pt;
    font-weight:500;
  }

  button {
    border: none;
    background-color: inherit;
  }

  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator{
    opacity: 1;
    filter: invert(0.8);
  }

  
  select,
  input[type=date],
  input[type=time], {
    color:#263A41;
    font-weight:inherit;
  }

  body,
  select,
  button,
  input,
  textarea {
    font-family: 'Rufina', 'Open Sans', sans-serif;
  }
  
  input:focus,
  textarea:focus,
  button:focus,
  select:focus {
    outline: none;
  }
`
