// src/components/ProfileCard.jsx
export default function ProfileCard({ name, role, imgUrl,hobby }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
      {/*ヘッダー背景 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-24"></div>

      {/* 本体 */}
      <div className="flex flex-col items-center p-6 -mt-12">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src={imgUrl}
          alt={name}
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">{role}</p>
        <button className="mt-4 px-6 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
          フォローする
        </button>
        <h2>ちなみに趣味は{hobby}</h2>
      </div>
    </div>
  );
}
