import React from 'react'
import styled from 'styled-components'

import Doodle from '../images/marketingDoodles.png'

const Container = styled('div')`
padding: 20px;
`

const MarketingDoodle = () => {
    return (
        <Container>
            <img src={Doodle} width="200px"></img>
        </Container>
    );
};

export default MarketingDoodle;