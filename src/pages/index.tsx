import type { NextPage } from 'next'
import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { APIURL } from '../common/const'
import axios from 'axios'
import { PrefecturesList } from '../components/List/PrefecturesList'

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
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading now...</div>
  return (
    <div>
      <Header title={'都道府県人口推移グラフ'} />
      <main className={styles.main}>
        <PrefecturesList prefectures={data.result} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
