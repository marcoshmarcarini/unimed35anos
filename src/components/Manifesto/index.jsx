import Image from "next/image"
import styles from "./Manifesto.module.css"


export default function Manifesto() {
    return (
        <>
            <div className={styles.manifesto}>
                <div className={styles.manifestoBk}>
                    <Image src="/img/bk-manifesto.png" alt="bk-manifesto" width={500} height={500}/>
                </div>
                <div className={styles.manifestoContent}>
                    <div className={styles.manifestoImg}>
                        <Image src="/img/img-manifesto.png" alt="img-manifesto" width={500} height={500}/>
                    </div>
                    <div className={styles.texto}>
                        <h3 className={styles.titulo}>Manifesto 35 anos</h3>
                        <div className={styles.manifestoTexto}>
                            <p>
                                Nós somos a Unimed Sul Capixaba.
                            </p>
                            <p>
                                Somos o reflexo de uma história escrita com cuidado. Desde o
                                primeiro dia, nossa missão foi proporcionar a todos a oportunidade
                                de viverem suas vidas ao máximo, com saúde.
                            </p>
                            <p>
                                Juntos, atravessamos tempos difíceis e celebramos cada momento
                                de alegria. A jornada que compartilhamos é marcada pela confiança,
                                pelo respeito e pela dedicação em cuidar uns dos outros.
                            </p>
                            <p>
                                Somos mais que uma cooperativa de saúde; somos uma comunidade
                                unida pelo bem-estar e pela qualidade de vida.
                            </p>
                            <p>
                                Por isso, reafirmamos: nosso compromisso é de estar ao seu lado,
                                oferecendo cuidados médicos de excelência e promovendo a prevenção
                                para que você possa desfrutar plenamente dos momentos mais preciosos
                                da vida.
                            </p>
                            <p>
                                Para nós, cuidar de você é um presente hoje, amanhã e pelos próximos <strong>35 anos</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}