import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.marcaUnimed}>
                <div className={styles.bk35Rodape}>
                    <Image src="/img/bk-marca.png" alt="bk35Rodape" width={500} height={500} />
                </div>
                <div className={styles.marca}>
                    <Image src="/img/logo-35.png" alt="logo-35" width={500} height={500} />
                    <div className={styles.marcaTexto}>
                        <p>Cuidar de você<br />é um <span>presente</span></p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Central de Vendas: <a href="tel:+552821016206">(28) 2101-6206</a></p>
                <p>Copyrights, 2024. Unimed Sul Capixaba – Todos os direitos reservados.</p>
                <Image src="/img/somos-todos-coop.png" alt="somos-todos-coop" width={500} height={500} />
                <Image src="/img/ans.png" alt="ans" width={500} height={500} />
            </div>
        </>
    )
}