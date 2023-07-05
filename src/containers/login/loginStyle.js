import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 23px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
`;

export const PopupLoginWrapper = styled.div`
    width: 12em;
    height: 15em;
    background: #BBDAFF73;
    border-radius: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 2em;
    padding-right: 2em;
    justify-content: flex-start;
    padding-top: 1em;
    padding-bottom: 1em;
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    font-weight: ${props => props.fontWeight};
    padding-bottom: ${props => props.paddingBottom}em;
    padding-top: ${props => props.paddingTop}em;
    width: ${props => props.width};
    align-self: ${props => props.alignSelf};
`;

export const Row = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    height: 2em;
    border-radius: 0.3em;
    border: 1px ridge #FFFFFF;
    outline: none;
    background: #FFFFFF;
`;

export const Button = styled.button`
    width: 12em;
    margin-top: 1em;
    font-size: 18px;
    height: 2.2em;
    cursor: pointer;
    background: #0366FF;
    border: 1px ridge #0366FF;
    border-radius: 0.3em;
    outline: none;
    align-self: center;
`;

export const Blank = styled.div`
    height: ${props => props.height}em;
    width: ${props => props.width};
`;

export const Button2 = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px ridge #FFFFFF;
    border-radius: 0.3em;
    margin-bottom: 5em;
    margin-right: auto;
`;

export const Button3 = styled.button`
    width: auto;
    font-size: 12px;
    height: auto;
    cursor: pointer;
    background: transparent;
    border: 1px ridge transparent;
    border-radius: 0.3em;
    text-align: left;
`;

export const Button4 = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: transparent;
    border: 1px ridge transparent;
    border-radius: 0.3em;
`;

export const Header = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;
