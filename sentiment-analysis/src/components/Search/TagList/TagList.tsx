

import { EOpinion } from 'context/Application'
import { Tag } from './Tag/Tag'
import * as S from './TagList.style'

export const TagList = () => (
  <S.Container>
    <Tag term='TGS' sentiment={EOpinion.POSITIVE} frequency={5} total={100} />
  </S.Container>
  
  
  )