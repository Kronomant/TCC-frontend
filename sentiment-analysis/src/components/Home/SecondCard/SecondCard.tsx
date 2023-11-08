import * as S from "./SecondCard.style"

interface ISecondaryCard {
  image: string
}

export const SecondCard = ({ image }: ISecondaryCard) => (
  <S.Container background={image}>
    <S.Overlay />
    <S.Text fontSize="3xl" color="white">
      Compare Terms
    </S.Text>
    <S.Text fontWeight="200" color="white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod fugit
    </S.Text>
  </S.Container>
)
