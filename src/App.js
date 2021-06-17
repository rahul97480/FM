import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Pagination from './components/Pagination'
import Form from './components/ui/Form';
import './App.css'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8);
  const[isAdd, setAdd] = useState (false)

  

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `http://rahulgupta.ssdemo.xyz/FM/FamilyMan.php?str=${query}`
      )

      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost,indexOfLastPost);

  const Paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className='container'>
      
      <Header />
      {isAdd ? <Form /> : 
      <>
      <button onClick= {()=>setAdd(true)} className="btn">Add new caste</button>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={Paginate}/>
      </>
    }
    </div>
  )
}

export default App
