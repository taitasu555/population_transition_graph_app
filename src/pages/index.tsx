import type { NextPage } from 'next'
import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import { APIURL } from '../common/const'
import axios from 'axios'

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
  console.log(data)
  return (
    <div>
      <Header title={'都道府県人口推移グラフ'} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
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
