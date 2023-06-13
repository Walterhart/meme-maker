import Image from 'next/image'
import styles from '../styles/page.module.css'
import MemeMaker from '@/components/MemeMaker'

export default function Home() {
  return (

    <main className={styles.main}>
    <MemeMaker/>
    </main>
  )
}
