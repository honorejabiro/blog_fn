import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPage = ({updateArticle}) => {
    const {slug} = useParams()
    const navigate = useNavigate()
    const [ article, setArticle ] = useState({
        title: "",
        body: "",
        category: ""
    })
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/articles/${slug}`)
        .then(response => {
            setArticle({
                title: response.data.title,
                body: response.data.body,
                category: response.data.category
            })
        })
    }, [slug])

    const newArticle = {
        title: article.title,
        body: article.body,
        category: article.category
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {title, body, category} = newArticle 
        if (!title && !body && !category){
            console.log("helllo")
            return;
        }
        updateArticle(newArticle, slug)
        console.log("helooo")
        navigate('/')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Add New Article</h5>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Article title"
            value={article.title}
            onChange={
                (e) => {
                    setArticle(prevData => ({
                        ...prevData,
                        title: e.target.value
                    }))
                }
            }
            />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Content
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
            placeholder="Enter note's content"
            value={article.body}
            onChange={
                (e) => {
                    setArticle(prevData => ({
                        ...prevData,
                        body: e.target.value
                    }))
                }
            }
            ></textarea>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Note's category
            </label>
        <select className="form-select" aria-label="Default select example" style={{height: "40px"}} 
        value={article.category}
        onChange={
            (e) => {
                setArticle(prevData => ({
                    ...prevData,
                    category: e.target.value
                }))
            }
        }
        >
            <option selected>Pick a category</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            </select>
        </div>

            


        <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Update Article</button>
        </form>
    </div>
  )
}

export default EditPage
