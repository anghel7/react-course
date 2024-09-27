import { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import { Badge } from "@/components/ui/badge"


import './CountryDetailComponent.css'

const CountryDetailComponent: FC = () => {
  const [country, setCountry] = useState<Country>(COUNTRY);
  return (
    <>
      <div className='main-container'>
        <div className='detail-container'>
          <div className='flag-container'>
            <img className="profile-photo" src={country.flags.png} alt={"Carlie Anglemire"} />
          </div>
          <div className='info-container'>
            <p className='font-semibold text-2xl'>{country.name}</p>
            <div className='info-grid'>
              <div className='info-grid-sub-container'>
                <p><span className='font-semibold'>Native Name: </span>{country.nativeName}</p>
                <p><span className='font-semibold'>Population: </span>{country.population}</p>
                <p><span className='font-semibold'>Region: </span>{country.region}</p>
                <p><span className='font-semibold'>Sub Region: </span>{country.subregion}</p>
                <p><span className='font-semibold'>Capital: </span>{country.capital}</p>
              </div>
              <div className='info-grid-sub-container'>
                <p><span className='font-semibold'>Top Level Domain: </span>{country.topLevelDomain?.map((domain: string, index: number) => (
                  <span key={index}>{domain}</span>
                ))}</p>
                <p><span className='font-semibold'>Currencies: </span>{country.currencies?.map((currency: Currency, index: number) => (
                  <span key={index}>{currency.name}</span>
                ))}</p>
                <p><span className='font-semibold'>Languages: </span>{country.languages.map((lan: Language, index: number) => (
                  <span key={index}>{lan.name}</span>
                ))}</p>
              </div>
            </div>
            <div className='border-container'>
              <p>Border Countries:</p>
              {country.borders?.map((borderCountry: string, index: number) => (
                <Badge variant="outline" key={index}>{borderCountry}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CountryDetailComponent

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: any;//
  population: number;
  latlng?: number[];
  demonym: string;
  area?: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: Flags;
  currencies?: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs?: any[];
  cioc?: string;
  independent: boolean;
  gini?: number;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa?: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

export const COUNTRY: Country = {
  "name": "Afghanistan",
  "topLevelDomain": [".af"],
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "callingCodes": ["93"],
  "capital": "Kabul",
  "altSpellings": ["AF", "Afġānistān"],
  "subregion": "Southern Asia",
  "region": "Asia",
  "population": 40218234,
  "latlng": [33, 65],
  "demonym": "Afghan",
  "area": 652230,
  "timezones": ["UTC+04:30"],
  "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
  "nativeName": "افغانستان",
  "numericCode": "004",
  "flags": {
    "svg": "https://flagcdn.com/af.svg",
    "png": "https://flagcdn.com/w320/af.png"
  },
  "currencies": [
    {
      "code": "AFN",
      "name": "Afghan afghani",
      "symbol": "؋"
    }
  ],
  "languages": [
    {
      "iso639_1": "ps",
      "iso639_2": "pus",
      "name": "Pashto",
      "nativeName": "پښتو"
    },
    {
      "iso639_1": "uz",
      "iso639_2": "uzb",
      "name": "Uzbek",
      "nativeName": "Oʻzbek"
    },
    {
      "iso639_1": "tk",
      "iso639_2": "tuk",
      "name": "Turkmen",
      "nativeName": "Türkmen"
    }
  ],
  "translations": {
    "br": "Afghanistan",
    "pt": "Afeganistão",
    "nl": "Afghanistan",
    "hr": "Afganistan",
    "fa": "افغانستان",
    "de": "Afghanistan",
    "es": "Afganistán",
    "fr": "Afghanistan",
    "ja": "アフガニスタン",
    "it": "Afghanistan",
    "hu": "Afganisztán"
  },
  "flag": "https://flagcdn.com/af.svg",
  "regionalBlocs": [
    {
      "acronym": "SAARC",
      "name": "South Asian Association for Regional Cooperation"
    }
  ],
  "cioc": "AFG",
  "independent": true
};