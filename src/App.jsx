
import './App.css';
//import styled button
import StyledButton, { FancyButton, SubmitButton } from './components/Button/Button'

function App() {

    return (
        <div>
            <button > Button </button>
            <StyledButton > styled button </StyledButton>
            <StyledButton variant='outline'> styled button </StyledButton>
            <FancyButton > Hello </FancyButton>
            <SubmitButton > Submit </SubmitButton>

        </div>
    )
}

export default App
