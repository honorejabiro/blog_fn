import React from 'react'
import ArticleCard from './ArticleCard';
import Loader from './Loader';

const ArticleConatainer = ({notes, loading}) => {
  return (
    <div>
      <div className='container'>
        <div className='note-has-grid row'>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          notes.map(note => <ArticleCard key={note.id} note={note} />)
        )}
        </div>
      </div>
    </div>
  )}


export default ArticleConatainer
