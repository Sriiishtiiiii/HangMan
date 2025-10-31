// React import not required with modern JSX transform

type KeyboardProps = {
  disabled?: boolean;
  activeLetters?: string[];
  inactiveLetters?: string[];
  addGuessedLetter?: (letter: string) => void;
};

const KEYS = Array.from("abcdefghijklmnopqrstuvwxyz");

export function Keyboard({
  disabled = false,
  activeLetters = [],
  inactiveLetters = [],
  addGuessedLetter = () => {},
}: KeyboardProps) {
  return (
    <div className="keyboard-grid">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
            style={{
              fontFamily: "monospace",
              fontSize: "1.25rem",
              textTransform: "uppercase",
              fontWeight: "bold",
              cursor: "pointer",
              padding: ".45em 0",
              border: "2px solid #00ff99",
              background: isActive
                ? "#00ff99"
                : isInactive
                ? "rgba(0,255,153,0.1)"
                : "transparent",
              color: isActive ? "black" : "#00ff99",
              filter: isActive
                ? "drop-shadow(0 0 10px #00ff99)"
                : "drop-shadow(0 0 3px #00ff99)",
              transition: "all 0.2s ease-in-out",
              borderRadius: "6px",
              pointerEvents: disabled ? "none" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!isInactive && !isActive) {
                (e.target as HTMLElement).style.filter =
                  "drop-shadow(0 0 15px #00ff99)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isInactive && !isActive) {
                (e.target as HTMLElement).style.filter =
                  "drop-shadow(0 0 3px #00ff99)";
              }
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
