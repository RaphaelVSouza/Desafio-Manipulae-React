import { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import * as S from './styles'

export type TextFieldProps = {
  name: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ name, type = 'text', ...rest }: TextFieldProps) => {
  const [field, meta] = useField(name)

  return (
    <>
      <S.Input type={type} {...rest} {...field} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  )
}

export default TextField
