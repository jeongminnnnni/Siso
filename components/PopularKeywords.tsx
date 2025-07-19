export default function PopularKeywords() {
  const keywords = [
    { name: "맛집투어", icon: "🍽️" },
    { name: "힐링여행", icon: "🧘" },
    { name: "걷기최소", icon: "🚶" },
    { name: "바다", icon: "🌊" },
    { name: "서핑", icon: "🏄" },
    { name: "테마파크", icon: "🎢" },
    { name: "다이빙", icon: "🤿" },
    { name: "크루즈", icon: "🚢" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">추천 인기 키워드</h2>
          <p className="text-gray-600">현재 많은 사람들이 선택하고 있어요!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {keywords.map((keyword) => (
            <button
              key={keyword.name}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors"
            >
              <span className="text-2xl">{keyword.icon}</span>
              <span className="font-medium text-gray-700">#{keyword.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
