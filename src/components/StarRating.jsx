import { FaStar } from "react-icons/fa";


const StarRating = ({rating, reviews}) => {
  return (
    <div className="flex gap-4">
        {[1,2,3,4,5].map(star => (
            <>
            <FaStar
                key={star}
                color={star <= rating ? "#ffc107" : "#e4e5e9"}
                size={20}
            />
            </>
        ))} <span>({reviews.length})</span>
    </div>
  )
}

export default StarRating
