import styles from "@/styles/Home.module.css";
import Skysection from "../components/Skysection";
import Link from "next/link";
import { useEffect,useState } from "react";
import { QueryClient,useQuery,dehydrate } from "react-query";
import {fetchWeather} from '../utils/queries/Getweather';

export async function getStaticProps(){
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey:['getweather'],
    queryFn:()=>fetchWeather()
  })
  return {
    props:{
      dehydratedState:dehydrate(queryClient),
    },
  }
}



function Home() {
  const {data} = useQuery('getweather',()=>fetchWeather());
  console.log(data);


  //check weather state

  return (
    <>
      <div className={styles.home}>
        <section className={styles.skysection}>
          <Skysection 
            curweather={data.weather[0].main}
          />
        </section>
        
        <section className={styles.infosection}>
          
          <p>{data?Object.keys(data):"loading"}</p>
          
        </section>
      </div>
    </>
  );
}
export default Home;
