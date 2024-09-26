import React from 'react'
import "./AddArticlePage.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddPage = ({addArticle}) => {
    const [data, setData] = useState({
        title: "",
        body: "",
        category: ""
    });

    const navigate = useNavigate()

    const newArticle = {
        title: data.title,
        body: data.body,
        category: data.category
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { title, body, category } = data
        if (!title && !body && !category) {
            return;
        }
        addArticle(newArticle);
        console.log(newArticle)
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
                value = {data.title}
                onChange={(e) => {
                    setData( prevData => ({
                        ...prevData,
                        title: e.target.value
                    }))
                }}
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
            value={data.body}
            onChange={(e) => {
                setData(prevData => ({
                    ...prevData,
                    body: e.target.value
                }))
            }}
            ></textarea>
        </div>

        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Note's category
            </label>
        <select className="form-select" aria-label="Default select example" value={data.category} style={{height: "40px"}} 
            onChange={(e) => {
                setData(prevData => ({
                    ...prevData,
                    category: e.target.value
                }))
            }}
        >
            <option selected>Pick a category</option>
            <option value="BUSINESS">Business</option>
            <option value="PERSONAL">Personal</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            </select>
        </div>

            


        <button className="btn btn-primary d-flex justify-content-center" style={{width:"100%"}}>Add Note</button>
        </form>
    </div>
  )
}

export default AddPage