import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Ziad El Bakry — Portfolio V2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex items-start justify-center py-8">
        <div className="w-full max-w-4xl px-4 sm:px-6">
          <Header />
          <main className="mt-8 space-y-12">
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="mt-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Ziad Mamdouh Mohamed El Bakry</footer>
        </div>
      </div>
    </>
  )
}
