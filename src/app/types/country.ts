import { type TypeRegion } from '@/app/types/regions';

type TypeCurrency = {
   code: string;
   name: string;
   symbol: string;
};
type TypeLanguage = {
   iso639_1: string;
   iso639_2: string;
   name: string;
   nativeName: string;
};

type TypeInfo = {
   title: string;
   description: string;
};

export type TypeCountry = {
   name: string;
   nativeName: string;
   flag: string;
   flags: {
      png: string;
      svg: string;
   };
   region: TypeRegion;
   subregion: string;
   capital: string;
   population: number;
   topLevelDomain: string[];
   borders: string[];
   currencies: TypeCurrency[];
   languages: TypeLanguage[];
};

export type TypeCountryInfo = {
   img: string;
   name: string;
   info: TypeInfo[];
};
