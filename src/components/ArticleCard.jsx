import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";
import { FormatDate } from './Format';


const ArticleCard = ({note}) => {
    const body = `${note.body.split(" ").splice(0, 20).join(" ")} ...`
    const color = note.category == "BUSINESS" ? "green" : note.category == "PERSONAL" ? "blue" : "purple"
    if (!note || Object.keys(note).length === 0) {
        return null;
      };
  return (
    <div className="col-md-4 single-note-item all-category">
            <div className="card card-body" style={{marginBottom: "20px"}}>
                <span className="side-stick" style={{backgroundColor: color}}></span>
                <FaNoteSticky style={{marginLeft: "auto", color: color}}/>
                <Link to={`article/${note.slug}`} value={note.slug} style={{ textDecoration: "none", color: "black"}}>
                <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">{note.title}</h5>
                </Link>
                <p className="note-date font-12 text-muted">{FormatDate(note.updated_at)}</p>
                <div className="note-content">
                    <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">{note.body}</p>
                </div>
                <div className="d-flex align-items-center">
                    <Link to={`article/${note.slug}`}>
                        <span className="mr-1"><MdMarkunread style={{fontSize: "25px", cursor:"pointer", color: color}}/></span>
                    </Link>
                </div>
                <small className="text-muted">{note.category}</small>
            </div>
    </div>
  )
}

export default ArticleCard
