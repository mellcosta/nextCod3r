import Link from "next/link";
import styles from '../../styles/Navegador.module.css'

export default function Navegador(props:any) {
    return (
        <Link href={String(props.destino)}>
            <div className={styles.navegador} 
                style={{backgroundColor: props.cor ?? 'rgb(53, 160, 248)'}}>
                {props.titulo}
            </div>
        </Link>
    )
}