import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Instructions = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const GameButton = styled.button<{ isGreen: boolean }>`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  margin: 2rem 0;
  background-color: ${(props) => (props.isGreen ? "#22c55e" : "#ef4444")};
`;

export const ResultText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #475569;
  margin-top: 2rem;
  text-align: center;
`;
