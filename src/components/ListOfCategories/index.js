import React, {useEffect, useState} from 'react'
import { Category } from './../Category'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(( ) => {
    fetch('https://petgram-server-mikpc3u6g.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}
