
const Getlocation =()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords.latitude,position.coords.longitude);
    })

}

export {Getlocation};