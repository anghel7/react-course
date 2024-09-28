import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"


import './CountryListComponent.css'
import { Country } from '@/models';
import { COUNTRIES } from '@/mock-data';
import { SyntheticEvent } from 'react'

const CountryListComponent: FC = () => {
  const [list, setList] = useState<Country[]>(COUNTRIES_LIST);
  const navigate = useNavigate();

  const handleClick = (event: SyntheticEvent, index: number) => {
    navigate(`/country/detail/${index}`);
  }

  return (
    <>
      <div className='tool-bar'>
        <div className="w-[180px]">
          <Input type="text" placeholder="Search for a country ..." />
        </div>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Region</SelectLabel>
              <SelectItem value="Asia">Asia</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Africa">Africa</SelectItem>
              <SelectItem value="Oceania">Oceania</SelectItem>
              <SelectItem value="Americas">Americas</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="country-list">
        {list.map((country: Country, index: number) => (
          <Card key={index}>
            <CardHeader>
              <img className="profile-photo" src={country.flags.png} alt={"Carlie Anglemire"} onClick={(e) => { handleClick(e, index) }} />
            </CardHeader>
            <CardContent>
              <p className='font-bold'>{country.name}</p>
              <p> <span className='font-semibold'>Population: </span>{country.population}</p>
              <p> <span className='font-semibold'>Region: </span>{country.region}</p>
              <p> <span className='font-semibold'>Capital: </span>{country.capital}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default CountryListComponent

const COUNTRIES_LIST: Country[] = COUNTRIES;