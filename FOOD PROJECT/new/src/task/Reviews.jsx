import React from 'react';
import './review.css';
import { useNavigate } from 'react-router-dom';
 
const reviewsData = [
  {
    name: 'Alyce Lambo',
    date: '25/06/2020',
    rating: 5.0,
    review:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
    avatar: '/asset/Group 17772.png', // Replace with the actual avatar URL
  },
  {
    name: 'Gonela Solom',
    date: '22/06/2020',
    rating: 4.5,
    review:
      'Been a life saver for keeping our sanity during the pandemic, although they could improve some of their UI and how they handle specials...',
    avatar: '/asset/Group 17772 (1).png',
  },
  {
    name: 'Brian C',
    date: '21/06/2020',
    rating: 2.5,
    review:
      'Got an intro offer of 50% off first order that did not work. I have scaled the app to find a contact us button...',
    avatar: '/asset/Group 17772 (2).png',
  },
  {
    name: 'Helsmar E',
    date: '20/06/2020',
    rating: 3.5,
    review:
      'Some good offers but not consistent. The service could be improved with a little more customer support engagement...',
    avatar: '/asset/Group 17772 (3).png',
  },
];
 
const Reviews = () => {

    const navigated=  useNavigate();
    const arrow=()=>{
      navigated('/Rating')
    }
    const han=()=>{
        navigated('/Rest')
    }

  return (
<div className="reviews-container">
<button className="rati" onClick={arrow}>&lt;</button>
<h2 className="reviews-title">Reviews</h2>
<div className="review-input">
<img
          src="https://via.placeholder.com/50"
          alt="User avatar"
          className="user-avatar"
        />
<input
          type="text"
          placeholder="Write your review..."
          className="review-text-input"
        />
</div>
      {reviewsData.map((review, index) => (
<div className="review-card" key={index} onClick={han}>
<img src={review.avatar} alt={review.name} className="review-avatar" />
<div className="review-content">
<div className="review-header">
<span className="review-name">{review.name}</span>
<span className="review-date">{review.date}</span>
</div>
<div className="review-rating">{review.rating.toFixed(1)}</div>
<p className="review-text">{review.review}</p>
</div>
</div>
      ))}
</div>
  );
};
 
export default Reviews;