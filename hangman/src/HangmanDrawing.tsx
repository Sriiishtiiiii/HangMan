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
      border: `7px solid ${NEON_COLOR}`,
      position: "absolute",
      top: "35px",
      right: "-20px",
      ...glow,
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "7px",
      height: "70px",
      background: NEON_COLOR,
      position: "absolute",
      top: "88px",
      right: 0,
      ...glow,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "7px",
      background: NEON_COLOR,
      position: "absolute",
      top: "105px",
      right: "-70px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
      ...glow,
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "7px",
      background: NEON_COLOR,
      position: "absolute",
      top: "105px",
      right: "7px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
      ...glow,
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "7px",
      background: NEON_COLOR,
      position: "absolute",
      top: "147px",
      right: "-63px",
      transform: "rotate(60deg)",
      transformOrigin: "left bottom",
      ...glow,
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "7px",
      background: NEON_COLOR,
      position: "absolute",
      top: "147px",
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
    <div style={{ position: "relative", marginTop: "75px" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "35px",
          width: "7px",
          background: NEON_COLOR,
          position: "absolute",
          top: 0,
          right: 0,
          ...glow,
        }}
      />
      <div
        style={{
          height: "7px",
          width: "140px",
          background: NEON_COLOR,
          marginLeft: "84px",
          ...glow,
        }}
      />
      <div
        style={{
          height: "280px",
          width: "7px",
          background: NEON_COLOR,
          marginLeft: "84px",
          ...glow,
        }}
      />
      <div
        style={{
          height: "7px",
          width: "175px",
          background: NEON_COLOR,
          ...glow,
        }}
      />
    </div>
  );
}
