import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const category = () => {
  const param = useParams()
  const navigate = useNavigate()
  
  return (
    <div>
      <p>Ini Halaman Category {param.name.toLocaleUpperCase()}</p>
      <button onClick={()=> navigate('/home')}>Kembali Home</button>
    </div>
  )
}

export default category