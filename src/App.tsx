import React from 'react'
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

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
        <Button style={{ margin: '0 10px' }} onClick={() => { alert('click this button') }}>Hello</Button>
        <Button style={{ margin: '0 10px' }} disabled>Hello Disabled</Button>
        <Button style={{ margin: '0 10px' }} btnType={ButtonType.Primary} size={ButtonSize.Large} autoFocus>Large Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType={ButtonType.Primary} size={ButtonSize.Small}>Small Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType={ButtonType.Link} target="_blank" href="http://www.google.com">Google Link</Button>
        <Button style={{ margin: '0 10px' }} btnType={ButtonType.Link} href="http://www.google.com" disabled>Disabled Link</Button>
        <hr/>
        <Menu defaultIndex={0} onSelect={(index) => { alert(index) }} mode="vertical">
          <MenuItem index={0}>
            cool link0
          </MenuItem>
          <MenuItem disabled index={1}>
            cool link1
          </MenuItem>
          <MenuItem index={2}>
            cool link2
          </MenuItem>
        </Menu>
        <hr/>
        <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
          <MenuItem index={0}>
            cool link0
          </MenuItem>
          <MenuItem disabled index={1}>
            cool link1
          </MenuItem>
          <MenuItem index={2}>
            cool link2
          </MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App
