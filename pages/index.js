import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`


  const customLoader = ({ src }) => {
    return src
  }

export default function Home() {
  return (
    <><div style={{ textAlign: 'center' }}>
      <Image src="/vercel.svg" alt="Vercel Logo" width={500} height={500}  loader={customLoader}/>
    </div>
    <div style={{ textAlign: 'center' }}>
    <Image src="/mountains.jpg" layout="fixed"
    loader={customLoader}
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={rgbDataURL(237, 181, 100)} />
      </div>
      <div style={{ textAlign: 'center' }}>
      <Image src="https://cdn.pixabay.com/photo/2022/04/23/07/38/lin-zhi-7151302_960_720.jpg"
        width={500} height={500} loader={customLoader} />
        </div>
        </>
    
  )
}
