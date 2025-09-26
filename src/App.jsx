// src/App.jsx
import Hero from "./components/Hero";
import Header from "./components/Header";
import SimpleAlert from "./components/alert";
import Card from "./components/outlined_card";

function App() {
  return (
    <>
    <SimpleAlert />
    <Header />
    <Hero main_thema={'GenomeDataManager'} detail={'Here is GenomeDataManager'}/>
    <Card variant="outlined">{Card}</Card>
    <Card variant="outlined">{Card}</Card>
    <Card variant="outlined">{Card}</Card>   
    </>
  );
}

export default App;