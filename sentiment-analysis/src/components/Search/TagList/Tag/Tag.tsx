import { EOpinion } from 'context/Application'
import * as S from './Tag.style'

interface ITag {
  term: string
  frequency: number
  sentiment: EOpinion
  total: number
}

export const Tag = ({term, frequency, sentiment, total}: ITag) => {

  const Colors = {
    [EOpinion.NEGATIVE]: "#EA5455",
    [EOpinion.POSITIVE]: "#26B20F",
    [EOpinion.NEUTRAL]: "#61A3BA",
  }
  return(
    <S.Container color={Colors[sentiment]}>
      {term}
      {frequency}
      {total}
    </S.Container>
    )
}


