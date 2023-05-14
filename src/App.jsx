import { useState } from 'react'
import reactLogo from './assets/react.svg'
import youtube from './api/youtube'
import {Searchbar,Videolist,Videodetail} from './Component/index'
import './App.css'
import { Grid } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Grid container justify ='center' spacing={16}>
      <Grid item xs={12}>
      <Grid container justify ='center' spacing={16}>
      <Grid item xs={12}>
      < Searchbar/>
      </Grid>
      <Grid item xs={8}>
       < Videolist/>
      </Grid>
      <Grid item xs={4}>
        <Videodetail/>
      </Grid>
    </Grid>
      </Grid>

    </Grid>
    </div>
  )
}

export default App
