import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Diego</title>
      </Head>
      <div className='body'>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
