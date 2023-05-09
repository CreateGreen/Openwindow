// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'


export const getcurrent =async (req: NextApiRequest, res: NextApiResponse) => {
  const lat = 33.45;
  const lon = -94.00;
  const apikey =process.env.API_KEY
  
  const {data} = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apikey}`
  )
  
  res.status(200).json(data);
  
};

export default getcurrent;
