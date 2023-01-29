import styled from 'styled-components';
import { colors } from "../components/IphoneCalculator.jsx";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`

export const CalculatorContainer = styled.div`
  width: 428px;
  height: 683px;
  background-color: black;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  align-content: flex-end;
  padding-bottom: 40px;
`

export const Button = styled.div`
  width: ${({ width }) => width || '88px' };
  height: 88px;
  background: ${({ background }) => background || colors.BLACK };
  border-radius: 352px;
`