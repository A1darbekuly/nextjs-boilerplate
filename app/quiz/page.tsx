import { useState } from 'react';

const questions = [
  {
    question: 'Когда было основано Казахское ханство?',
    options: ['1465 год', '1511 год', '1290 год', '1598 год'],
    answer: '1465 год',
  },
  {
    question: 'Столица Казахстана с 1997 года?',
    options: ['Алматы', 'Астана', 'Шымкент', 'Тараз'],
    answer: 'Астана',
  },
  {
    question: 'Кто является автором гимна РК?',
    options: ['М.Шаханов', 'Ш.Ниязбеков', 'Ш.Айманов', 'Ж.Нажимеденов и Н.Назарбаев'],
    answer: 'Ж.Нажимеденов и Н.Назарбаев',
  },
  {
    question: 'Сколько областей в Казахстане?',
    options: ['14', '15', '17', '12'],
    answer: '17',
  },
  {
    question: 'Какой элемент символизирует солнце на флаге РК?',
    options: ['Справедливость', 'Будущее', 'Энергию и жизнь', 'Золото'],
    answer: 'Энергию и жизнь',
  },
];

export default function QuizPage() {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (qIdx: number, option: string) => {
    const updated = [...userAnswers];
    updated[qIdx] = option;
    setUserAnswers(updated);
  };

  const getScore = () =>
    questions.filter((q, i) => q.answer === userAnswers[i]).length;

  return (
    <main className="p-6 max-w-3xl mx-auto bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Тест по Казахстану (УБТ демо)
      </h1>

      {questions.map((q, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-semibold mb-2">
            {idx + 1}. {q.question}
          </p>
          <div className="space-y-2">
            {q.options.map((opt) => (
              <label key={opt} className="block">
                <input
                  type="radio"
                  name={`q-${idx}`}
                  value={opt}
                  checked={userAnswers[idx] === opt}
                  onChange={() => handleOptionChange(idx, opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition block mx-auto"
        >
          Показать результат
        </button>
      ) : (
        <div className="text-center mt-6">
          <p className="text-lg">
            Ваш результат: <strong>{getScore()} / {questions.length}</strong>
          </p>
        </div>
      )}
    </main>
  );
}
