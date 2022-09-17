import { Character } from "./Character"

interface Character {
    id: number
    name: string
    image: string
    species: string
    location: {
        name: string
    }
    origin: {
        name: string
    }
    status: string
}

interface CharacterListProps {
    characterList: Character[]    
}

export function CharacterList({ characterList }: CharacterListProps){
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10">
                {characterList.map(character => {
                    return(
                        <Character
                            key={character.id}
                            character={character}
                        />
                    )
                })}
            </div>            
        </>
    )
}