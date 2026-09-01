import Hero from '../components/Hero'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('Floristería Rossi')

  return <Hero />
}

export default Home
