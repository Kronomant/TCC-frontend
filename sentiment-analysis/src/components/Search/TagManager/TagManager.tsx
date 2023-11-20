
import { Flex, Text } from '@chakra-ui/react'
import * as S from './TagManager.style'
import { TagList } from '../TagList'



interface ITagManager {
  isActive: boolean
}

export const TagManager = ({ isActive }: ITagManager) => (
  <S.Container isActive={isActive}>
    <Flex w='100%' justifyContent='center' alignItems='center'>
      <Text fontSize='xl'> Tag Manager</Text>
    </Flex>
    <TagList />
  </S.Container>
  
  )