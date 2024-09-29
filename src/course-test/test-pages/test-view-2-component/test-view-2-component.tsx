import TestButtonComponent from '@/course-test/test-components/test-buton-component/test-button-component';
import TestCardComponent from '@/course-test/test-components/test-card-component/test-card-component';
import TestNavigationBarComponent from '@/course-test/test-components/test-navigation-bar-component/test-navigation-bar-component';
import { FC, useEffect, useState, } from 'react';
import { AxiosResponse } from 'axios';

const TestView2Component: FC = (props) => {
  const [list, setList] = useState<PokeItemListDto[]>([]);

  useEffect(() => {
    const getPoke = async () => {
      const response = await getPokeList();
      if (response.status == 200) {
        console.log('Poke list: ', response.data.results);
        setList(response.data.results)
      }
    }
    getPoke();

    getPokeListFetch().then(result=>{
      console.log('Executed');
    })
  }, []);

  return (
    <>
      <TestNavigationBarComponent title={'Title Nav Bar'}></TestNavigationBarComponent>
      <TestCardComponent title={'Card title'} description={'Card Description'}></TestCardComponent>
      <TestButtonComponent content={'Content Button'}></TestButtonComponent>

    </>
  )
}

export default TestView2Component

type PokeData = {
  count: number,
  next: string,
  previous: string,
  results: PokeItemListDto[]
}

interface PokeItemListDto {
  name: string,
  url: string
}

const getPokeList = async () => {
  try {
    const response: AxiosResponse<PokeData, any> = await pokeApi.get("pokemon");
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}

import axios from "axios";
export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
    headers:{
        "Content-Type": "application/json"
    }
});

/**************************************** */

const getPokeListFetch = async () => {
  const url = "https://pokeapi.co/api/v2/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log('Get pockedata with fetch: ', json);
    
  } catch (error) {
    console.error(error);
  }
}
