import { useState} from 'react'
import { users } from './users'

export const User_dados = ()=>{
    const [number, setNumber] = useState(0)

    let nome = users[number].nome
    let idade = users[number].idade
    let profissao = users[number].profissão
    const change_user = ()=>{
        if (number>=3){
            setNumber(0)
        }else{
            setNumber(number+1)
        }
        
    }

    return(<div>
            <header>
                <h1>olá, meu nome é {nome}!</h1>
                <p>tenho {idade} anos e sou {profissao}</p>
            </header>
            <div>
                <button onClick={change_user}>
                    Próximo
                </button>
            </div>
        </div>)
}
