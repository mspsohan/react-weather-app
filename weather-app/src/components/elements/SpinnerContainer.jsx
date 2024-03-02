import { StyledSpinnerContainer } from '../../styles';

const SpinnerContainer = () => {
    return (
        <StyledSpinnerContainer>
            <div className="loader"></div>
            <span>Loading...</span>
        </StyledSpinnerContainer>
    )
}
export default SpinnerContainer;