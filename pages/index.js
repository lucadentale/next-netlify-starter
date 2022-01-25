import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript">
          function invokeNative() {
              MessageInvoker.postMessage('Trigger from Javascript code')
          }
        </script> 
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      <form>
            <input type="button" value="Click me!" onclick="invokeNative()" />
      </form> 
        <a href="hera2g://app/login?param1=token&param2=altrotoken">prova</a>
      </main>

      <Footer />
    </div>
  )
}
