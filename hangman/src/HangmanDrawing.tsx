const NEON_COLOR = "#00ff99";

const glow = {
  filter: `drop-shadow(0 0 5px ${NEON_COLOR}) 
           drop-shadow(0 0 10px ${NEON_COLOR}) 
           drop-shadow(0 0 20px ${NEON_COLOR})`,
  transition: "filter 0.3s ease-in-out",
};

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: `10px solid ${NEON_COLOR}`,
      position: "absolute",
      top: "50px",
      right: "-30px",
      ...glow,
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: NEON_COLOR,
      position: "absolute",
      top: "120px",
      right: 0,
      ...glow,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: NEON_COLOR,
      position: "absolute",
      top: "150px",
      right: "-100px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
      ...glow,
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: NEON_COLOR,
      position: "absolute",
      top: "150px",
      right: "10px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
      ...glow,
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: NEON_COLOR,
      position: "absolute",
      top: "210px",
      right: "-90px",
      transform: "rotate(60deg)",
      transformOrigin: "left bottom",
      ...glow,
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: NEON_COLOR,
      position: "absolute",
      top: "210px",
      right: 0,
      transform: "rotate(-60deg)",
      transformOrigin: "right bottom",
      ...glow,
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: NEON_COLOR,
          position: "absolute",
          top: 0,
          right: 0,
          ...glow,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: NEON_COLOR,
          marginLeft: "120px",
          ...glow,
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: NEON_COLOR,
          marginLeft: "120px",
          ...glow,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: NEON_COLOR,
          ...glow,
        }}
      />
    </div>
  );
}
