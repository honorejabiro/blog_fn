import React from 'react'; 
import { useState, useEffect } from 'react';
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ArticleDetailPage from './pages/ArticleDetailPage'
import AddPage from './pages/AddPage';
import axios from 'axios';
import { toast } from 'react-toastify';
import EditPage from './pages/EditPage';



const App = () => {

  const[notes, setNotes] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const [filterText, setFilterText] = useState("")
  const filteredNotes = filterText === "BUSINESS" ? notes.filter(note => note.category === "BUSINESS") : filterText === "ENTERTAINMENT" ? notes.filter(note => (note.category === "ENTERTAINMENT")) :
  filterText === "PERSONAL" ? notes.filter(note => (note.category === "PERSONAL")) : notes;
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (search) {
      axios.get(`http://127.0.0.1:8000/article-search/?search=${search}`)
        .then(response => {
          setNotes(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }, [search]);


  const changeSearch = (val) => {
    setSearch(val);
  }

  const handleFilter = (e) => {
    const val = e.target.value
    setFilterText(val)
  }

  useEffect(() => {
    setIsLoading(true)
    axios.get("http://127.0.0.1:8000/articles/")
    .then(response  => {
      setNotes(response.data);
      setIsLoading(false)
    })
    .catch(error => {
      console.log(error.message)
    })
  }, []);

  const updateArticle = (data, slug) => {
    axios.put(`http://127.0.0.1:8000/articles/${slug}`, data)
    .then(response => {
      console.log(response.data)
      setNotes(prevNotes => 
        prevNotes.map(note => 
          note.slug === slug ? response.data : note
        )
      );
      toast.success("A new Article has been updated")
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const handleDelete = (slug) => {
    axios.delete(`http://127.0.0.1:8000/articles/${slug}`)
    .then(response => {
      console.log(response);
      axios.get('http://127.0.0.1:8000/articles/')
        .then(response => {
          setNotes(response.data);
        })
        .catch(error => console.log(error));
    })
    .catch(error => {
      console.log(error)
    })
  
  }

  const addArticle = (article) => {
    axios.post(" http://127.0.0.1:8000/articles/", article)
    .then (response => {
      setNotes([...notes, response.data])
      toast.success("A new Article has been added")
      console.log(response.data)
    })
    .catch (error => {
      console.log(error.message)
      if (error.response && error.response.status === 404) {
        console.log('Article not found, removing from UI');
        
      }
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout changeSearch={changeSearch} search={search}/>}>
      <Route index element={<HomePage notes={filteredNotes} loading={isLoading} handleFilter={handleFilter}/>} />
      <Route path="/add-note" element={<AddPage addArticle={addArticle} />} />
      <Route path="/article/:slug" element={<ArticleDetailPage handleDelete={handleDelete} />} />
      <Route path="/edit/:slug" element={<EditPage updateArticle={updateArticle}/>} />
    </Route>
  ))
  return <RouterProvider router={router} />
}

export default App

