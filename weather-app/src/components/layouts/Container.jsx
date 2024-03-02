/* eslint-disable react/prop-types */

import { StyledContainer } from '../../styles';

const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
};

export default Container;