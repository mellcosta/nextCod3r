import Link from "next/link";
import styles from '@/styles/Layout.module.css'

export default function Layout(props: any) {
    return(
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>
                 {props.title ?? 'Um texto opcional'}
                </h1>
                <Link href="/">
                    <button>Voltar</button> 
                </Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}