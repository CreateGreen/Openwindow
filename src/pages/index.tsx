import styles from "@/styles/Home.module.css";
import Skysection from "../components/Skysection";
import Link from "next/link";
import { useEffect,useState } from "react";


export default function Home() {
  const [weather,setweather]=useState([]);

  useEffect(() => {
    const fetchweather= async()=>{
      const data = await fetch("api/getcurrent",{
        method:"GET",
      })
      const resultdata = await data.json();
      const weathermain = resultdata
      setweather(weathermain)
    }

    fetchweather();
  }, []);

  //check weather state
  useEffect(() =>{
    console.log(weather)
    
  },[weather])

  return (
    <>
      <div className={styles.home}>
        <section className={styles.skysection}>
          <Skysection />
        </section>
        
        <section className="weathersection">
          <h1>Open Window</h1>
          
          <p>{Object.keys(weather)}</p>
          
        </section>
      </div>
    </>
  );
}
