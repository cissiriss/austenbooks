import { useFormik } from 'formik'

function ReviewForm () {

  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
      rating: Number
    },
    handleSubmit: values => {
      console.log(values)
    }
  })

  // console.log(formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

        <label htmlFor="comment">Comment</label>
        <input id="comment" name="comment" onChange={formik.handleChange} value={formik.values.comment}/>

        <label htmlFor="rating">Rating</label>
        <input id="rating" name="rating" type="number" onChange={formik.handleChange} value={formik.values.rating}/>

        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default ReviewForm