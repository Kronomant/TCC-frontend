import * as S from "./SecondCard.style"

interface ISecondaryCard {
  title: string
  content: string
  image: string
}

export const SecondCard = ({ image, title, content }: ISecondaryCard) => (
  <S.Container background={image}>
    <S.Overlay />
    <S.Text fontSize="3xl" color="white">
      {title}
    </S.Text>
    <S.Text fontWeight="200" color="white">
      {content}
    </S.Text>
  </S.Container>
)
