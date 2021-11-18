import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { APIURL } from '../common/const'
import axios from 'axios'
import { PrefecturesList } from '../components/List/PrefecturesList'
import { Footer } from '../components/Footer/Footer'

type Headers = {
  'X-API-KEY': any
}

const Home: NextPage = () => {
  const headers: Headers = {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  }
  const fetcher = async (url: string) =>
    await axios.get(url, { headers: headers }).then((res) => res.data)

  const { data, error } = useSWR(`${APIURL}/api/v1/prefectures`, fetcher)
  if (error) return <div className={styles.caution}>failed to load</div>
  if (!data) return <div className={styles.caution}>Loading now...</div>
  return (
    <div>
      <Header title={'都道府県人口推移グラフ'} />
      <main className={styles.main}>
        <PrefecturesList prefectures={data.result} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
