const fetch = require('node-fetch');

async function fetchCountries() {
	try {
		const result = await fetch('https://restcountries.com/v3/all');
		const data = await result.json();

		const arr = data?.map((e) => {
			return {
				id: e.cca3,
				name: e.name.common,
				image: e.flags[0],
				continent: e.region,
				capital: e.capital ? e.capital[0] : 'no tiene',
				subRegion: e.subregion,
				area: e.area,
				population: e.population,
			};
		});

		return arr;
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { fetchCountries };
