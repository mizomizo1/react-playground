// src/App.jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap gap-6 items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-6">
      <ProfileCard
        name="萌恵ちゃん"
        role="React 初心者"
        imgUrl="https://placebear.com/200/200"
        hobby='卓球'
      />
      <ProfileCard
        name="みぞうえ秀明"
        role="Tailwind 大好き"
        imgUrl="https://placedog.net/200/200"
        hobby='悲しい'
      />
      <ProfileCard
        name="パンダ先輩"
        role="UI デザイナー"
        imgUrl="https://placebear.com/200/200"
      />

    </div>
  );
}

export default App;