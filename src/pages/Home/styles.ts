import styled from 'styled-components'

export const ContainerHome = styled.div`

    font-family: sans-serif;
    height: 100vh;
    padding-bottom: 4rem;
    min-width: 400px;

    header{
        margin: 2rem 0;
        color: #DBD2E0;
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
            display: flex;
            align-items: center;

            strong{
                font-size: .7rem;
            }

            img{
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                margin-left: .7rem;
                margin-right: .7rem;
            }
        }
    }

    input{
        width: 50%;
        background-color: #DBD2E0;
        border-radius: 5px;
        border: none;
        padding: .6rem;
    }

    button{
        width: 50%;
        padding: .6rem;
        font-weight: 700;
        border: none;
        background-color: #273B09;
        color: #fff;
        border-radius: 5px;
        margin: 1rem 0 3rem;
        cursor: pointer;
        transition: filter .2s;

        :disabled{
            cursor: default;
            opacity: 0.4;
            pointer-events: none;
        }

        :hover{
            filter: brightness(.7);
        }
    }

    
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    
    @media (max-width: 550px) {
       header{
           display: block;

            h1{
                font-size: 1.3rem;
                margin-bottom: 1rem;
            }

            .user{
                justify-content: end;
            }
        }

        input, button{
            padding: 1.5rem;
            font-size: 1rem;
        }
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 7rem;

`