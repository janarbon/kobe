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
      <RowLayout align="middle" icon="icon/bed.svg" title="Muebles">
        <InputLayout
          label="¿Cuánto gastas en muebles y electrodomésticos por mes?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="100.000 CLP"
            value={furnitureAppliances}
            onChange={value => onChange(value, 'furnitureAppliances')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/shirt.svg" title="Ropa">
        <InputLayout label="¿Cuánto gastas en ropa por mes?">
          <InputPrice
            placeholder="50.000 CLP"
            value={clothes}
            onChange={value => onChange(value, 'clothes')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/drink.svg" title="Entretención">
        <InputLayout
          label="¿Cuánto gastas en entretenimiento por mes?"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="50.000 CLP"
            value={entertainment}
            onChange={value => onChange(value, 'entertainment')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout align="middle" icon="icon/book.svg" title="Libros y papelería">
        <InputLayout
          label="¿Cuánto gastas en libros y papelería al mes? (Incluye artículos de oficina)"
          tooltip
          tooltipText="">
          <InputPrice
            placeholder="50.000 CLP"
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
      <RowLayout align="middle" icon="icon/soap.svg" title="Aseo personal">
        <InputLayout label="¿Cuánto gastas al mes? (Incluye aseo personal y limpieza)">
          <InputPrice
            placeholder="10.000 CLP"
            value={personalHygiene}
            onChange={value => onChange(value, 'personalHygiene')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/car-repair.svg"
        title="Repuestos vehículo">
        <InputLayout label="¿Cuánto gastas al mes?" tooltip tooltipText="">
          <InputPrice
            placeholder="50.000 CLP"
            value={spareParts}
            onChange={value => onChange(value, 'spareParts')}
          />
        </InputLayout>
      </RowLayout>
      <StyledDivider />
      <RowLayout
        align="middle"
        icon="icon/medical-kit.svg"
        title="Insumos médicos">
        <InputLayout label="¿Cuánto gastas al mes?" tooltip tooltipText="">
          <InputPrice
            placeholder="15.000 CLP"
            value={medicalSupplies}
            onChange={value => onChange(value, 'medicalSupplies')}
          />
        </InputLayout>
      </RowLayout>
    </>
  )
}
