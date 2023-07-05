import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
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

export const Content = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 23px;
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
`;

export const Left = styled.div`
    width: 8em;;
    height: 100vh;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 1em;
`;

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

export const Button2 = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px ridge #FFFFFF;
    border-radius: 0.3em;
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

export const Button3 = styled.button`
    width: auto;
    font-size: 12px;
    height: auto;
    cursor: pointer;
    background: transparent;
    border: 1px ridge transparent;
    border-radius: 0.3em;
    font-weight: bold;
`;

export const Button = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px ridge #FFFFFF;
    border-radius: 0.3em;
`;

export const Button4 = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px ridge #FFFFFF;
    border-radius: 0.3em;
    padding-right: 1.5em;
`;

export const Button5 = styled.button`
    width: auto;
    font-size: 18px;
    height: auto;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px ridge #FFFFFF;
    border-radius: 0.3em;
    margin-left: auto;
`;

export const Button6 = styled.button`
    width: 4em;
    font-size: 18px;
    height: 2em;
    cursor: pointer;
    background: #FFFFFF;
    border: 2px ridge #000000;
    border-radius: 0.3em;
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

export const PopupLoginWrapper = styled.div`
    width: 20em;
    height: 9em;
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
    margin-top: 2em;
`;