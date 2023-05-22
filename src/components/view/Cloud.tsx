import styles from '../../styles/Cloud.module.css';
import {AiFillCloud} from "react-icons/ai";

export function Cloud(){
    return (
        <div className={styles.container}>
            <div className={styles.cloud}>
                <AiFillCloud className={styles.svg}/>
            </div>
        </div>
    )
}


export default Cloud