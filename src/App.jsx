// src/App.jsx
import ProfileCard from "./components/ProfileCard";
import Hero from "./components/Hero";
import Header from "./components/Header";
import SimpleAlert from "./components/alert";
import IconButtonColors from "./components/loading";

function App() {
  return (
    <>
    <SimpleAlert />
    <Header />
    <Hero main_thema={'GenomeDataManager'} detail={'Here is GenomeDataManager'}/>
    <IconButtonColors />
    <div className="min-h-screen flex flex-wrap gap-6 items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6">
      <ProfileCard
        name="neko"
        role="React 初心者"
        imgUrl="https://placebear.com/200/200"
        hobby='卓球'
      />
      <ProfileCard
        name='jacob'
        role="Tailwind 大好き"
        imgUrl="https://placedog.net/200/200"
        hobby='sad'
      />
      <ProfileCard
        name="パンダ先輩"
        role="UI デザイナー"
        imgUrl="https://placebear.com/200/200"
        />
    </div>
    </>
  );
}

export default App;