import { InputPrice } from '../../../InputPrice'
import { StyledDivider } from '../../components/StyledDivider'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'

export const ExpenceFormFirst = ({
  formData,
  onChange,
}) => {
  const {
    health,
    information,
    doctor,
    autoService,
  } = formData

  return (
    <>
      <RowLayout align="middle" icon="icon/ambulance.svg" title="Health">
        <InputLayout
          label="How much do you spend in heatlh per month (include insurances)?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="200 USD"
            value={health}
            onChange={value => onChange(value, 'health')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/cellphone-notebook.svg"
        title="Phone & internet">
        <InputLayout
          label="How much do you spend in phone and internet bills per month?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="100 USD"
            value={information}
            onChange={value => onChange(value, 'information')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/medical-kit.svg"
        title="Medical appointments">
        <InputLayout label="How much do you spend in medical appointments per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="60 USD"
            value={doctor}
            onChange={value => onChange(value, 'doctor')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/car-repair.svg"
        title="Mechanics">
        <InputLayout label="How much do you spend in mechanics per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="50 USD"
            value={autoService}
            onChange={value => onChange(value, 'autoService')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}

export const ExpenseFormAdvanced = ({
  formData,
  onChange,
}) => {
  const {
    financialServices,
    homeMaintenance,
    donations,
    otherServices,
  } = formData

  return (
    <>
      <ExpenceFormFirst formData={formData} onChange={onChange} />
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/financial-card.svg"
        title="Financials services">
        <InputLayout label="How much do you spend in financial services per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="100 USD"
            value={financialServices}
            onChange={value => onChange(value, 'financialServices')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/roller.svg" title="Home maintenance">
        <InputLayout label="How much do you spend in home maintenance per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="60 USD"
            value={homeMaintenance}
            onChange={value => onChange(value, 'homeMaintenance')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/handshake.svg" title="Donations">
        <InputLayout label="How much do you spend in donations per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="50 USD"
            value={donations}
            onChange={value => onChange(value, 'donations')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/headset.svg" title="Others">
        <InputLayout label="How much do you spend in other services per month?" tooltip tooltipText="">
          <InputPrice
            placeholder="50 USD"
            value={otherServices}
            onChange={value => onChange(value, 'otherServices')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}
