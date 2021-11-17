import React, { FC } from 'react'
import Head from 'next/head'
import styles from '../../styles/components/header.module.css'

type Props = {
  title: string
}

export const Header: FC<Props> = (props) => {
  const { title } = props
  return (
    <>
      <Head>{title}</Head>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>都道府県人口推移グラフ</h1>
      </div>
    </>
  )
}
