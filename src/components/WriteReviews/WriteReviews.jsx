import React, { useState } from "react";
import '../WriteReviews/WriteReviews.css'; 
import ViewReviews from "../ViewReviews/ViewReviews";

const WriteReviews = () => {
  const [review, setReview] = useState("");

  const handleReviewData = (e) => {
    e.preventDefault();
    console.log("review Data", { review });
  };

  return (
    <>
        <ViewReviews/>

    <div className="review-container">
      <form onSubmit={handleReviewData} className="review-form">
        <h2 className="review-title">Leave a review</h2>
        <textarea
          id="review"
          name="review"
          rows="6"
          cols="60"
          className="review-textarea"
          placeholder="Write your review here..."
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default WriteReviews;
