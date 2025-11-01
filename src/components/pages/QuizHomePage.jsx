// src/pages/QuizPage.jsx
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

  const subjects = Object.keys(quizData).filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
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
    const q = quizData[selectedSubject][currentQ];
    const correct = option === q.answer;

    if (correct) setScore((prev) => prev + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: q.question,
        selected: option,
        correct,
        correctAnswer: q.answer,
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQ + 1 < quizData[selectedSubject].length) {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  // 🟦 Step 1: Show Subject Cards with Search
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
            🧠 Welcome to Applute Quiz Arena
          </h1>
          <p className="text-gray-600 mb-6">
            Choose a technology and test your knowledge!
          </p>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="🔍 Search subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg p-3 w-full sm:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div
                key={subject}
                onClick={() => startQuiz(subject)}
                className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition transform hover:-translate-y-1"
              >
                <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                  {subject}
                </h2>
                <p className="text-gray-500 text-sm">
                  {quizData[subject].length} questions
                </p>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                    Start Quiz ➜
                  </button>
                </div>
              </div>
            ))}
            {subjects.length === 0 && (
              <p className="col-span-full text-gray-500">No subjects found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 🟩 Step 2: Quiz Section
  const q = quizData[selectedSubject][currentQ];

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6 mt-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            🎯 {selectedSubject.toUpperCase()} Quiz Result
          </h2>
          <p className="text-lg text-center mb-6">
            You scored <span className="font-bold text-blue-600">{score}</span>{" "}
            out of {quizData[selectedSubject].length}
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{
                width: `${(score / quizData[selectedSubject].length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {answers.map((a, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 bg-gray-50 shadow-sm"
              >
                <p className="font-semibold mb-1">
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
                    Correct answer: {a.correctAnswer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => startQuiz(selectedSubject)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              🔁 Retry Quiz
            </button>
            <button
              onClick={() => {
                setSelectedSubject(null);
                setSearchTerm("");
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              ⬅ Back to Subjects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 mt-20">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🧩 {selectedSubject.toUpperCase()} Quiz
        </h2>
        <p className="text-gray-600 mb-2">
          Question {currentQ + 1} of {quizData[selectedSubject].length}
        </p>
        <h3 className="text-lg font-semibold mb-4">{q.question}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options.map((option, i) => {
            let style =
              "border rounded-xl p-3 text-left transition-all duration-200 text-gray-800";
            if (selected) {
              if (option === q.answer)
                style += " bg-green-500 text-white font-semibold";
              else if (option === selected && option !== q.answer)
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
          <button
            onClick={nextQuestion}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
          >
            {currentQ + 1 < quizData[selectedSubject].length
              ? "Next ➜"
              : "Show Result 🏁"}
          </button>
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
