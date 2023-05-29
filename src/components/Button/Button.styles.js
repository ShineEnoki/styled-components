import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: ${(props) => props.variant === 'outline' ? '#fff' : 'green'};
    color: ${props => props.variant === 'outline' ? 'green' : 'white'};
    transition: 0.3s all ease;
    :hover {
        background-color: ${(props) => props.variant === 'outline' ? '#fff' : 'blue'};
    color: ${props => props.variant === 'outline' ? 'blue' : 'white'}; 
    }
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #62db12, #48e620);
    border: none;
`

export const SubmitButton = styled(StyledButton).attrs((props) => ({
    type: 'submit'
}))`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) => 
            props.variant === 'outline' ? '#fff' : 'yellow'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    };

`