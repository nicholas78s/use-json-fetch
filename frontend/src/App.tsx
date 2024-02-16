import './App.css'
import { JsonFetch } from './components/JsonFetch'

function App() {
  return (
    <>
      <JsonFetch path='data' />
      <JsonFetch path='error' />
      <JsonFetch path='loading' />
    </>
  )
}

export default App
