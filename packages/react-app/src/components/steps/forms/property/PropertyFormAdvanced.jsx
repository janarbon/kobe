import { InputPrice } from '../../../InputPrice'
import { StyledDivider } from '../../components/StyledDivider'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'

export const PropertyFormFirst = ({
  formData,
  onChange,
}) => {
  const {
    furnitureAppliances,
    clothes,
    entertainment,
    paperOffice,
  } = formData

  return (
    <>
      <RowLayout align="middle" icon="icon/bed.svg" title="Furniture">
        <InputLayout
          label="How much do you spend in furniture and home appliances per month?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="200 USD"
            value={furnitureAppliances}
            onChange={value => onChange(value, 'furnitureAppliances')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/shirt.svg" title="Clothes">
        <InputLayout label="How much do you spend in clothes per month?">
          <InputPrice
            placeholder="100 USD"
            value={clothes}
            onChange={value => onChange(value, 'clothes')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/drink.svg" title="Entertainment">
        <InputLayout
          label="How much do you spend in entertainment per month?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="100 USD"
            value={entertainment}
            onChange={value => onChange(value, 'entertainment')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/book.svg" title="Books & papers">
        <InputLayout
          label="How much do you spend in books and papers per month? (including office goods)"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="50 USD"
            value={paperOffice}
            onChange={value => onChange(value, 'paperOffice')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}

export const PropertyFormAdvanced = ({
  formData,
  onChange,
}) => {
  const {
    personalHygiene,
    spareParts,
    medicalSupplies,
  } = formData

  return (
    <>
      <PropertyFormFirst formData={formData} onChange={onChange} />
      <StyledDivider />
      <RowLayout align="middle" icon="icon/soap.svg" title="Personal care">
        <InputLayout label="How much do you spend in personal care per month?">
          <InputPrice
            placeholder="50 USD"
            value={personalHygiene}
            onChange={value => onChange(value, 'personalHygiene')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/car-repair.svg"
        title="Car">
        <InputLayout label="How much do you spend car replacement parts per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="100 USD"
            value={spareParts}
            onChange={value => onChange(value, 'spareParts')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/medical-kit.svg"
        title="Medical supplies">
        <InputLayout label="How much do you spend in medical supplies per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="40 USD"
            value={medicalSupplies}
            onChange={value => onChange(value, 'medicalSupplies')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}
