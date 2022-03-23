import { Col, InputNumber, Select } from 'antd'

import { StyledDivider } from '../../components/StyledDivider'
import { InputLayout } from '../../layouts/InputLayout'

const { Option } = Select

import { RowLayout } from '../../layouts/RowLayout'
import { SelectLayout } from '../../layouts/SelectLayout'

const FirstForm = ({
  formData,
  onChange,
}) => {
  const {
    timesEatMeat,
    timesEatFish,
    timesEatProcessedMeat,
    timesEatChickenTurkey,
  } = formData

  return (
    <>
      <RowLayout align="middle" icon="icon/meat.svg" title="Red meat">
        <InputLayout
          label="How many times do you eat red meet per week? (beef, pork, lamb)"
          tooltip
          tooltipText="The average is 5 times a week">
          <InputNumber
            min={0}
            placeholder="2"
            size="large"
            style={{ width: '100%' }}
            value={timesEatMeat}
            onChange={value => onChange(value, 'timesEatMeat')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/chicken.svg" title="Poultry">
        <InputLayout
          label="How many times do you eat poultry per week?"
          tooltip
          tooltipText="The average is 5 times a week">
          <InputNumber
            min={0}
            placeholder="4"
            size="large"
            style={{ width: '100%' }}
            value={timesEatChickenTurkey}
            onChange={value => onChange(value, 'timesEatChickenTurkey')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/fish.svg"
        title="Fish & seafood">
        <InputLayout
          label="How many times do you eat fish and seafood per week?"
          tooltip
          tooltipText="The average is 3 times a week">
          <InputNumber
            min={0}
            placeholder="1"
            size="large"
            style={{ width: '100%' }}
            value={timesEatFish}
            onChange={value => onChange(value, 'timesEatFish')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/sausages.svg"
        title="Cold cuts">
        <InputLayout
          label="How many times do you eat cold cuts per week?"
          tooltip
          tooltipText="The average is 5 times a week">
          <InputNumber
            min={0}
            placeholder="1"
            size="large"
            style={{ width: '100%' }}
            value={timesEatProcessedMeat}
            onChange={value => onChange(value, 'timesEatProcessedMeat')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}

// eslint-disable-next-line max-lines-per-function
export const DietFormAdvanced = ({
  formData,
  onChange,
}) => {
  const {
    timesEatEggs,
    muchEatCereal,
    timesConsumeDairy,
    muchEatFruitVegetables,
    manyConsumeSnacks,
  } = formData

  return (
    <>
      <FirstForm formData={formData} onChange={onChange} />
      <StyledDivider />
      <RowLayout align="middle" icon="icon/eggs.svg" title="Eggs">
        <InputLayout
          label="How many times do you eat eggs per week?"
          tooltip
          tooltipText="The average is 5 times a week">
          <InputNumber
            min={0}
            placeholder="30"
            size="large"
            style={{ width: '100%' }}
            value={timesEatEggs}
            onChange={value => onChange(value, 'timesEatEggs')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/bread.svg" title="Bread & cereals">
        <InputLayout
          label="How many times do you eat bread and cereals per week?"
          tooltip
          tooltipText="The average is 7 times a week">
          <InputNumber
            min={0}
            placeholder="12"
            size="large"
            style={{ width: '100%' }}
            value={muchEatCereal}
            onChange={value => onChange(value, 'muchEatCereal')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/milk.svg" title="Dairy">
        <InputLayout
          label="How many times do you eat dairy per week?"
          tooltip
          tooltipText="The average is 8 times a week">
          <InputNumber
            min={0}
            placeholder="12"
            size="large"
            style={{ width: '100%' }}
            value={timesConsumeDairy}
            onChange={value => onChange(value, 'timesConsumeDairy')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/vegetables.svg"
        title="Fruits & vegetables">
        <InputLayout
          label="¿Cuántas veces consumes por semana?"
          tooltip
          tooltipText="How many times do you eat fruits and vegetables per week?">
          <InputNumber
            min={0}
            placeholder="12"
            size="large"
            style={{ width: '100%' }}
            value={muchEatFruitVegetables}
            onChange={value => onChange(value, 'muchEatFruitVegetables')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/snacks.svg"
        title="Snacks, softdrinks & others">
        <InputLayout
          label="How many times do you eatsnacks, softdrinks and others per week?"
          tooltip
          tooltipText="The average is 12 times a week">
          <InputNumber
            min={0}
            placeholder="12"
            size="large"
            style={{ width: '100%' }}
            value={manyConsumeSnacks}
            onChange={value => onChange(value, 'manyConsumeSnacks')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}
