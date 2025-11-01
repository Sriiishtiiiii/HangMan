import "./App.css";
import { useEffect, useState, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

export default function App() {
  const [wordToGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!/^[a-z]$/.test(key)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [addGuessedLetter]);

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const title = "H A N G M A N ";
  const [visibleLetters, setVisibleLetters] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLetters(title.slice(0, i + 1));
      i++;
      if (i >= title.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-bg">
      <div className="container">
        <div className="game-grid">
          <div className="title">{visibleLetters}</div>

          <div className="drawing">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          </div>

          <div className="word">
            <HangmanWord
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
              reveal={isLoser}
            />
          </div>

          <div className="keyboard-wrap">
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter((l) =>
                wordToGuess.includes(l)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </div>

          <div className="status">
            {(isWinner || isLoser) && (
              <div className={`status-text ${isWinner ? "win" : "lose"}`}>
                {isWinner
                  ? "🎉 You Win! 🎉"
                  : `💀 Game Over — Word: ${wordToGuess.toUpperCase()} 💀`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
