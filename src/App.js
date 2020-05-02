import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
)
