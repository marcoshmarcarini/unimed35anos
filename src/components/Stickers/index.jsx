'use client'
import Image from "next/image"
import styles from "./Stickers.module.css"
import mergeImages from "merge-images"
import { useRef, useState } from "react"
import AvatarEditor from 'react-avatar-editor'


export default function Stickers() {

    const [imagem, setImagem] = useState('')
    const [moldura, setMoldura] = useState('/img/moldura.png')
    const [imagemMesclada, setImagemMesclada] = useState(null)
    const [estilos, setEstilos] = useState('none')
    const ref1 = useRef(null)
    const ref2 = useRef(null)



    const uploadImage = async (uploadEvent) => {
        const foto = uploadEvent.target.files[0]
        const imageUrl = URL.createObjectURL(foto)
        setImagem(imageUrl)
        setEstilos('flex')
    };

    const handleSave = () => {
        if (ref1.current && ref2.current) {
            const canvas1 = ref1.current.getImageScaledToCanvas()
            const canvas2 = ref2.current.getImageScaledToCanvas()

            mergeImages([
                { src: canvas1.toDataURL(), x: 0, y: 0 },
                { src: canvas2.toDataURL(), x: 0, y: 0 },
            ]).then(b64 => setImagemMesclada(b64))
        }
    }


    return (
        <>
            <div className={styles.stickersFiltros} id={`figurinhas`}>
                <div className={styles.stickers}>
                    <div className={styles.stickersTexto}>
                        <p>Clique no link <br /> e adicione nossos <br /> stickers no seu <span>WhatsApp</span></p>
                        <a href="https://sticker.ly/s/AHVCLG" target="_blank">Clique Aqui</a>
                    </div>
                    <div className={styles.stickerImg}>
                        <Image src="/img/sticker.png" alt="sticker" width={500} height={500} />
                    </div>
                </div>
                <div className={styles.filtro}>
                    <p>Acesse também <br /> nossos filtros <br /> no <span>Instagram</span></p>
                    <div className={styles.filtroLinks}>
                        <a href="https://www.instagram.com/ar/420866000458689/" target="_blank">Filtro 1 |
                            <span>35Anos</span></a>
                        <a href="https://www.instagram.com/ar/7324613264274527/" target="_blank">Filtro 2 | <span>Game</span>
                        </a>
                    </div>
                </div>
                <div className={styles.moldura}>
                    <div className={styles.molduraLink}>
                        <p>Baixe também <br /> a nossa moldura <br /> para foto de perfil</p>
                        <a href="/img/moldura.png" download>Clique Aqui</a>
                    </div>
                    <div className={styles.molduraImg}>
                        <Image src="/img/simulacao-moldura.png" alt="Simulação Moldura" width={1000} height={1000} />
                    </div>
                </div>
                <div className={styles.molduraContent}>
                    <p className={styles.molduraTxt}>Insira sua uma foto e crie sua própria moldura personalizada</p>
                    <div className={styles.inputContent}>
                        <label
                            htmlFor="inputUp"
                            className={styles.inputUpLabel}
                        >
                            Upload da Imagem
                        </label>
                        <input
                            type="file"
                            onChange={uploadImage}
                            className={styles.inputUp}
                            id="inputUp"
                        />
                        <img src={imagem} alt="" className={styles.imagemUpfront} style={{ display: estilos }} />
                    </div>
                    <AvatarEditor
                        ref={ref1}
                        image={imagem}
                        width={300}
                        height={300}
                        border={1}
                        onClickSave={handleSave}
                        className={styles.imagemUp}
                    />
                    <AvatarEditor
                        ref={ref2}
                        image={moldura}
                        width={300}
                        height={300}
                        border={1}
                        className={styles.imagemMoldura}
                    />
                    <button onClick={handleSave} className={styles.btnMoldura}>Criar Moldura</button>
                    {imagemMesclada && (
                        <div className={styles.downloadArea}>
                            <img src={imagemMesclada} alt="Imagem Mesclada" />
                            <a
                                href={imagemMesclada}
                                download="imagem_mesclada.png"
                                className={styles.btnDownload}
                            >
                                Download
                            </a>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}