import { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const CountryListComponent: FC = () => {
  const [list, setList] = useState<Country[]>(COUNTRIES);
  return (
    <>
      <h1>List Countries Component</h1>
      {list.map((country: Country) => (
        <Card className="w-[250px]">
          <CardContent>
            <p>{country.name}</p>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital:{country.capital}</p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default CountryListComponent

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

export const COUNTRIES: Country[] = [
  {
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
  },
  {
    "name": "Åland Islands",
    "topLevelDomain": [".ax"],
    "alpha2Code": "AX",
    "alpha3Code": "ALA",
    "callingCodes": ["358"],
    "capital": "Mariehamn",
    "altSpellings": ["AX", "Aaland", "Aland", "Ahvenanmaa"],
    "subregion": "Northern Europe",
    "region": "Europe",
    "population": 28875,
    "latlng": [60.116667, 19.9],
    "demonym": "Ålandish",
    "area": 1580,
    "timezones": ["UTC+02:00"],
    "nativeName": "Åland",
    "numericCode": "248",
    "flags": {
      "svg": "https://flagcdn.com/ax.svg",
      "png": "https://flagcdn.com/w320/ax.png"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "translations": {
      "br": "Åland",
      "pt": "Ilhas de Aland",
      "nl": "Ålandeilanden",
      "hr": "Ålandski otoci",
      "fa": "جزایر الند",
      "de": "Åland",
      "es": "Alandia",
      "fr": "Åland",
      "ja": "オーランド諸島",
      "it": "Isole Aland",
      "hu": "Åland-szigetek"
    },
    "flag": "https://flagcdn.com/ax.svg",
    "regionalBlocs": [
      {
        "acronym": "EU",
        "name": "European Union"
      }
    ],
    "independent": false
  },
  {
    "name": "Albania",
    "topLevelDomain": [".al"],
    "alpha2Code": "AL",
    "alpha3Code": "ALB",
    "callingCodes": ["355"],
    "capital": "Tirana",
    "altSpellings": ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
    "subregion": "Southern Europe",
    "region": "Europe",
    "population": 2837743,
    "latlng": [41, 20],
    "demonym": "Albanian",
    "area": 28748,
    "gini": 33.2,
    "timezones": ["UTC+01:00"],
    "borders": ["MNE", "GRC", "MKD", "UNK"],
    "nativeName": "Shqipëria",
    "numericCode": "008",
    "flags": {
      "svg": "https://flagcdn.com/al.svg",
      "png": "https://flagcdn.com/w320/al.png"
    },
    "currencies": [
      {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }
    ],
    "translations": {
      "br": "Albania",
      "pt": "Albânia",
      "nl": "Albanië",
      "hr": "Albanija",
      "fa": "آلبانی",
      "de": "Albanien",
      "es": "Albania",
      "fr": "Albanie",
      "ja": "アルバニア",
      "it": "Albania",
      "hu": "Albánia"
    },
    "flag": "https://flagcdn.com/al.svg",
    "regionalBlocs": [
      {
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement"
      }
    ],
    "cioc": "ALB",
    "independent": true
  },
  {
    "name": "Algeria",
    "topLevelDomain": [".dz"],
    "alpha2Code": "DZ",
    "alpha3Code": "DZA",
    "callingCodes": ["213"],
    "capital": "Algiers",
    "altSpellings": ["DZ", "Dzayer", "Algérie"],
    "subregion": "Northern Africa",
    "region": "Africa",
    "population": 44700000,
    "latlng": [28, 3],
    "demonym": "Algerian",
    "area": 2381741,
    "gini": 27.6,
    "timezones": ["UTC+01:00"],
    "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
    "nativeName": "الجزائر",
    "numericCode": "012",
    "flags": {
      "svg": "https://flagcdn.com/dz.svg",
      "png": "https://flagcdn.com/w320/dz.png"
    },
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }
    ],
    "translations": {
      "br": "Aljeria",
      "pt": "Argélia",
      "nl": "Algerije",
      "hr": "Alžir",
      "fa": "الجزایر",
      "de": "Algerien",
      "es": "Argelia",
      "fr": "Algérie",
      "ja": "アルジェリア",
      "it": "Algeria",
      "hu": "Algéria"
    },
    "flag": "https://flagcdn.com/dz.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherNames": [
          "الاتحاد الأفريقي",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      },
      {
        "acronym": "AL",
        "name": "Arab League",
        "otherNames": [
          "جامعة الدول العربية",
          "Jāmiʻat ad-Duwal al-ʻArabīyah",
          "League of Arab States"
        ]
      }
    ],
    "cioc": "ALG",
    "independent": true
  },
  {
    "name": "American Samoa",
    "topLevelDomain": [".as"],
    "alpha2Code": "AS",
    "alpha3Code": "ASM",
    "callingCodes": ["1"],
    "capital": "Pago Pago",
    "altSpellings": ["AS", "Amerika Sāmoa", "Amelika Sāmoa", "Sāmoa Amelika"],
    "subregion": "Polynesia",
    "region": "Oceania",
    "population": 55197,
    "latlng": [-14.33333333, -170],
    "demonym": "American Samoan",
    "area": 199,
    "timezones": ["UTC-11:00"],
    "nativeName": "American Samoa",
    "numericCode": "016",
    "flags": {
      "svg": "https://flagcdn.com/as.svg",
      "png": "https://flagcdn.com/w320/as.png"
    },
    "currencies": [
      {
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }
    ],
    "languages": [
      {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      },
      {
        "iso639_1": "sm",
        "iso639_2": "smo",
        "name": "Samoan",
        "nativeName": "gagana fa'a Samoa"
      }
    ],
    "translations": {
      "br": "Samoa Amerikan",
      "pt": "Samoa Americana",
      "nl": "Amerikaans Samoa",
      "hr": "Američka Samoa",
      "fa": "ساموآی آمریکا",
      "de": "Amerikanisch-Samoa",
      "es": "Samoa Americana",
      "fr": "Samoa américaines",
      "ja": "アメリカ領サモア",
      "it": "Samoa Americane",
      "hu": "Amerikai Szamoa"
    },
    "flag": "https://flagcdn.com/as.svg",
    "cioc": "ASA",
    "independent": false
  },
  {
    "name": "Andorra",
    "topLevelDomain": [".ad"],
    "alpha2Code": "AD",
    "alpha3Code": "AND",
    "callingCodes": ["376"],
    "capital": "Andorra la Vella",
    "altSpellings": ["AD", "Principality of Andorra", "Principat d'Andorra"],
    "subregion": "Southern Europe",
    "region": "Europe",
    "population": 77265,
    "latlng": [42.5, 1.5],
    "demonym": "Andorran",
    "area": 468,
    "timezones": ["UTC+01:00"],
    "borders": ["FRA", "ESP"],
    "nativeName": "Andorra",
    "numericCode": "020",
    "flags": {
      "svg": "https://flagcdn.com/ad.svg",
      "png": "https://flagcdn.com/w320/ad.png"
    },
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }
    ],
    "languages": [
      {
        "iso639_1": "ca",
        "iso639_2": "cat",
        "name": "Catalan",
        "nativeName": "català"
      }
    ],
    "translations": {
      "br": "Andorra",
      "pt": "Andorra",
      "nl": "Andorra",
      "hr": "Andora",
      "fa": "آندورا",
      "de": "Andorra",
      "es": "Andorra",
      "fr": "Andorre",
      "ja": "アンドラ",
      "it": "Andorra",
      "hu": "Andorra"
    },
    "flag": "https://flagcdn.com/ad.svg",
    "cioc": "AND",
    "independent": true
  },
];