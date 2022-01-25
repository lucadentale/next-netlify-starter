import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
 var messageInvoker; 
  function invokeNative() {
    messageInvoker.postMessage('Trigger from Javascript code');
  }
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <form>
        <input type="button" value="Click me!" onclick={invokeNative()} />
        </form>
      </main>

      <Footer/>
    </div>
  )
}

