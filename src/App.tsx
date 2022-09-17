import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";

import { CharacterList } from "./components/CharacterList"
import { EmptyCharacterList } from "./components/EmptyCharacterList"
import { Header } from "./components/Header"

import 'react-toastify/dist/ReactToastify.css';

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

function App() {
  const [characterList, setCharacterList] = useState<Character[]>([])
  const [character, setCharacter] = useState('')

  const [isOrderById, setIsOrderById] = useState(true)

  function sortByName(a: Character, b:Character){
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }

  function sortById(a: Character, b:Character){
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  }

  async function handleSearchCharacter(event: FormEvent){
    event.preventDefault()

    if(character){
      let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)

      if(response.ok){
        let data = await response.json()

        const { results } = data

        setCharacterList(results)
        localStorage.setItem('@characters-list', JSON.stringify(results))
      } else {
        toast.error('Personagem não encontrado', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }

    setCharacter('')
  }

  function handleCharacterChange(event: ChangeEvent<HTMLInputElement>){
    setCharacter(event?.target.value)
  }

  function handleChangeCharacterListOrder(){
    setIsOrderById(!isOrderById)

    orderBy(!isOrderById)
  }

  function orderBy(isOrderById: boolean){
    if(isOrderById === false){
      setCharacterList(characterList.sort(sortByName))
    } else {
      setCharacterList(characterList.sort(sortById))
    }
  }

  function handleBackHome(){
    setCharacterList([])
    setIsOrderById(true)

    localStorage.removeItem('@characters-list')
  }

  useEffect(() => {
    const storageCharacterList = JSON.parse(localStorage.getItem('@characters-list') as string)

    setCharacterList(storageCharacterList)
  }, [])

  return (
    <div className="w-full h-full">
      <Header />

      <div className="w-full max-w-[900px] flex flex-col items-center justify-center mx-auto">
        <form 
          onSubmit={handleSearchCharacter} 
          className="w-full max-w-[650px] mt-[-25px] px-6 flex items-center justify-center"
        >
          <input 
            type="text"
            onChange={handleCharacterChange}   
            value={character}
            placeholder="Digite o nome do personagem"
            className="
              w-full px-4 py-3 bg-gray-700 border-[1px] border-gray-900 rounded-md
              shadow-sm placeholder:text-gray-500 text-[13px] md:text-base
            "
          />
          <button 
            type="submit"
            disabled={!character}
            className="
                flex items-center justify-center py-3 px-4 ml-2 rounded-md 
                font-semibold bg-green-500 transition-all hover:brightness-75
                disabled:brightness-50 cursor-not-allowed
              "
          >            
            Pesquisar
          </button>
        </form>

        { characterList?.length > 0 ? (
          <>
            <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 px-6">
              <h1 className="text-lg">
                {characterList.length} personagens encontrados
              </h1>
              <div className="flex items-center justify-center my-6">
                <button 
                  onClick={handleChangeCharacterListOrder}
                  className="
                    flex items-center justify-center py-3 px-4 rounded-md 
                    font-semibold bg-gray-700 transition-all hover:brightness-90
                  "
                >
                  {isOrderById ? "Ordenar pelo Nome" : "Ordenar pelo ID"}
                </button>
              </div>

              <button 
                onClick={handleBackHome}
                className=" 
                  flex items-center justify-center py-3 px-4 rounded-md 
                  font-semibold bg-gray-700 transition-all hover:brightness-90
                "
              >
                Voltar para Home
              </button>
            </div>

            <CharacterList characterList={characterList} />
          </>
        ) : (
          <EmptyCharacterList />
        )}
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
