import React from 'react'

const Componente1 = () => {
    return (
        <section>
            <h2>Componente 1</h2>
            <Persona/>
                <Messaggio />
        </section>
    )
};
const Persona = () =>{
    return <h2>Mi chiamo Simone</h2>
};

const Messaggio = () => <h4>Sono un messaggio</h4>

export default Componente1
