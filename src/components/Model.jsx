import React from 'react'
import './Model.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Model = ({handleIsOpen, slug, handleDelete }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        handleIsOpen()
    }

    const handleDeleteNote = () => {
        handleDelete(slug)
        navigate('/')
        toast("Article deleted successfully.")
    }
  return (
    <div>
        <div className="c-modal-overlay">
        <div className="c-modal">
            <button className="close-button" onClick={handleClick}>×</button>
            <div className="c-modal-content">
            <h2>Delete Note</h2>
            <p>Are sure you want to Delete this note?</p>
            <span className="d-flex justify-content-center">
                <button className="btn btn-danger me-3" onClick={handleDeleteNote}>Delete</button>
                <button className="btn btn-primary" onClick={handleClick}>Cancel</button>
            </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Model

