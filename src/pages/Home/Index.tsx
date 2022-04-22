import { useState, useEffect, useRef} from 'react'
import { Card, CardProps } from '../../components/Card/Index'
import { ContainerCards, ContainerHeader, ContainerHome } from './styles'

export function Home() {

  const [studentName, setStudentName] = useState('') 

  const [students, setStudents] = useState<CardProps[]>([]) 

  const [user, setUser] = useState({ name: '', avatar: '' })

  const handleAddStudent = () => {
    const newStudent = {
      name: studentName,
      schedule: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',    
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

   useEffect(() => {
    fetch('https://api.github.com/users/Sulaalbuquerque')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name, 
        avatar: data.avatar_url,
      })
    })
   }, [])

  return (
      <>
        <ContainerHome>

          <ContainerHeader>

            <header>
              <h1>Lista de presença</h1>

              <div className='user'>
                <strong>{user.name}</strong>
                <img src={user.avatar} alt='foto de perfil'/>
              </div>
            </header>

            <input 
              type='text' 
              placeholder='Digite o nome'
              onChange={e => setStudentName(e.target.value)}
            />
            <button 
              //disabled 
              onClick={handleAddStudent} 
              type='button'
            >
              Adicionar
            </button>
          </ContainerHeader>

          <ContainerCards>
            {
              students.map(student => (
                <Card 
                  key={student.schedule} 
                  name={student.name  } 
                  schedule={student.schedule}
                />
              ))
            }
          </ContainerCards>

        </ContainerHome>
      </>
  )
}


