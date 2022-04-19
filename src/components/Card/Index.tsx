import { ContainerCard } from './styles'

interface cardProps {
  name: string;
  schedule: string;
}

export function Card({ name, schedule } : cardProps) {

  return (
      <>
        <ContainerCard>
          <strong>{name}</strong>
          <small>{schedule}</small>
        </ContainerCard>
      </>
  )
}


