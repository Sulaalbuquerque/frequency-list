import { ContainerCard } from './styles'

export interface CardProps {//exportar para ser usado em outro arquivo tbm
  name: string;
  schedule: string;
}

export function Card({ name, schedule } : CardProps) {

  return (
      <>
        <ContainerCard>
          <strong>{name}</strong>
          <small>{schedule}</small>
        </ContainerCard>
      </>
  )
}


