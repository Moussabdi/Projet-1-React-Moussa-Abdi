import Container from "./Component/Container/Container";
import ProductCard from "./Component/ProductCard/ProductCard";
import Pokedex from "./assets/Pokedex.png";
function App() {
  return (
    <Container className="app-container" fluid noGutters>
      <ProductCard
        title="Pokedex"
        image={{
          src: Pokedex,
          alt: "Pokedex",
          width: "100px",
          height: "100px",
        }}
        label="Click here!"
        description="Loremgggggggggggggggqrggggggggggggggr"
      />
    </Container>
  );
}

export default App;
