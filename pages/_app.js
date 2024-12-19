import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Diego</title>
        <link rel="icon" href="/logo_.png" alt="Logo" width={32} height={32} />
      </Head>
      <div className='body'>
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
