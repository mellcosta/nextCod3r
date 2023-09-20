import Navegador from "./Navegador/page"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      flexWrap: 'wrap',
      padding: '200px 50px'
    }} >
      <Navegador titulo="Estiloso" destino="/Estiloso"/>
      <Navegador titulo="Exemplo" destino="/Exemplo" cor="red" />
      <Navegador titulo="JSX" destino="/JSX" cor="#f1f120" />
      <Navegador titulo="Navegação #01" destino="/Navegacao" cor="#f1f" />
      <Navegador titulo="Navegação #02" destino="/Cliente/song" cor="#098" />
      <Navegador titulo="Estado" destino="/Estado" cor="#570099" />
      <Navegador titulo="Hello API" destino="/api/hello" cor="#ff8635" />
    </div>
  )
}
