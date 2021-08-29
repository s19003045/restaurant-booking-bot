const mockAPI = require("./mockData")

const restaurantType = {
	new: "new",
	all: "all",
};

const restaurantController = {
	getRestaurants: (req, res) => {
		console.log(req.query)
		const { type, limit, offset } = req.query
		const safeLimit = parseInt(limit)  || 20
		const safeOffset = parseInt(offset) || 0

		const data = type === restaurantType.all ?
			mockAPI.allRestList.slice(safeOffset, safeOffset + safeLimit) :
			mockAPI.newRestList.slice(safeOffset, safeOffset + safeLimit)
		res.json({
			name: "getRestaurants",
			count: data.length,
			data: data
		})
	},
	getRestaurant: (req, res) => {
		console.log(req.query)
		const { id } =  req.query

		const randomId = Math.floor(Math.random() * mockAPI.allRestList.length);
		const data = mockAPI.allRestList[randomId];

		res.json({
			name: "getRestaurant",
			count: data.length,
			data: data
		})
	},
	getMenus: (req, res) => {
		console.log(req.query)
		const { id } = req.query

		const normalImgUrls = mockAPI.genFakeImgUrls(10, mockAPI.imgSize.normal.name);
		const thumbImgUrls = mockAPI. genFakeImgUrls(10, mockAPI.imgSize.small.name);
		const largeImgUrls = mockAPI.genFakeImgUrls(10, mockAPI.imgSize.large.name);
		res.json({
			name: "getMenus",
			data: {
				normalImgUrls, thumbImgUrls, largeImgUrls
			}
		})
	},
	searchRestByKeyword:(req, res) => {
		console.log(req.query)
		const { keyword, limit, offset } = req.query
		const safeLimit = parseInt(limit)  || 20
		const safeOffset = parseInt(offset) || 0

		const data = mockAPI.findRestByKeyword(mockAPI.allRestList, keyword)
			.slice(safeOffset, safeOffset + safeLimit)
		res.json({
			name: "searchRestByKeyword",
			count: data.length,
			data: data
		})
	},
}

module.exports = restaurantController