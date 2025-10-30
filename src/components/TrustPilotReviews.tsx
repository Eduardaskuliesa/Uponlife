const REVIEW_RATING = 4.5;

const TrustPilotReviews = () => {
  const getReviewText = (rating: number) => {
    if (rating >= 4.5) return "Excellent";
    if (rating >= 3.5) return "Good";
    if (rating >= 2.5) return "Average";
    if (rating >= 1.5) return "Poor";
    return "Very Poor";
  };

  return (
    <div className="flex gap-3 items-center">
      <span className="text-white underline underline-offset-3 text-sm sm:text-base">
        {getReviewText(REVIEW_RATING)}
      </span>
      <img
        alt="trustpilot-reviews"
        className="h-4 sm:h-5"
        src="/trustpilot-star-reviews.png"
      />
      <img className="h-18 sm:h-22" alt="trustpilot-logo" src="/trustpilot-logo.png" />
    </div>
  );
};

export default TrustPilotReviews;
