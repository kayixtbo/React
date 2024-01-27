import { useState} from 'react'
import { users } from './users'

export const user_dados = ()=>{
    const [number, setNumber] = useState(0)

    let nome = users[number].nome
    let idade = users[number].idade
    let profissao = users[number].profissão
    const change_user = ()=>{
        if (setNumber>=3){
            setNumber(number-number)
        }else{
            setNumber(number+1)
        }
        
    }

    return (
        <div>
            <header>
                <h1>olá, meu nome é {nome}!</h1>
                <p>tenho {idade} anos e sou {profissao}</p>
            </header>
            <div>
                <button onClick={user_dados}>
                    Próximo
                </button>
            </div>
        </div>
    )
}
