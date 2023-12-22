import { useState, useEffect } from "react";

type Props = {
  target: string;
};

export default function HackerText({ target }: Props) {
  const [text, setText] = useState<string>(target);
  const [iteration, setIteration] = useState<number>(0);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function randomize() {
    setText((text) =>
      text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("")
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (iteration < target.length) {
        randomize();
        setIteration((iteration) => iteration + 1 / 3);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [iteration]);

  return <>{text}</>;
}
