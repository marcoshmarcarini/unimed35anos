'use client'
import Image from "next/image"
import styles from "./Fundadores.module.css"
import VideoFundadores from "../VideoFundadores"





export default function Fundadores() {
    return (
        <div className={styles.fundadoresContent}>
            <div className={styles.fundadores} >
                <div className={styles.textosFundadores} >
                    <p className={styles.fundadoresTitulo}>Nossos <span>fundadores</span> que marcaram história na Unimed Sul Capixaba</p>
                    <div className={styles.nomeFundadores}>
                        <ul className={styles.fundadoresLista}>
                            <li>Benjamim de Freitas Pinheiro</li>
                            <li>Carlos Antônio Costa</li>
                            <li>Carlos Roberto Valiate</li>
                            <li>Delmontina Maria Azevedo Serafim</li>
                            <li>Everaldo Pianes Viana</li>
                            <li>Franklin Wilson Novaes</li>
                            <li>Jayme Neves Filho</li>
                            <li>João Antônio Fernandes de Oliveira</li>
                            <li>João Carlos Serafim</li>
                            <li>João Henrique Ventury</li>
                            <li>Jocimar Teixeira de Lima</li>
                            <li>Jorge Luiz Salgado</li>
                            <li>José Geraldo da Cunha Benine</li>
                            <li>José Luiz Machado</li>
                            <li>José Renato Dias Federici</li>
                            <li>José Rogério Mendes Glória</li>
                        </ul>
                        <ul className={styles.fundadoresLista}>
                            <li>Luiz Antônio Silva Tavares</li>
                            <li>Luiz Carlos Santana</li>
                            <li>Luiz Fernando Lunz</li>
                            <li>Luiz Sérgio Ervatti</li>
                            <li>Márcia Borges Vieira de Oliveira</li>
                            <li>Marcos Bastos Barbosa</li>
                            <li>Marcos Bazoni Hatum</li>
                            <li>Noedson Ultramar</li>
                            <li>Paulo José Moreira Machado</li>
                            <li>Paulo Roberto Brunoro Costa</li>
                            <li>René Ghioto Ribieiro</li>
                            <li>Ricardo Paganotte dos Passos</li>
                            <li>Ricardo Pinheiro Lima</li>
                            <li>Rovilson Leite Tavares</li>
                            <li>Sebastião Casotti Vidaurre</li>
                            <li>Sérgio Henrique Cesar</li>
                            <li>Sérgio Luiz Costalonga Seraphim</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.fotoFundadores}>
                    <Image src="/img/foto-fundadores.png" alt="foto-fundadores" width={500} height={500} />
                </div>
                <Image src="/img/bk-35.png" alt="bk-35" className={styles.bk35} width={500} height={500} />
                
            </div>
            <VideoFundadores />
        </div>
    )
}