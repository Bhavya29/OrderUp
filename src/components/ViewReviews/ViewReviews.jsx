import React, { useEffect, useState } from 'react';
import '../ViewReviews/ViewReviews.css';

const ViewReviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) throw new Error("Something went wrong fetching data");
        const data = await response.json();
        console.log('review Data', data);
        setReviewData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchReviewData();
  }, []);

  return (
    <div className="review-page">
      <h1 className="page-title">Reviews of Order Up!</h1>
      <div className="review-list">
        {reviewData.slice(0, 10).map((review) => (
          <div className="review-card" key={review.id}>
            <h4 className="review-author">{review.name}</h4>
            <p className="review-content">{review.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReviews;
