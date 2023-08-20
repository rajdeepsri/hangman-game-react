type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, idx) => {
        return (
          <span style={{ borderBottom: "0.1em solid black" }} key={idx}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter.toLowerCase()) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
