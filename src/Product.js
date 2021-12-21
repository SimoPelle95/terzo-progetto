import React from 'react'
const img="https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11894.jpg";

const Product = () => {
    return (
        <article className='card'>
            <div>
                <img src={img} alt=''/>
                <p style={{
                    textTransform:"uppercase"
                }}>Smart Card di Amazon da 5 Euro...</p>
                <hr/>
                <button className='bottone'>Compra</button>
            </div> 
        </article>
    )
}

export default Product
