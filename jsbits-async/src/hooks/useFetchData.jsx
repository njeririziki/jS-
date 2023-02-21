import React from 'react'
import axios from 'axios'

const useFetchData = () => {
    return {
         getData(endpoint,params){
           return new Promise(async(success,reject)=>{
             try{
                await axios.get( endpoint,{
                           params
                       })
                       .then(res=>{
                        success(res.data)
                       })
                       .catch(err=>{
                        console.log(err);
                        reject(err)
                       })
             }catch(error) {
              console.error(error);
             }
           })
         }
    };
}
 
export default useFetchData;


// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchData();