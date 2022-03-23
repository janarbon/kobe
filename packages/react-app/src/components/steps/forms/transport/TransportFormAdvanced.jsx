import { Col, InputNumber, Radio, Row, Select, Typography } from 'antd'

import { StyledDivider } from '../../components/StyledDivider'
import { TextAsk } from '../../components/TextAsk'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'
import { SelectLayout } from '../../layouts/SelectLayout'

const { Option } = Select
const { Text } = Typography

const VehicleSection = ({
  formData,
  onChange,
}) => {
  const {
    monthlyKms,
    fuelType,
    averageConsumption,
  } = formData

  return (
    <RowLayout align="middle" icon="icon/car.svg" title="Car">
      <Row style={{ margin: '12px 0 ' }}>
        <Col span={12}>
          <SelectLayout label="Fuel">
            <Select
              placeholder="Type"
              style={{ width: '100%' }}
              size="large"
              value={fuelType}
              onChange={value => onChange(value, 'fuelType')}
            >
              <Option value="Gasolina">Gasoline</Option>
              <Option value="Diesel">Diesel</Option>
// Falta la opcion de auto electrico
            </Select>
          </SelectLayout>
        </Col>
        <Col span={12}>
          <Col span={22}>
            <InputLayout label="Km per month" margin={false}>
              <InputNumber
                min={0}
                placeholder="1.000 kms"
                size="large"
                style={{ width: '100%' }}
                value={monthlyKms}
                onChange={value => onChange(value, 'monthlyKms')}
              />
            </InputLayout>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <InputLayout label="Average fuel consumption of your car">
            <InputNumber
              min={0}
              placeholder="10 kms/ltr"
              size="large"
              style={{ width: '100%' }}
              value={averageConsumption}
              onChange={value => onChange(value, 'averageConsumption')}
            />
          </InputLayout>
        </Col>
      </Row>
    </RowLayout>
  )
}

const AirplaneSection = ({
  formData,
  onChange,
}) => {
  const {
    planeTrips,
    airplaneTripsA,
    airplaneTripsB,
    airplaneTripsC,
  } = formData

  return (
    <RowLayout icon="icon/airplane.svg" title="Airplane">
      <TextAsk text="How many flights of 640 Kms or less you travel per year?" />
      <InputLayout
        label="Flights (count roundtrip as two flights)"
        tooltip
        tooltipText=""
        question={false}>
        <InputNumber
          min={0}
          placeholder="2"
          size="large"
          style={{ width: '100%' }}
          value={planeTrips}
          onChange={value => onChange(value, 'planeTrips')}
        />
      </InputLayout>
      <TextAsk text="How many flights between 640 and 2.410 kms  you travel per year?" />
      <InputLayout
        label="Flights (count roundtrip as two flights)"
        tooltip
        tooltipText=""
        question={false}>
        <InputNumber
          min={0}
          placeholder="4"
          size="large"
          style={{ width: '100%' }}
          value={airplaneTripsA}
          onChange={value => onChange(value, 'airplaneTripsA')}
        />
      </InputLayout>
      <TextAsk text="How many flights between 2.410 and 4.830 kms  you travel per year?" />
      <InputLayout
        label="Flights (count roundtrip as two flights)"
        tooltip
        tooltipText=""
        question={false}>
        <InputNumber
          min={0}
          placeholder="2"
          size="large"
          style={{ width: '100%' }}
          value={airplaneTripsB}
          onChange={value => onChange(value, 'airplaneTripsB')}
        />
      </InputLayout>
      <TextAsk text="How many flights of more than 4.830 kms you travel per year?" />
      <InputLayout
        label="Flights (count roundtrip as two flights)"
        tooltip
        tooltipText=""
        question={false}>
        <InputNumber
          min={0}
          placeholder="2"
          size="large"
          style={{ width: '100%' }}
          value={airplaneTripsC}
          onChange={value => onChange(value, 'airplaneTripsC')}
        />
      </InputLayout>
    </RowLayout>
  )
}

export const TransportFormAdvanced = ({
  formData,
  onChange,
}) => {
  const {
    weeklyBusKms,
    weeklyTaxiKms,
    weeklyTrainKms,
  } = formData

  return (
    <>
      <VehicleSection onChange={onChange} formData={formData} />
      <StyledDivider />
      <RowLayout align="middle" icon="icon/taxi.svg" title="Apps & taxi">
        <InputLayout
          label="Km per week"
          tooltip
          tooltipText=""
          question={false}>
          <InputNumber
            min={0}
            placeholder="100 kms"
            size="large"
            style={{ width: '100%' }}
            value={weeklyTaxiKms}
            onChange={value => onChange(value, 'weeklyTaxiKms')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/bus.svg" title="Public bus">
        <InputLayout label="Km per week">
          <InputNumber
            min={0}
            placeholder="120 kms"
            size="large"
            style={{ width: '100%' }}
            value={weeklyBusKms}
            onChange={value => onChange(value, 'weeklyBusKms')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/metro.svg"
        title="Metro - public train">
        <InputLayout label="Km per week">
          <InputNumber
            min={0}
            placeholder="120 kms"
            size="large"
            style={{ width: '100%' }}
            value={weeklyTrainKms}
            onChange={value => onChange(value, 'weeklyTrainKms')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <AirplaneSection onChange={onChange} formData={formData} />
    </>
  )
}
