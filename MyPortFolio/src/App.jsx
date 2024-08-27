
import './App.css'
import {ThemeProvider} from './context/ThemeContext'
 
import Index from './Router'

function App() {


  return (
    <div className='main-body' >
      <ThemeProvider >
        <Index />
      </ThemeProvider>
    </div>
  )
}

export default App
