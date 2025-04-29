'use client'

import { useEffect, useState } from 'react'
import CountryInfo from './components/CountryInfo'
import CountryList from './components/CountryList'

import './globals.css'

interface Country {
	name: string
	borders: string[]
	capital: string
	population: number
	flag: string
	code: string
}

export default function Home() {
	const [countries, setCountries] = useState<Country[]>([])
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => {
				const formattedCountries = data.map((country: any) => ({
					name: country.name.common,
					borders: country.borders || [],
					capital: country.capital ? country.capital[0] : 'Неизвестно',
					population: country.population,
					flag: country.flags.png,
					code: country.cca3,
				}))
				setCountries(formattedCountries)
			})
			.catch(error => {
				console.error('Ошибка:', error)
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
