import { InputPrice } from '../../../InputPrice'
import { InputLayout } from '../../layouts/InputLayout'
import { RowLayout } from '../../layouts/RowLayout'

export const PropertyForm = ({
  formData,
  onChange,
}) => {
  const { monthlySpendOnGoods } = formData

  return (
    <RowLayout align="middle" icon="icon/shopping-cart.svg" title="Goods">
      <InputLayout
        label="How much do you spend in goods approximately per month?"
        tooltip
        tooltipText="">
        <InputPrice
          placeholder="200 USD"
          value={monthlySpendOnGoods}
          onChange={value => onChange(value, 'monthlySpendOnGoods')}
        />
      </InputLayout>
    </RowLayout>
  )
}
