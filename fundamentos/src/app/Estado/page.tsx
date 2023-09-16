'use client'

import { useState } from "react";
import Layout from "@/Components/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0)
    
    function incrementar() {
        setNumero(numero + 1)
    }

    return(
        <Layout title="Componente com Estado" >
            <span> {numero} </span>
            <button onClick={incrementar} >Incrementar</button>
        </Layout>
    )
}