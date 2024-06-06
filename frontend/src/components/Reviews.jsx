// import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { useFormik } from 'formik';

// function Reviews() {
//   const [reviewData, setReviewData] = useState(null);
//   const { bookId } = useParams();

//   useEffect(() => {
//     async function getReviews() {
//       try {
//         const reviews = await fetch(`http://localhost:3000/api/reviews/getreviews/${bookId}`);
//         console.log(reviews)
//         const review = await reviews.json();
//         setReviewData(review);
//       } catch (error) {
//         console.log(error);
//       } 
//     } 
//     getReviews();
//   }, [bookId]);

//   const [message, setMessage] = useState(null);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       comment: '',
//       rating: 0,
//       bookId: bookId
//     },
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch("http://localhost:3000/api/reviews/createReview", {
//           method: "POST",
//           mode: "cors",
//           cache: "no-cache",
//           credentials: "same-origin",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           redirect: "follow",
//           referrerPolicy: "no-referrer",
//           body: JSON.stringify({
//             reviewerName: values.name,
//             reviewComment: values.comment,
//             reviewRating: values.rating,
//             reviewBookId: bookId
//           })
//         });

//         const responsemsg = await response.json();
//         if (response.ok) {
//           setMessage(responsemsg.msg);
//           // getReviews();
//           // getAvgRating();
//         } else {
//           setMessage(responsemsg.msg);
//         }
//       } catch (error) {
//         console.log(error);
//         setMessage("An error occurred");
//       }
//     }
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           id="name"
//           name="name"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />

//         <label htmlFor="comment">Comment</label>
//         <input
//           id="comment"
//           name="comment"
//           onChange={formik.handleChange}
//           value={formik.values.comment}
//         />

//         <label htmlFor="rating">Rating</label>
//         <input
//           id="rating"
//           name="rating"
//           type="number"
//           onChange={formik.handleChange}
//           value={formik.values.rating}
//         />

//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//       <div>
//         {reviewData && reviewData.map((review, index) => (
//           <div key={index}>
//             <h4>{review.reviewerName}</h4>
//             <p>{review.reviewComment}</p>
//             <p>{review.reviewRating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Reviews;
