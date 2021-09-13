```js
**Restaurants** = 
[
	{
		id: 123,
		name: "ABC",
		website: "www.abc.com",
		ETA: 25,
		ratings: 4.3,
		description: "FGDSFDGFS",
		avgBill2: 433,
		tags: ["American", "Chinese", "Healthy"],
		address: {
			locality: "AAA",
			line1: "GG",
			line2: "FGDG",
			phone: 4343
		},
		pic: "..............."		
	},
	{
		id: 234,
		name: "PQR",
		website: "www.pqr.com",
		ETA: 30,
		ratings: 4.6,
		description: "SDGFSD",
		avgBill2: 433,
		tags: ["Mexican", "Chinese", "Quick"],	
		address: {
			locality: "GDF",
			line1: "CC",
			line2: "QQ",
			phone: 1212
		},
		pic: "..............."	
	},
	{...},
	...
];
```

**Restaurant Data structure:**
```js
{
	id: ,
	name: "",
	website: "",
	ETA: ,
	ratings: ,
	description: "",
	avgBill2: ,
	tags: ["", "", ""],	
	address: {
		locality: "",
		line1: "",
		line2: "",
		phone: 
	},
	pic: "https://picsum.photos/500/350"
}
```

- Tags can be: *Healthy, Quick, South-Indian, Chinese, Japanese, Italian, Mexican, Punjabi*   
- locality can be: *Trenton, Qubec, Zodiac, Morrica, Neotran, Plazma*   
- Ratings range from: *1 to 5*
   
**TODO:**   
*Develop the web application using React, TypeScript, HTML and CSS:*
1. Show data in console [Fetch API]
2. Render restaurants cards
3. Search bar [Search on name]
4. Filter on Tags [Dropdown]
5. Sort on Name, ETA, ratings, location[from address] [Dropdown]
6. Show the restaurants from minPrice to maxPrice (Use dragger - slider) (Based on avgBill2) (minPrice - maxPrice)
7. Favorites [Mark the restaurant as favorites, Top Right - Checkbox]
8. On app, Top right [A slider when "ON", show the restaurants which are marked as fav][Persistent][localStorage]
9. Show all the address data in the card
10. Show the website and description in the card
11. Auto fill (Auto suggestions), When typed something in the search bar, show a div with suggested max-items to 5, as a auto suggestions listbox [Implement Debouncing on this]

**Extra points:**
1. Debounced function
2. Event delegation
3. _loadash functions use
4. Pagination
5. Multi filters
6. Hide restaurants