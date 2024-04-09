import styles from './Video.module.css'

export default function Video(){
    return(
        <div className={styles.videoContent}>
            <video src={`video/35_anos_unimed_sul_capixaba.mp4`} controls className={styles.videoPlayer} poster={`video/capa-video.png`} />
        </div>
    )
}