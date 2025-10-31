// React import not required with modern JSX transform

type KeyboardProps = {
  disabled?: boolean;
  activeLetters?: string[];
  inactiveLetters?: string[];
  addGuessedLetter?: (letter: string) => void;
};

// QWERTY keyboard layout
const ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

export function Keyboard({
  disabled = false,
  activeLetters = [],
  inactiveLetters = [],
  addGuessedLetter = () => {},
}: KeyboardProps) {
  return (
    <div className="keyboard-grid">
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={`keyboard-row row-${rowIndex + 1}`}>
          {row.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            const btnStatus = isActive
              ? "active"
              : isInactive
              ? "inactive"
              : "";

            return (
              <button
                key={key}
                className={`keyboard-button ${btnStatus}`}
                onClick={() => addGuessedLetter(key)}
                disabled={isInactive || isActive || disabled}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
