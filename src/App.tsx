import * as S from "./styles/style";

import { useEffect, useState } from "react";

const App = () => {
  const [isGreen, setIsGreen] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [reactionTime, setReactionTime] = useState<number | null>(null);

  useEffect(() => {
    const randomTime = Math.floor(3000 + Math.random() * 3001);
    const timer = setTimeout(() => {
      setIsGreen(true);
      setStartTime(Date.now());
    }, randomTime);

    return () => clearTimeout(timer);
  }, [isGreen]);

  const handleClick = () => {
    if (isGreen === true && startTime) {
      const reaction = Date.now() - startTime;
      setReactionTime(reaction);
      setIsGreen(false);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>반응 속도 테스트</S.Title>
        <S.Instructions>초록색이 되면 최대한 빨리 클릭하세요!</S.Instructions>
        <S.GameButton isGreen={isGreen} onClick={handleClick} />
        {reactionTime && (
          <S.ResultText>반응속도: {reactionTime}ms</S.ResultText>
        )}
        <S.ResultText></S.ResultText>
      </S.Card>
    </S.Container>
  );
};

export default App;
