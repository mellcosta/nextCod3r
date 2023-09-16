import Navegador from "./Navegador/page"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
    }} >
      <Navegador titulo="Estiloso" destino="/Estiloso"/>
      <Navegador titulo="Exemplo" destino="/Exemplo" cor="red" />
      <Navegador titulo="JSX" destino="/JSX" cor="#f1f120" />
      <Navegador titulo="Navegação #01" destino="/Navegacao" cor="#f1f" />
      <Navegador titulo="Navegação #02" destino="/Cliente/123" cor="#098" />
    </div>
  )
}
