import styles from '../styles/Skysection.module.css';
import Sun from '../components/view/Sun';
import Cloud from '../components/view/Cloud';
interface Propstype{
    curweather:string,
}

const Skysection=({curweather}:Propstype)=>{
    const cur = curweather;
    return (
        <div className={styles.skysection}>
            <div className={styles.container}>
                {
                    cur=="Clouds" ? <Cloud /> :  <Sun />

                }
                
                
            </div>
        </div>
    )
}


export default Skysection