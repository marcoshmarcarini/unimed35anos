import Image from "next/image"
import styles from "./Diretoria.module.css"

export default function Diretoria() {
    return (
        <>
            <div className={styles.diretoria}>
                <Image src="/img/35.png" alt="35 anos" className={styles.uni35AnosOutlineEsquerda} width={1000} height={1000} />
                <p className={styles.diretoriaTituloContent}>
                    <span>Diretoria</span> e <span>Conselhos</span> 
                    <br /> 
                    que passaram pela Unimed.
                </p>
                <div className={styles.diretoriaExecutivaContent}>
                    {/* Diretoria Executiva 1989-1994*/}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 1989-1994</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Paulo José Moreira Machado - <span>Diretor-presidente</span></li>
                                <li>José Geraldo da Cunha Benine - <span>Vice-presidente</span></li>
                                <li>Sebastião Casotti Vidaurre - <span>Superintendente</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Carlos Roberto Valiate</li>
                                <li>José Renato Dias Federici</li>
                                <li>João Antônio F. de Oliveira</li>
                                <li>Rovilson Leite Tavares</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Marcos Bazoni Hatum</li>
                                <li>Luiz Fernando Lunz</li>
                                <li>Paulo Roberto Brunoro Costa</li>
                                <li>José Rogério Mendes Glória</li>
                                <li>José Luiz Machado</li>
                                <li>João Henrique Ventury</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 1994-1998 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 1994-1998</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Paulo José Moreira Machado - <span>Diretor-presidente</span></li>
                                <li>Sérgio Damião Sant'Anna Moraes - <span>Vice-presidente</span> <br /> <strong>(Até agosto de
                                    1994)</strong></li>
                                <li>Newton Carlos Garcia - <span>Vice-presidente</span> <br /> <strong>(A partir de agosto de
                                    1994)</strong></li>
                                <li>Rovilson Leite Tavares - <span>Superintendente</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Sebastião Casotti Vidaurre</li>
                                <li>Mário César Aguiar Segond</li>
                                <li>Antônio Jorge Abib Neto</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Humberto Fontenelle Filho</li>
                                <li>Delmontina Maria Azevedo Serafim</li>
                                <li>Carlos Antônio Costa</li>
                                <li>Magnus Santos Machado</li>
                                <li>Stélida Helena Cozer Seraphim</li>
                                <li>Geraldo Magela Siqueira de Brito Lira</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 1998-2002 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 1998-2002</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Benjamim de Freitas Pinheiro - <span>Diretor-presidente</span></li>
                                <li>Newton Carlos Garcia - <span>Vice-presidente</span></li>
                                <li>Mário César Aguiar Segond - <span>Diretor Financeiro</span></li>
                                <li>Paulo César Ribeiro Boasquevisque - <span>Diretor de Mercado</span></li>
                                <li>Walfran Liparizi Gonçalves - <span>Diretor Médico Social</span></li>
                                <li>Pedro Scarpi Melhorim - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Maurílio Valory Silveira</li>
                                <li>João Carlos Jordão Sasso</li>
                                <li>José Coimbra de Rezende Neto</li>
                                <li>Paulo Roberto Brunoro Costa</li>
                                <li>Roberto Olípio Novaes</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Alberto Cruz de Amorim</li>
                                <li>Celso Gonçalves Alves</li>
                                <li>José Américo Avelar Rocha</li>
                                <li>Carlos Henrique Almeida Silva</li>
                                <li>Homero Doyle Maia Neto</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 2002-2006 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 2002-2006</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Newton Carlos Garcia - <span>Diretor-presidente</span></li>
                                <li>Sílvio José Casotti Vidaurre - <span>Vice-presidente</span></li>
                                <li>Benjamim de Freitas Pinheiro - <span>Diretor Financeiro</span></li>
                                <li>João Carlos Serafim - <span>Diretor de Mercado</span></li>
                                <li>Walfran Liparizi Gonçalves - <span>Diretor Médico Social</span></li>
                                <li>Pedro Scarpi Melhorim - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Edson Barros Duarte</li>
                                <li>João Henrique Espinosa de Oliveira</li>
                                <li>Moacir Moreira Xavier</li>
                                <li>Patrícia Vivyanne da Gama Cotta</li>
                                <li>Paulo César Ribeiro Boasquevisque </li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Agliberto Baliano Careta</li>
                                <li>Celso Gonçalves Alves</li>
                                <li>Hélio José de Campos Ferraz</li>
                                <li>Jocimar Teixeira de Lima</li>
                                <li>Magnus Santos Machado</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 2006-2010 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 2006-2010</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Newton Carlos Garcia - <span>Diretor-presidente</span></li>
                                <li>Sílvio José Casotti Vidaurre - <span>Vice-presidente</span></li>
                                <li>Paulo Afonso Nicoli - <span>Diretor Financeiro</span></li>
                                <li>João Carlos Serafim - <span>Diretor de Mercado</span></li>
                                <li>Abel Sant’Anna Junior - <span>Diretor Médico Social</span></li>
                                <li>José Ozório B. de Oliveira - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Ediraldo Gomes Jacinto</li>
                                <li>Gilberto Neves de Araújo</li>
                                <li>Heli Manoel Prado Costa</li>
                                <li>Herval Ribeiro Soares Filho</li>
                                <li>Moacir Moreira Xavier</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Agliberto Baliano Careta</li>
                                <li>Fernando Schwan Miranda</li>
                                <li>Hélio José de Campos Ferraz</li>
                                <li>Marcellus Gazola Grilo</li>
                                <li>Marcos Vinício Pinheiro</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 2010-2014</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Pedro Scarpi Melhorim - <span>Diretor-presidente</span></li>
                                <li>Sílvio José Casotti Vidaurre - <span>Vice-presidente</span></li>
                                <li>Paulo Afonso Nicoli - <span>Diretor Financeiro</span></li>
                                <li>José Ozório B. de Oliveira - <span>Diretor de Mercado</span></li>
                                <li>Walfran Liparizi Gonçalves - <span>Diretor Médico Social</span></li>
                                <li>Fernando Fittipaldi - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Agliberto Baliano Careta</li>
                                <li>José Coimbra de Rezende Neto</li>
                                <li>Luiz Renato Madoreira</li>
                                <li>Marcos Vinício Pinheiro</li>
                                <li>Moacir Moreira Xavier</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Rosimeri Salotto Rocha</li>
                                <li>Alzimara Hemerly de A. Freitas</li>
                                <li>Gil Gonçalves Azeredo</li>
                                <li>Hélio José de Campos Ferraz</li>
                                <li>Herval Ribeiro Soares Filho</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 2014-2018 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 2014-2018</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Pedro Scarpi Melhorim - <span>Diretor-presidente</span></li>
                                <li>Gil Gonçalves Azeredo - <span>Vice-presidente</span></li>
                                <li>Leandro Baptista Pinto - <span>Diretor Financeiro</span></li>
                                <li>José Ozório B. de Oliveira - <span>Diretor de Mercado</span></li>
                                <li>Fabíola de Freitas Moraes - <span>Diretor Médico Social</span></li>
                                <li>Gediel Teixeira Xavier - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Agliberto Baliano Careta</li>
                                <li>Luiz Renato Madoreira</li>
                                <li>Marcos Vinício Pinheiro</li>
                                <li>Newton Araujo Júnior</li>
                                <li>Paulo Afonso Nicoli</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Alzimara Hemerly de A. Freitas</li>
                                <li>Fernando Lemgruber Prado Costa</li>
                                <li>Hélio José de Campos Ferraz</li>
                                <li>Mauricio Cade Oliveira</li>
                                <li>Rafael Moreira Mattos</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 2018-2022 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo}>Diretoria Executiva 2018-2022</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Leandro Baptista Pinto - <span>Diretor-presidente</span></li>
                                <li>Gil Gonçalves Azeredo - <span>Vice-presidente</span></li>
                                <li>Fernando Lemgruber Prado Costa - <span>Diretor Financeiro</span></li>
                                <li>Luiz Sérgio Ervatti - <span>Diretor de Mercado</span></li>
                                <li>Abel Sant’ Anna Junior - <span>Diretor Médico Social</span></li>
                                <li>Gediel Teixeira Xavier - <span>Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo}>Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Alzimara Hemerly de Almeida Freitas</li>
                                <li>Herval Ribeiro Soares Filho</li>
                                <li>João Fernandes de Souza Júnior</li>
                                <li>Luiz Renato Madoreira</li>
                                <li>Newton Araujo Júnior</li>
                                <li>Paulo Afonso Nicoli</li>
                                <li>Pedro Scarpi Melhorim</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo}>Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Agliberto Baliano Careta</li>
                                <li>Grazielle Silva Ferreira Grillo</li>
                                <li>Hernane Alves Schwartz</li>
                                <li>Luiz Carlos Sardenberg Machado</li>
                                <li>Rafael Moreira Mattos</li>
                            </ul>
                        </div>
                    </div>
                    {/* Diretoria Executiva 2022-2026 */}
                    <div className={styles.diretoriaCard}>
                        <div className={styles.cardDiretoriaExecutiva}>
                            <p className={styles.diretoriaTitulo} id="DiretoriaAtual">Diretoria e Conselhos Atual</p>
                            <ul className={styles.diretoriaLista}>
                                <li>Fernando Lemgruber Prado Costa - <span id="DiretoriaAtual">Diretor-presidente</span></li>
                                <li>Bruno Beber Machado - <span id="DiretoriaAtual">Vice-presidente</span></li>
                                <li>Carlos Frederico Buloto Schmitd - <span id="DiretoriaAtual">Diretor Financeiro</span></li>
                                <li>Luiz Sérgio Ervatti - <span id="DiretoriaAtual">Diretor de Mercado</span></li>
                                <li>Abel Sant’ Anna Junior - <span id="DiretoriaAtual">Diretor de Provimento em Saúde</span></li>
                                <li>Grazielle Silva Ferreira Grillo - <span id="DiretoriaAtual">Diretor de Recursos Próprios</span></li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoAdministrativo}>
                            <p className={styles.conselhoAdmTitulo} id="DiretoriaAtual">Conselho de Administração</p>
                            <ul className={styles.conselhoAdmLista}>
                                <li>Leandro Baptista Pinto</li>
                                <li>Herval Ribeiro Soares Filho</li>
                                <li>Marcelo Rodrigues Crespo</li>
                                <li>Alcides Barata Filho</li>
                                <li>Waldemar Carlos Barros de Algemiro</li>
                                <li>Paulo Afonso Nicoli</li>
                                <li>Pedro Scarpi Melhorim</li>
                            </ul>
                        </div>
                        <div className={styles.cardConselhoTecnico}>
                            <p className={styles.conselhoTecnicoTitulo} id="DiretoriaAtual">Conselho Técnico</p>
                            <ul className={styles.conselhoTecnicoLista}>
                                <li>Alzimara Hemerly de Almeida Freitas</li>
                                <li>João Fernandes de Souza Júnior</li>
                                <li>Paulo Casotti Penedo</li>
                                <li>Newton Araujo Júnior</li>
                                <li>Mauricio Cade Oliveira</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Image src="/img/35.png" alt="35 anos" className={styles.uni35AnosOutlineDireita} width={500} height={500} />
            </div>
        </>
    )
}