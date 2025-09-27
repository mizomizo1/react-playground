// src/App.jsx
import Hero from "./components/Hero";
import Header from "./components/Header";
import SimpleAlert from "./components/alert";
import Card from "./components/outlined_card";
import Button from "./components/button";
import Contents from "./components/Contesnts";
import DisplayValue from "./components/Display_value";
import  TermsAgreementForm from "./components/Contesnts";

function App() {
  const hasLead = false;
  const fruits = ["Apple", "Banana", "Orange"];
  const Contesnts=[
    {id:"sec1", title:"Section 1", description:"This is the first section."},
    {id:"sec2", title:"Section 2", description:"This is the second section."},
    {id:"sec3", title:"Section 3", description:"This is the third section."}
  ]
  
  return (
    <>
    <Header />
    <Hero main_thema={'GenomeDataManager'} detail={'Here is GenomeDataManager'}/>
    <Card variant="outlined">{Card}</Card>
    <Card variant="outlined">{Card}</Card>
    <Card variant="outlined">{Card}</Card>   
    <Button />
    <div>
      {hasLead && <SimpleAlert/>}
    </div>
    <ul>
      {fruits.map((fruit) => {
        return <li key={fruit}>{fruit}</li>;
      }
    )}
    </ul>
    {Contesnts.map((content) => (
      <Contents key={content.id} id={content.id} title={content.title} description={content.description} />
    ))}
    <DisplayValue />
    </>
  );
}

export default App;