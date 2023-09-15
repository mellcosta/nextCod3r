export default function Cabecalho(props: { titulo: string | number | boolean }) {
    
    return (
        <div>
            <h1>Fundamentos do Next e React</h1>
            {props.titulo}
        </div>
    )
}