import { InputPrice } from '../../../InputPrice'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'

export const ExpenseForm = ({
  formData,
  onChange,
}) => {
  const { spendOnServicesPerMonth } = formData

  return (
    <RowLayout
      align="middle"
      icon="icon/cellphone-notebook.svg"
      title="Services">
      <InputLayout
        label="How much do you spend in services per month?"
        tooltip
        tooltipText="Average is approximately $300 USD>
        <InputPrice
          placeholder="300 USD"
          value={spendOnServicesPerMonth}
          onChange={value => onChange(value, 'spendOnServicesPerMonth')}
        />
      </InputLayout>
    </RowLayout>
  )
}
