export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">
        Добро пожаловать в UBToqu
      </h1>
      <p className="text-lg mb-6 text-center">
        Подготовьтесь к национальному экзамену с помощью ИИ
      </p>
      <a href="/quiz">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Начать тест
        </button>
      </a>
    </main>
  );
}
