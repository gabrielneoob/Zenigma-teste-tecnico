import { useState } from 'react'
import { Styles } from './Styles';
type CardListProps = {
  size: number;
}

const CardList = ({ size }:CardListProps ) => {
  const [findIndex, setFindIndex] = useState<number>(-1)
  const arr = Array.from({length: size}, () => 0);

  const handleRevealCard = (index: number) => {
    setFindIndex(index)
  }


  
  return (
    <div>
      <Styles.CardContainer>
        {arr.map((_, index) => {
          return (
            <Styles.Card
            test={findIndex === index}
            key={index}
            onClick={() => handleRevealCard(index)}
            role='menuitem'
            >
              <Styles.Title
              test={findIndex === index}
              >
                {findIndex === index ? 'up' : 'down'}
              </Styles.Title>
            </Styles.Card>
          )
        })}
      </Styles.CardContainer>
    </div>
  )
}

export default CardList