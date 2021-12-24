import React from 'react'


const Product = ({img, nome, alt}) => {
    const pippo = () =>{
        console.log(nome)
    };
    const paramsHandler = () => {
        console.log(nome)
    };
    return (
        <article className='card'>
            <div>
                <img src={img} alt={alt}/>
                <p style={{
                    textTransform:"uppercase"
                }}>{nome}</p>
                <hr/>
                <button onClick={() => alert(`nome: ${nome}`)} className='bottone'>Compra</button>
                <button onClick={paramsHandler} className='bottone'>nome</button>
                
            </div> 
        </article>
    )
}

export default Product
