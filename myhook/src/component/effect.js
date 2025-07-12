import {useState, useEffect}from 'react'

const Effect = () => {
    const [fake, setFake] = useState(null);
    async function apiStore(){
        try{
            const server = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4",
                {
                    method: "GET",
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            )
            if(!server.ok){
                throw new Error('poor server...please reload');
            }
            const dataServer = await server.json();
            setFake(dataServer);
        }catch(error){
            console.error('server network not found:', error);
        }
    }
    useEffect(()=>{
        apiStore()
    },[]);
    console.log('data from fake api', fake);
  return (
    <>
        <h2>Fake Store API</h2>
        <div className='container'>
            {fake?.map((values) =>{
                return(
                    <>
                    <div className='box'>
            <div className='content'>
                <h5>{values.title}</h5>
                <p>Price is ${values.price}</p>
            </div>
            <img src={values.image} alt=""/>  
            <p className='details'>Description: {values.description}</p> 
            <button>Add to Cart</button> 
        </div>
        </>
                );
            })}
         </div>
    </>
  );
}
export{Effect};