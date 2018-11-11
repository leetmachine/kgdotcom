import React from 'react'
import styled from 'styled-components'
import { media } from '../../config/styleVars'

import bgImg from '../../images/creampaper.png'

const FlexWrapper = styled('div')`
  position: fixed;
  top: 0;
  height: 330px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bgImg});
  background-attachment: fixed;
`

const Flex = styled('div')`
  display: Flex;
  align-items: center;
  flex-direction: column;

  ${media.tablet`flex-direction: row;`}
`

const MainText = styled('h3')`
  display: inline;
  margin: 0;
  font-size: 1.8rem;

  ${media.tablet`font-size: 2.5rem`}
`

const Doodles = styled(MainText)`
font-family: "Amatic SC", sans-serif;
font-size: 2.5rem;

${media.tablet`font-size: 3.0rem`}
`

const TextHero = () => {
  return (
    <FlexWrapper>
      <Flex>
        <div>
            <MainText>Turning your&nbsp;</MainText>
            <Doodles>DOODLES</Doodles>
            <MainText>,</MainText>
        </div>
        <div>
            <MainText>&nbsp;into your website.</MainText>
        </div>
      </Flex>
    </FlexWrapper>
  )
}

export default TextHero
