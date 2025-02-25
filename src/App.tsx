import { useEffect, useState } from "react";

const App = () => {
  const [color, setColor] = useState<"red" | "green">("red");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  useEffect(() => {
    const randomTime = Math.floor(3000 + Math.random() * 3001);
    const timer = setTimeout(() => {
      setColor("green");
      setStartTime(Date.now());
    }, randomTime);

    return () => clearTimeout(timer);
  }, [color]);

  const handleClick = () => {
    if (color === "green" && startTime) {
      const reaction = Date.now() - startTime;
      setReactionTime(reaction);
      setColor("red");
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          width: 200,
          height: 200,
          backgroundColor: color,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#fff",
        }}
      >
        {color === "red" ? "대기..." : "클릭!"}
      </div>
      {reactionTime !== null ? `반응속도: ${reactionTime}ms` : null}
    </div>
  );
};

export default App;
