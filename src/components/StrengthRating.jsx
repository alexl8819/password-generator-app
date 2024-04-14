import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Rating, toArray } from '../util/rating';

import styles from './StrengthRating.module.css';

const cx = classnames.bind(styles);

export default function StrengthRating ({ rating }) {
  const ratingToArr = toArray(rating);
  return (
    <div className={styles.ratingBlock}>
      <p className={styles.ratingBlockStrengthtext}>strength</p>
      <ul className={styles.ratingBlockRatings} data-rating={rating.description}>
        {
          ratingToArr.map((fill, index) => 
            fill ? (<li key={index} className={cx({ 
              rating: true, ratingVeryweak: rating === Rating.VERY_WEAK, ratingWeak: rating === Rating.WEAK, ratingMedium: rating === Rating.MEDIUM, ratingStrong: rating === Rating.STRONG }
            )}></li>) : (<li key={index} className={styles.rating}></li>)
          )
        }
      </ul>
    </div>
  );
}

StrengthRating.propTypes = {
  rating: PropTypes.symbol.isRequired
}
