type HangmanWordProps = {
  guessedLetters?: string[];
  wordToGuess?: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters = [],
  wordToGuess = "hangman",
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "clamp(2rem, 8vw, 5rem)",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        justifyContent: "center",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid #00ff99", // ✅ neon green border
            width: "1em",
            textAlign: "center",
            color:
              guessedLetters.includes(letter) || reveal
                ? "#00ff99" // show correct letters in neon green
                : "transparent", // hide unguessed letters
            textShadow:
              guessedLetters.includes(letter) || reveal
                ? "0 0 10px #00ff99"
                : "none",
            transition: "all 0.2s ease-in-out",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
