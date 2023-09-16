import Layout from "@/Components/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo() {
        const router = useRouter()

    return(
        <Layout title="Navegação Dinâmica" >
            <div> Código = {router.query.codigo} </div>
        </Layout>
    )
}