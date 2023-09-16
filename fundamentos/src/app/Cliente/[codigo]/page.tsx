'use client'

import Layout from "@/Components/Layout";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
 
export default function ClientePorCodigo() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

    return(
        <Layout title="Navegação Dinâmica" >
            <div> Código = {pathname} {searchParams} </div>
        </Layout>
    )
}