require('dotenv').config()
const axios = require ('axios')
const { APPID, PROTOCOL, BASE_URL, UNITS, LANGUAGE } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=Itu&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}`

axios.get(url)
.then(res => console.log(res.data))

/*console.log(url)

console.log(process.env.API_KEY)

const API_KEY = process.env.API_KEY
const PROTOCOL = process.env.PROTOCOL
const BASE_URL = process.env.BASE_URL

const url = "api.openweathermap.org/data/2.5/forecast?q=Itu&appid=" + process.env.API_KEY*/




