import { FC, useEffect, useState } from 'react';
import { api } from './api';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AxiosResponse } from 'axios';


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

const PokeList: FC = () => {
  const [list, setList] = useState<PokeItemListDto[]>([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const getPoke = async () => {
      const response = await getPokeList();
      if (response.status == 200) {
        setList(response.data.results)
        setCount(response.data.count)
      }
    }
    getPoke();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: 'center' }}>
        <h1>Poke List</h1>
      </div>
      <Table className="w-[300px]">
        <TableCaption>A list of pokes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Poke Name</TableHead>
            <TableHead className="text-right">Poke Url</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((poke, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{poke.name}</TableCell>
              <TableCell className="text-right"><a href="#" className='text-sky-600'>{poke.url}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{count}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}

const getPokeList = async () => {
  try {
    const response: AxiosResponse<PokeData, any> = await api.get("pokemon");
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
}

export default PokeList