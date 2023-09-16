import Navegador from "./Navegador/page"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }} >
      <Navegador titulo="Estiloso" destino="/Estiloso"/>
      <Navegador titulo="Exemplo" destino="/Exemplo" cor="red" />
      <Navegador titulo="JSX" destino="/JSX" cor="#f1f120" />
    </div>
  )
}
