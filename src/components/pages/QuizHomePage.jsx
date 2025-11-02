import React, { useState } from "react";
import { quizData } from "../../data/quizData";

const QuizPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Filter subjects by search
  const filteredSubjects = quizData.filter((subject) =>
    subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startQuiz = (subject) => {
    setSelectedSubject(subject);
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);
    const q = selectedSubject.questions[currentQ];
    const correct = option === q.correctAnswer;

    if (correct) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: q.question,
        selected: option,
        correct,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 < selectedSubject.questions.length) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  // 🟦 SUBJECT SELECTION VIEW
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-50 py-12 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            🧠 Applute Quiz Arena
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Choose a subject and test your knowledge instantly!
          </p>

          <div className="flex justify-center mb-10">
            <input
              type="text"
              placeholder="🔍 Search subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-2xl p-4 w-full sm:w-1/2 shadow-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.subjectName}
                onClick={() => startQuiz(subject)}
                className="flex items-center bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <img
                  src={subject.icon}
                  alt={subject.subjectName}
                  className="w-14 h-14 rounded-xl object-contain mr-5"
                />
                <div className="text-left">
                  <h2 className="text-xl font-bold text-gray-800 capitalize">
                    {subject.subjectName}
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    {subject.questions.length} Questions
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                    Start Quiz ➜
                  </button>
                </div>
              </div>
            ))}
            {filteredSubjects.length === 0 && (
              <p className="col-span-full text-gray-500">No subjects found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = selectedSubject.questions[currentQ];

  // 🟩 RESULT PAGE
  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 py-12 mt-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🎯 {selectedSubject.subjectName} Quiz Result
          </h2>
          <p className="text-lg text-center mb-6">
            You scored <span className="font-bold text-blue-600">{score}</span>{" "}
            out of {selectedSubject.questions.length}
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(score / selectedSubject.questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {answers.map((a, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-gray-50 shadow-sm"
              >
                <p className="font-semibold mb-1 text-gray-800">
                  {i + 1}. {a.question}
                </p>
                <p
                  className={
                    a.correct
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  Your answer: {a.selected}
                </p>
                {!a.correct && (
                  <p className="text-gray-700 text-sm">
                    ✅ Correct answer: {a.correctAnswer}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-1 italic">
                  💡 {a.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => startQuiz(selectedSubject)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              🔁 Retry Quiz
            </button>
            <button
              onClick={() => {
                setSelectedSubject(null);
                setSearchTerm("");
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              ⬅ Back to Subjects
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🟨 QUIZ QUESTIONS VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12 mt-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={selectedSubject.icon}
            alt="icon"
            className="w-12 h-12 rounded-lg"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedSubject.subjectName} Quiz
          </h2>
        </div>

        <p className="text-gray-600 mb-3 text-sm">
          Question {currentQ + 1} of {selectedSubject.questions.length}
        </p>
        <h3 className="text-lg font-semibold mb-6 text-gray-800">
          {q.question}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((option, i) => {
            let style =
              "border rounded-xl p-3 text-left transition-all duration-300 text-gray-800 shadow-sm";
            if (selected) {
              if (option === q.correctAnswer)
                style += " bg-green-500 text-white font-semibold";
              else if (option === selected && option !== q.correctAnswer)
                style += " bg-red-500 text-white";
              else style += " bg-gray-100";
            } else {
              style += " hover:bg-blue-100";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className={style}
                disabled={!!selected}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected && (
          <>
            <p className="mt-4 text-sm italic text-gray-700">
              💡 {q.explanation}
            </p>
            <button
              onClick={nextQuestion}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full transition"
            >
              {currentQ + 1 < selectedSubject.questions.length
                ? "Next ➜"
                : "Show Result 🏁"}
            </button>
          </>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => {
              setSelectedSubject(null);
              setSearchTerm("");
            }}
            className="text-blue-600 hover:underline text-sm"
          >
            ⬅ Back to All Subjects
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
