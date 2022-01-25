import NavBar from './components/Navbar';
import { getRepos } from './actions/actions'
import React, { useState } from 'react';
import axios from 'axios';

import styled from '@emotion/styled'

const ReposContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  background-color: #ffffff;
`

const App = () => {

  const [repos, setRepos] = useState()
  console.log(getRepos())
  return (
    <div>
      <NavBar />
      <ReposContainer>
        
      </ReposContainer>
    </div>
  )
};

export default App;
