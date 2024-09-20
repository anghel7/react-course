import { FC } from 'react';
const PokeDetail: FC<void> = () => {
  return (
    <>
     
    </>
  )
};

export default PokeDetail

export const getDatail = () => {
  try {
    const response = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    return response;
  } catch (error) {
    throw new Error("No se pudo obtener el pokemon");
  }
}

export const getDatailFetch = () => {
  
    const response = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error)
}