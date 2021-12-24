//import Componente1 from "./Componente1";
import Product from "./Product";
import products from "./data";

const primaCard = {
  nome:"10 € Amazon",
  img:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f11895.jpg",
  alt:"immagine"
}
const secondaCard = {
  nome:"20 € Dollari",
  img:"https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f12686.jpg",
  alt:"immagine"
};

function App() {
  /*const nomi = ["Simone", "Francesco","Alessandro"];
  const nuoviNomi = nomi.map((nome) =>{
    return <h2>{nome}</h2>
  })*/
  return (
    <div className="App">
      <h1>La nostra prima card</h1>
      {/*<section>{nuoviNomi}</section>*/}
      <Product {...primaCard}/>
      <Product nome={secondaCard.nome} img={secondaCard.img}/>
      {products.map((prodotto) => {
        const {id} = prodotto;
        return <Product key={id} {...prodotto}/>
      })}
      {/*{products.map((prodotto) => <Product key={prodotto.id} {...prodotto}/>)}*/}
     {/* <Componente1/>*/}
    </div>
  );
}

export default App;
