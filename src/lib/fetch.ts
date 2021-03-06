import { HeadersTypes } from './../types/types'
import { APIURL } from '../common/const'
import axios from 'axios'

const headers: HeadersTypes = {
  'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
}

export const getChart = async (prefectureCode: number) => {
  const response = await axios.get(
    `${APIURL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefectureCode}`,
    {
      headers,
    }
  )
  return response.data.result.data[0].data
}

export const getPrefectures = async () => {
  const response = await axios.get(`${APIURL}/api/v1/prefectures`, {
    headers,
  })
  return response.data.result
}
