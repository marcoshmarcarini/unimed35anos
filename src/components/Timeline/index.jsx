import styles from './Timeline.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


export default function Timeline() {
    return (
        <div className={styles.timelineContent}>
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-1.png`} alt={`1`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-2.png`} alt={`2`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-3.png`} alt={`3`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-4.png`} alt={`4`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-5.png`} alt={`5`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-6.png`} alt={`6`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-7.png`} alt={`7`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-8.png`} alt={`8`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-9.png`} alt={`9`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-10.png`} alt={`10`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-11.png`} alt={`11`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-12.png`} alt={`12`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-13.png`} alt={`13`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-14.png`} alt={`14`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-15.png`} alt={`15`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-16.png`} alt={`16`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-18.png`} alt={`17`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-19.png`} alt={`18`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-20.png`} alt={`19`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-21.png`} alt={`20`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-22.png`} alt={`21`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-23.png`} alt={`22`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-24.png`} alt={`23`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-25.png`} alt={`24`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-26.png`} alt={`25`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={`/img/timeline/Tela-27.png`} alt={`26`} width={1920} height={1080} className={styles.slideImage} quality={100}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}