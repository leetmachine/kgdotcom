import React from 'react'
import styled from 'styled-components'

const Flex = styled('div')`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
height: 300px;
width: 100%;
`

const H3 = styled('h3')`
display: inline;
margin: 0;
`

const TextHero = () => {
    return (
        <Flex>
            <H3>
            Turning your
            </H3>
            <H3 className="doodleFont"> &nbsp; DOODLES</H3>
            <H3>, into your website.</H3>
      </Flex>
    );
};

export default TextHero;