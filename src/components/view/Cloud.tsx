import styles from '../../styles/Cloud.module.css';
import {AiFillCloud} from "react-icons/ai";

export function Cloud(){
    return (
        <div className={styles.container}>
            <div className={styles.cloud}>
                
                <AiFillCloud className={styles.svg1} />
                <AiFillCloud className={styles.svg2}/>
              
            </div>
            
        </div>
    )
}


export default Cloud