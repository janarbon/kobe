import { Col, Image, Row, Typography } from 'antd'

const { Title, Text } = Typography

import styled from 'styled-components'

import { device } from '../../../styles/theme'

const StyledBody = styled.div`
  box-sizing: border-box !important;
  background-color: #33732f;
  border-radius: 5px;
  padding: 38px;
  min-height: 450px;
  @media ${device.sm} {
    min-height: 470px;
  }
`
const StyledTitle = styled(Title)`
  color: #ffffff !important;
  @media ${device.xl} {
    font-size: 36px !important;
    line-height: 44px;
  }
`

const StyledText = styled(Text)`
  color: #ffffff !important;
  @media ${device.xl} {
    font-size: 18px !important;
    line-height: 30px;
  }
`
/**
  type InformationMock = {
    id: string
    icon: string
    title: string
    text: TextMock[]
  }

  type TextMock = {
    id: string
    content: string
  }
*/

const dataMock = [
  {
    id: '1',
    icon: 'icon/bicycle.svg',
    title: 'Did you know...',
    text: [
      {
        id: '1',
        content:
          '... that switching from cars to bikes cuts commuting emissions by 67%?',
      },
    ],
  },
  {
    id: '2',
    icon: 'icon/light.svg',
    title: 'Did you know...',
    text: [
      {
        id: '1',
        content: '... your emissions depend on the electric grid of your country?',
      },
      {
        id: '2',
        content:
          'But there is still much you can do to help. Start by using efficient light bulbs, they need 90% less electricity to produce the same light.',
      },
      {
        id: '3',
        content: '',
      },
    ],
  },
  {
    id: '3',
    icon: 'icon/food.svg',
    title: 'Did you know...',
    text: [
      {
        id: '1',
        content: '... that if everyone chose to go vegan, global farmland use could be reduced by 75%.',
      },
      {
        id: '2',
        content:
          'It would also lessen the amount of wild land lost to agriculture. How about vegan mondays?',
      },
    ],
  },
  {
    id: '4',
    icon: 'icon/eco.svg',
    title: 'Did you know...',
    text: [
      {
        id: '1',
        content:
          '... that the way you consume directly affects your CO2 footprint?',
      },
      {
        id: '2',
        content:
          'First, reduce your consumption, then reuse and recycle everything you can. Try to buy ecological brands to fuel a greener economy.',
      },
    ],
  },
  {
    id: '5',
    icon: 'icon/message.svg',
    title: 'Did you know...',
    text: [
      {
        id: '1',
        content:
          '... that working remotely helps reduce CO2 emissions?',
      },
      {
        id: '2',
        content: 'This is because you do not use means of transport, and others.',
      },
    ],
  },
]

/**
  type InformationItemsProps = {
    data: InformationMock
  }
*/

const InformationItems = ({ data }) => {
  return (
    <Row justify="start" gutter={[0, 16]}>
      {data.text.map(item => {
        return (
          <Col key={item.id}>
            <StyledText>{item.content}</StyledText>
          </Col>
        )
      })}
    </Row>
  )
}

/**
  type InformationProps = {
    index?: number
  }
*/

export const Information = ({ index = 0 }) => {
  const data = dataMock[index]

  return (
    <StyledBody>
      <Row justify="center">
        <Col>
          <Image src={data.icon} preview={false} />
        </Col>
      </Row>
      <Row style={{ margin: '12px 0' }}>
        <Col>
          <StyledTitle>{data.title}</StyledTitle>
        </Col>
      </Row>
      <InformationItems data={data} />
    </StyledBody>
  )
}
