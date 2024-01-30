import React, { useState} from 'react'
import { users } from './users'

export const User_dados = ()=>{
    const [number, setNumber] = useState(0)
    const [person, setPerson] = useState(users[number])
    
    const change_user = ()=>{
        if (number>=users.length-1){
            setNumber(number-number)
        }else{
            setNumber(number+1)
        }
        setPerson(users[number])
        console.log(number);
        console.log(person);
    }
    
    return(<div>
            <header>
                <h1>olá, meu nome é {person.nome}!</h1>
                <p>tenho {person.idade} anos e sou {person.profissão}</p>
            </header>
            <div>
                <button onClick={change_user}>
                    Próximo
                </button>
            </div>
        </div>)
}
