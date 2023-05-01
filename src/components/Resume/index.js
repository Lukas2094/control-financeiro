import React from 'react';
import * as S from './styles';
import ResumeItem from '../ResumeItem';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

export const Resume = ({income , expense, total}) => {
  return (
    <S.Container>
      <ResumeItem title={"Entradas"} Icon={FaRegArrowAltCircleUp} value={income} />

      <ResumeItem title={"Saídas"} Icon={FaRegArrowAltCircleDown} value={expense} />

      <ResumeItem title={"Total"} Icon={FaDollarSign} value={total} />
    </S.Container>
  )
}
