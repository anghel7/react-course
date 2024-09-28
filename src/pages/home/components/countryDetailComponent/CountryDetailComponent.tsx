import { FC, useEffect, useState, SyntheticEvent } from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate, useParams } from 'react-router-dom';
import './CountryDetailComponent.css'
import { Country, Currency, Language } from '@/models';
import { COUNTRIES } from '@/mock-data';


const CountryDetailComponent: FC = () => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const { countryIndex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (countryIndex != undefined) {
      setCountry(COUNTRIES_LIST[Number(countryIndex)]);
    }
  }, []);

  const handleClick = (event: SyntheticEvent) => {
    navigate(`/`);
  }

  return (
    <>
      {country != undefined
        ?
        <div className='main-container'>
          <div className='back-container'>
            <Button variant="secondary" onClick={handleClick}>Back</Button>
          </div>
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
                  <p><span className='font-semibold'>Currencies: </span>{country.currencies?.map((currency: Currency
                    , index: number) => (
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
        :
        <h1>Loading ...</h1>
      }

    </>
  )
}

export default CountryDetailComponent


const COUNTRIES_LIST: Country[] = COUNTRIES;