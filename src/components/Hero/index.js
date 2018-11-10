import React from 'react'

import Particles from 'react-particles-js'
import particlesConfig from '../../config/particlesjs-config.json'
import styled from 'styled-components'

const HeroBlock = styled('div')`
position: fixed;
top: 0;
`

const TextHero = styled('div')`
display: flex;
justify-content: center;
`

const Hero = () => {
    return (
        <HeroBlock>
            <Particles width="100vw" height="350px" params={particlesConfig} />
        </HeroBlock>
    );
};

export default Hero;