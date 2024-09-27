import React, { useState } from 'react';

const CommentsForm = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  //const[name,usename]=useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }
   
    document.write('Submitting comment:', comment);
    
    setComment('');
    setError('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"  className='nbutton'
      /> <br/>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" className='nbutton'>Submit</button>
      
    </form>
  );
};

export default CommentsForm;
