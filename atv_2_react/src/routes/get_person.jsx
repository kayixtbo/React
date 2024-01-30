import axios from 'axios'
import { useState } from 'react'

export function Person(){
    const [id,setId] = useState(0)
    const [count, setCount] = useState(0)
    const [person,setPerson] = useState({})
    
    let path = `https://rickandmortyapi.com/api/character`
    
    axios.get(path).then((response) => {
    const personagens = response.data.results
    setPerson(personagens[id]);
    setCount(personagens.length)
  });

    const change_id_more = ()=>{
        if(id>count-1){
            setId(0)
        }else{
            setId(id+1)
        }
    }

    const change_id_less = ()=>{
        if(id===0){
            setId(count-1)
        }else{
            setId(id-1)
        }
    }

    return (
        <div>
            <header>
                <h1>{person.name}</h1>
            </header>
            <main>
                <div>
                    <p>Status: {person.status}</p>
                    <p>Specie: {person.species}</p>
                    <p>Tipo: {person.type}</p>
                    <p>Genero: {person.gender}</p>
                </div>
                <div>
                    <button onClick={change_id_less}>
                        anterior
                    </button>
                </div>
                <div>
                    <button onClick={change_id_more}>
                        próximo
                    </button>
                </div>
            </main>       
        </div>
    )
}