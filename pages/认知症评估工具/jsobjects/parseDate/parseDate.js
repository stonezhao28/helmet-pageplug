export default {
	paseDate:() => {
		const date = getDate.func1();
		const transformedData = date.map((item) => {
			item.createAt = moment(item.createAt).format("MMM Do YYYY")
			return [item]
		} )
		return transformedData;
	}
}