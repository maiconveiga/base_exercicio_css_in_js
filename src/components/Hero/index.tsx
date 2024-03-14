import { Formulario, FormularioDiv, FormularioHeroTitulo } from './Hero'

type Props = {
  children: string
}

const Hero = (props: Props) => (
  <Formulario>
    <FormularioDiv>
      <FormularioHeroTitulo>{props.children}</FormularioHeroTitulo>
    </FormularioDiv>
  </Formulario>
)

export default Hero
