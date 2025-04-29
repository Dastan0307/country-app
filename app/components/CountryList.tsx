import { CountryListProps } from '@/types/types'
import React from 'react'
import '../../styles/country.scss'

const CountryList: React.FC<CountryListProps> = ({
	countries,
	onSelectCountry,
	selectedCountryCode,
}) => {
	return (
		<div className='sidebar'>
			<h2>Страны</h2>
			<ul>
				{countries.map(country => (
					<li
						key={country.code}
						onClick={() => onSelectCountry(country)}
						style={{
							cursor: 'pointer',
							backgroundColor:
								country.code === selectedCountryCode
									? '#d0e8ff'
									: 'transparent',
						}}
					>
						{country.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CountryList
