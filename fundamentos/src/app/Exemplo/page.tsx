import Layout from '@/Components/Layout'
import '../../Components/Cabecalho'
import Cabecalho from '../../Components/Cabecalho'

export default function Exemplo () {
    return (
        <Layout title="Exemplo de Componentes">
            <Cabecalho titulo="Next e React" />
            <Cabecalho titulo="Aprenda na Prática" />
        </Layout>
    )
}