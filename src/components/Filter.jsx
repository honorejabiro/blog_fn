import React from 'react'

const Filter = ({handleFilter}) => {
  return (
    <div className='container' style={{ width: '500px', margin: '20px auto' }}>
      <select className='form-select' aria-label='default-select' style={{ height: '50px' }} 
      onChange={ e => {
        handleFilter(e)
        }
      }
      >
        <option value=''>Selected</option>
        <option value='BUSINESS'>Business</option>
        <option value='ENTERTAINMENT'>Entertainment</option>
        <option value='PERSONAL'>Personal</option>
      </select>
    </div>
  )
}

export default Filter
