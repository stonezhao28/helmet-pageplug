export default {
	func1: () => {
		const firstDate = new Date();
		const secondDate = new Date();

		const data = [{
			id:1,
			name:"video",
			createAt:firstDate.toUTCString(),
			views:12
		},
									{
										id:2,
										name:"second video",
										createAt:secondDate.toUTCString(),
										views:24
									}
								 ]

		return data
	}
}