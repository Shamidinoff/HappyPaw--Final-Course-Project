import React, { useEffect, useState } from 'react'
import cl from './ReviewMainCards.module.css'
import ReviewMainCardsItem from '../review-card-item-main/ReviewMainCardsItem';
import axios from 'axios';

const ReviewMainCards = () => {
  const [reviewIds, setReviewIds] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  useEffect(() => {
    if (reviewIds.length !== 0) {
      for (let i=0; i < 12; i+=4){
        getReview(reviewIds[i]);

      }
    }
  }, [reviewIds]);

  async function getAllReviews() {
    try {
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviewIds(response.data);
    } catch (err) {
      console.error("GET ALL REVIEWS ERROR: " + err);
    }
  }

  async function getReview(reviewId) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/reviews/${reviewId}`
      );
      console.log(response.data);
      setReviews((prevReviews) => [...prevReviews, response.data]);
    } catch (err) {
      console.error("GET REVIEW ERROR: " + err);
    }
  }

  const reviewMainCardsItems = reviews.map((review) => {
    const options = {  day: 'numeric', month: 'long', year: 'numeric'}
    const dateForm = new Date(review.createdAt).toLocaleString("ru", options).split(" ");
    const date = dateForm[0] + " " + dateForm[1].charAt(0).toUpperCase() + dateForm[1].slice(1) + ", " + dateForm[2];

      return (
        <ReviewMainCardsItem
          userName={review.userName}
          createdAt={date}
          comment={review.comment}
          avatar={review.avatar}
        />
      );
  });


    return (
      <section className={cl.section7_reviews}>
          <div className={cl.container}>
            <h2>Отзывы</h2>
            <div className={cl.reviews_cards}>
              {reviews.length === 0 ? <p style={{ textAlign:"center", margin:"auto" }}>Идет загрузка данных...</p> : reviewMainCardsItems}
            </div>
          </div>
      </section>
    );
}

export default ReviewMainCards
