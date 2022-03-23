import { Col, InputNumber, Row, Select } from 'antd'

import { StyledDivider } from '../../components/StyledDivider'
import { TextAsk } from '../../components/TextAsk'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'
import { SelectLayout } from '../../layouts/SelectLayout'

const { Option } = Select

// eslint-disable-next-line max-lines-per-function
export const TransportForm = ({
  formData,
  onChange,
}) => {
  const {
    monthlyKms,
    fuelType,
    weeklyBusKms,
    planeTrips,
    airplaneTrips,
  } = formData

  return (
    <>
      <RowLayout align="middle" icon="icon/car.svg" title="Car">
        <Row>
          <Col span={12}>
            <SelectLayout label="Fuel">
              <Select
                placeholder="Type"
                style={{ width: '100%' }}
                size="large"
                value={fuelType}
                onChange={value => onChange(value, 'fuelType')}
              >
                <Option value="1">Gasoline</Option>
                <Option value="2">Diesel</Option>
                <Option value="3">Electric</Option>
              </Select>
            </SelectLayout>
          </Col>
          <Col span={12}>
            <Col span={22}>
              <InputLayout label="Km per month" margin={false}>
                <InputNumber
                  min={0}
                  placeholder="1000 kms"
                  size="large"
                  style={{ width: '100%' }}
                  value={monthlyKms}
                  onChange={value => onChange(value, 'monthlyKms')}
                />
              </InputLayout>
            </Col>
          </Col>
        </Row>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/bus.svg" title="Public transport">
        <InputLayout label="Km per week ">
          <InputNumber
            min={0}
            placeholder="100 kms"
            size="large"
            style={{ width: '100%' }}
            value={weeklyBusKms}
            onChange={value => onChange(value, 'weeklyBusKms')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        style={{ marginBottom: '20px' }}
        icon="icon/airplane.svg"
        title="Airplane">
        <TextAsk
          text="How many short flights per year?"
          advanced
          endText="(Less than 4 hrs.)"
        />
        <InputLayout label="Flights (count roundtrip as two flights)">
          <Col span={12}>
            <InputNumber
              min={0}
              placeholder="4"
              size="large"
              style={{ width: '100%' }}
              value={planeTrips}
              onChange={value => onChange(value, 'planeTrips')}
            />
          </Col>
        </InputLayout>

        <TextAsk
          text="How many long flights per year?"
          advanced
          endText="(More than 4 hrs.)"
        />
        <InputLayout label="Flights (count roundtrip as two flights)">
          <Col span={12}>
            <InputNumber
              min={0}
              placeholder="4"
              size="large"
              style={{ width: '100%' }}
              value={airplaneTrips}
              onChange={value => onChange(value, 'airplaneTrips')}
            />
          </Col>
        </InputLayout>
      </RowLayout>
    </>
  )
}
