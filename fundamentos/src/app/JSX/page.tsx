export default function Jsx(){
    const titulo = <h1>JSX é um conceito central</h1>

    function subtitulo() {
        return <h2> {'muito legal'.toUpperCase()} </h2>
    }

    var a = 2
    var b = 10

    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Melissa'})} 
            </p>

            <p>
                Idade: {a * b}
            </p>
        </div>
    )
}