import { useState } from 'react'
import "./index.css"
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'

function App() {


  return (
    <main>
      <Badge color={"purple"} shape='pill'>
        <h1>Badge 1</h1>
      </Badge>
      <Banner status={"error"} title={"Attention"} />

      <Card>
        <Card.Icon>
          <img src="/src/assets/brand.svg" alt="brand icon" />
        </Card.Icon>
        <Card.Content>
          <h3>Easy Deployment</h3>
          <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Card.Content>
      </Card>
    </main>
  )
}


export default App
