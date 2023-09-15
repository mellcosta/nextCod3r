import styles from './Estiloso.module.css'

import Layout from '@/Components/Layout'

export default function Estiloso() {
    return(
        <Layout>
            <div className={styles.roxo}>
                <h1>Estilo usando module.css</h1>
            </div>
        </Layout>
    )
}