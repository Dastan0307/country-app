'use client'

import { useEffect, useState } from 'react'
import CountryInfo from './components/CountryInfo'
import CountryList from './components/CountryList'

import { Country } from '@/types/types'
import './globals.css'

export default function Home() {
	const [countries, setCountries] = useState<Country[]>([])
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => {
				const formattedCountries = data.map((country: any) => ({
					name: country.name.common,
					borders: country.borders
						? country.borders.map((code: string) => {
								const neighbor = data.find((c: any) => c.cca3 === code)
								return neighbor ? neighbor.name.common : code
						  })
						: [],
					capital: country.capital ? country.capital[0] : 'Неизвестно',
					population: country.population,
					flag: country.flags.png,
					code: country.cca3,
				}))
				setCountries(formattedCountries)
			})
	}, [])

	return (
		<div className='container'>
			<CountryList
				countries={countries}
				onSelectCountry={setSelectedCountry}
				selectedCountryCode={selectedCountry ? selectedCountry.code : null}
			/>
			<CountryInfo country={selectedCountry} />
		</div>
	)
}
