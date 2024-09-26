import React from "react";
import { useState, useEffect } from "react";
import "./ArticlePage.css"
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { FormatDate } from "../components/Format";
import Model from "../components/Model";


const ArticleDetailPage = ({handleDelete}) => {

    const [note, setNote] = useState([])

    const [isOpen, setIsOpen] = useState(false)

    const {slug} = useParams()

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/articles/${slug}`)
        .then(response => {
            setNote(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [slug])
    return (
        <>
        <div className="note-container">
        <h3 className="title">{note.title}</h3>
        <span className="d-flex justify-content-center">
        <p className="note-date font-12 text-muted me-5">{FormatDate(note.created_at)}</p>
        <p className="note-date font-12 text-muted me-5">{FormatDate(note.updated_at)}</p>
        </span>
        <span className="button-group">
            <Link to={`/edit/${note.slug}`}>
                <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
            </Link>
            <button className="btn btn-danger" onClick={handleIsOpen}><BiSolidTrashAlt /><span>Delete</span></button>
        </span>
        <p className="description">
          {note.body}
        </p>
    
    
    
        
    
      </div>
        {isOpen && <Model handleIsOpen={handleIsOpen} slug={slug} handleDelete={handleDelete}/>}
      </>
      );
}

export default ArticleDetailPage

