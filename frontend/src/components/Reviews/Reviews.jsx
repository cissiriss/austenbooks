import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { ReviewDiv, StyledForm, StyledButton, StyledInput, ReviewDataDiv } from './ReviewsStyles'

function Reviews() {
  const [reviewData, setReviewData] = useState(null);
  const { id } = useParams();

  async function getReviews() {
    try {
      const reviews = await fetch(`http://localhost:3000/api/reviews/getreviews/${id}`)
      const review = await reviews.json()
      setReviewData(review)
    } catch (error) {
      console.log(error)
    } 
  } 

  useEffect(() => {
    getReviews()
  })

  const [message, setMessage] = useState(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
      rating: 0,
      bookId: id
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("http://localhost:3000/api/reviews/createReview", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            reviewerName: values.name,
            reviewComment: values.comment,
            reviewRating: values.rating,
            reviewBookId: id
          }) 
        }) ;

        const responsemsg = await response.json();
        if (response.ok) {
          setMessage(responsemsg.msg);
          resetForm()
          getReviews() 
        } else {
          setMessage(responsemsg.msg);
        }
      } catch (error) {
        console.log(error);
        setMessage("An error occurred");
      }
    }
  });

  return (
    <div>
    <ReviewDiv>
      <StyledForm onSubmit={formik.handleSubmit}>
      <h3>Leave a review!</h3>
        <label htmlFor="name">Name</label>
        <StyledInput
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="comment">Comment</label>
        <StyledInput
          id="comment"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
        />

        <label htmlFor="rating">Rating</label>
        <StyledInput
          id="rating"
          name="rating"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      
      {message && <p>{message}</p>}
      </ReviewDiv>
      <ReviewDataDiv>
        {reviewData && reviewData.map((review, index) => (
          <div key={index}>
            <h4>{review.reviewerName}</h4>
            <p>{review.reviewComment}</p>
            <p>{review.reviewRating}</p>
          </div>
        ))}
      </ReviewDataDiv>
      </div>
  );
}

export default Reviews;
