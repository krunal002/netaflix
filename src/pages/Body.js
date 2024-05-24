import { Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Browse } from './Browse'

export const Body = () => {
  return (
    <div>
        <Routes>
            <Route path="/browse" element={<Login/>}/>
            <Route path="/" element={<Browse/>}/>
        </Routes>
    </div>
  )
}
