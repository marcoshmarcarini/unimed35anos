import styles from './VideoFundadores.module.css'

export default function VideoFundadores(){
    return(
        <div className={styles.videoFundadoresContent}>
            <video
            controls  
            src={`/video/unimed_video_fundadores.mp4`} 
            className={styles.videoFundadores}/>
        </div>
    )
}