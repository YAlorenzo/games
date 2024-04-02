import { Container, Sprite } from '@pixi/react'
import { FC } from 'react'
import bg from '../../../../../assets/hummer/bg.jpg';

interface HummerBgPXProps {
  
}

const HummerBgPX: FC<HummerBgPXProps> = ({}) => {
    return (
        <Container>
            <Sprite x={0} y={0} image={bg}>

            </Sprite>
      </Container>
  )
}

export default HummerBgPX