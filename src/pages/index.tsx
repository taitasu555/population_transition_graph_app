import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import { PrefecturesList } from '../components/List/PrefecturesList'
import { Footer } from '../components/Footer/Footer'
import { getPrefectures } from '../lib/fetch'

const Home: NextPage = () => {
  const [prefectures, setPrefectures] = useState<any>([])
  useEffect(() => {
    ;(async () => {
      const data = await getPrefectures()
      setPrefectures(data)
    })()
  }, [])
  return (
    <div>
      <Header title={'都道府県人口推移グラフ'} />
      <main className={styles.main}>
        <PrefecturesList prefectures={prefectures} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
