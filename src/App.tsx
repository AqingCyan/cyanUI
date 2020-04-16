import React from 'react'
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

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
        <Button style={{ margin: '0 10px' }} btnType="primary" size="lg" autoFocus>Large Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType="primary" size="sm">Small Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType="danger" size="sm">Danger Hello</Button>
        <Button style={{ margin: '0 10px' }} btnType="link" target="_blank" href="http://www.google.com">Google Link</Button>
        <Button style={{ margin: '0 10px' }} btnType="link" href="http://www.google.com" disabled>Disabled Link</Button>
        <hr/>
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link0
          </MenuItem>
          <MenuItem disabled>
            cool link1
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link2
          </MenuItem>
        </Menu>
        <hr/>
        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }}>
          <MenuItem>
            cool link0
          </MenuItem>
          <MenuItem disabled>
            cool link1
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  )
}

export default App
