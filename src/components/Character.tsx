import { useState } from 'react'
import Modal from 'react-modal'

interface CharacterProps {
    character: {
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
}

Modal.setAppElement('#root')

export function Character({ character }: CharacterProps){
    const [isNewCharacterInfoModalOpen, setIsNewCharacterInfoModalOpen] = useState(false)

    function handleOpenCharacterInfoModal(){
        setIsNewCharacterInfoModalOpen(true)
    }
    
    function handleCloseCharacterInfoModal(){
          setIsNewCharacterInfoModalOpen(false)
    }

    return(
        <>
            <div
                onClick={handleOpenCharacterInfoModal}
                className="
                bg-gray-700 w-[275px] flex flex-col items-center text-center
                py-10 px-2 rounded-md cursor-pointer
            ">
                <img 
                    src={character.image} 
                    alt={character.name} 
                    className="rounded-full w-[200px] mb-6"
                />

                <div>
                    <h1 className="text-lg">
                        <span className="text-gray-500 mr-2">
                            Nome:
                        </span>
                        {character.name}
                    </h1>
                    <span>
                        <span className="text-gray-500 mr-2">
                            Espécie:
                        </span>
                        {character.species}
                    </span>
                </div>
            </div>

            <Modal 
                isOpen={isNewCharacterInfoModalOpen}
                onRequestClose={handleCloseCharacterInfoModal}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(26, 26, 26, 0.8)",
                    },
                    content: {
                        width: "1000px",
                        position: "absolute",
                        top: 40,
                        bottom: 40,
                        left: 170,
                        right: 170,
                        backgroundColor: "#262626",
                        border: 0
                    }
                }}
            >
                <div className="w-full max-w-[800px] h-full max-h-[450px] flex items-center flex-col justify-center mx-auto mt-8">
                    <h1 className="text-4xl font-black mb-16">
                        Cartão de Identificação Universal
                    </h1>

                    <div className="flex items-center justify-center p-10 rounded-lg bg-gray-800">
                        <img 
                            src={character.image} 
                            alt={character.name} 
                            className="w-[250px] mr-16 rounded-md"
                        />

                        <div>
                            <p className="text-md text-gray-500 italic mb-2">
                                Número de identificação universal: {character.id}
                            </p>
                            <h1 className="text-4xl mb-2 font-bold">
                                {character.name}
                            </h1>   
                            <span className="text-gray-500">
                                Espécie: {character.species}
                            </span>

                            <p className="mt-4 text-lg text-gray-500">
                                Origem: {character.origin.name}
                            </p>

                            <p className="text-lg text-gray-500">
                                Localização: {character.location.name}
                            </p>
                            
                            <p className="mt-6 text-xl font-bold">
                                Status: {character.status}
                            </p>                            
                        </div>
                    </div>

                    <div></div>
                </div>
            </Modal>
        </>
    )
}