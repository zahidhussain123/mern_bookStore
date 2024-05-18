import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AuthGetUser from "./context/auth.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthGetUser>
  <div className='dark:bg-slate-900 dark:text-white'>
    <App />
  </div>
  </AuthGetUser>
  </BrowserRouter>,
)
