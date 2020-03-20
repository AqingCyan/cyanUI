import React from 'react'
import Button, {ButtonSize, ButtonType} from './components/Button/button'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <hr/>
        <Button>Hello</Button>
        <Button disabled>Hello Disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com">Google Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com" disabled>Disabled Link</Button>
      </header>
    </div>
  )
}

export default App
