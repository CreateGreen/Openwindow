import styles from '../styles/Skysection.module.css';
import Sun from '../components/view/Sun';
import Cloud from '../components/view/Cloud';

export function Skysection(){
    return (
        <div className={styles.skysection}>
            <div className={styles.container}>
                {/* <Sun /> */}
                <Cloud />
            </div>
        </div>
    )
}


export default Skysection