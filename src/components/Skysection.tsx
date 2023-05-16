import styles from '../styles/Skysection.module.css';
import Sun from '../components/view/Sun';

export function Skysection(){
    return (
        <div className={styles.skysection}>
            <div className={styles.container}>
                <Sun />
            </div>
        </div>
    )
}


export default Skysection