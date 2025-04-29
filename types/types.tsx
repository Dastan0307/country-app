export interface Country {
	name: string
	borders: string[]
	capital: string
	population: number
	flag: string
	code: string
}


 export interface CountryInfoProps {  
	country: Country | null;  
  }  
  

export interface CountryListProps {
	countries: Country[]
  onSelectCountry: (country: Country | null) => void; 
	selectedCountryCode: string | null
}
