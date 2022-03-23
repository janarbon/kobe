import { Col, Row, Switch, Typography } from 'antd'

const { Text } = Typography

/**
  type AdvancedProps = {
    isAdvanced: boolean
    handleAdvanced: (checked: boolean) => void
  }
*/

export const Advanced = ({
  isAdvanced,
  handleAdvanced,
}) => {
  return (
    <Row align="middle" style={{ marginBottom: '10px' }}>
      <Col span={6} style={{ textAlign: 'center' }}>
        <Text>Questions</Text>
      </Col>
      <Col span={5}>
        <Text strong>Simplified</Text>
      </Col>
      <Col span={4}>
        <Switch
          checked={isAdvanced}
          onChange={checked => handleAdvanced(checked)}
        />
      </Col>
      <Col span={9}>
        <Text strong>Advanced</Text>
      </Col>
    </Row>
  )
}
