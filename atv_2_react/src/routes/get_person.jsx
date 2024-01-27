import axios from 'axios'
import { useState } from 'react'

export function Person(){
    const [id,setId] = useState(0)

    let path = `https://rickandmortyapi.com/api/character/${id}`

    personagem = axios.get(path)

    name_person = personagem.name
    status_person = personagem.status
    specie_person = personagem.species
    type_person = personagem.type
    gender_person = personagem.gender
    
    const [name,setName] = useState(name_person)
    const [status, setStatus] = useState(status_person)
    const [specie,setSpecie] = useState(specie_person)
    const [type,setType] = useState(type_person)
    const [gender,setGender] = useState(gender_person)

    const change_id_more = ()=>{
        if(id>826){
            setId(0)
        }else{
            setId(id+1)
        }
    }

    const change_id_less = ()=>{
        if(id<0){
            setId(826)
        }else{
            setId(id-1)
        }
    }

    

    return (
        <div>
            <h1>{name_person}</h1>
            <div>
                <p>Status: {name}</p>
                <p>Specie: {specie}</p>
                <p>Tipo: {type}</p>
                <p>Genero: {gender}</p>
            </div>
            <div>
                <button onClick={change_id_less}>
                    anterior
                </button>
                <button onClick={change_id_more}>
                    próximo
                </button>
            </div>
        </div>
    )
}