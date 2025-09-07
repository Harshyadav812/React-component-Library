import { useState } from 'react'
import "./index.css"
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'

function App() {


  return (
    <main>
      <Badge color="red">
        Badge 1
      </Badge >
      <Badge color={"purple"} shape='pill'>
        <h1>Badge 2</h1>
      </Badge>
      <Banner status={"error"} title={"Attention"} />
    </main>
  )
}


export default App
