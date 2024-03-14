import { Cabecalho as CabecalhoEstilo } from './Cabecalho'

type Props = {
  children: string
}

const Cabecalho = (props: Props) => (
  <CabecalhoEstilo>
    <h1>{props.children}</h1>
  </CabecalhoEstilo>
)

export default Cabecalho
