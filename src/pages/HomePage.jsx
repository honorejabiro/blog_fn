import React from 'react';
import ArticleConatainer from '../components/ArticleConatainer';
import Filter from '../components/Filter';
import Loader from '../components/Loader'; 

const HomePage = ({ notes, loading, handleFilter }) => {
  console.log(notes);

  if (loading) {
    return <Loader color="blue" loading={loading} />; 
  }

  return (
    <div>
      {!notes || notes.length === 0 ? (
        <h1 
        style={{
          display: "flex",
          color: "red",
          margin: "100px",
          justifyContent: "center"
        }}>No Articles Found</h1>
      ) : (
        <>
          <Filter handleFilter={handleFilter} />
          <ArticleConatainer notes={notes} loading={loading} />
        </>
      )}
    </div>
  );
}

export default HomePage;