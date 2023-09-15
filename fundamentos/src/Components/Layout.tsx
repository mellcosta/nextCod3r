import Link from "next/link";
import styles from '@/styles/Layout.module.css'

export default function Layout(props: any) {
    return(
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>
                    {props.title ?? 'Exemplo de Css Modularizado'}
                </h1>
                <Link href="/">
                    <span>Voltar</span>
                </Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}