import axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PD2AAOwXoyiH0ISb3wzDjeNzoUmrlWSO3plfaW5an1mzy9odrD60iO7urzOtCNo1tM2zgx8WZFCTKarSg-r5BhEZDwtEgnM1cld-cxLV4yz1097IA1stRvUgbhbaYXYx'
    }
})