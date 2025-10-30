const announcementData = [
  {
    id: 1,
    message: "Free & fast delivery",
  },
  {
    id: 2,
    message: "30-day money-back guarantee",
  },
  {
    id: 3,
    message: "47% off for first-time subscribers",
  },
];

const TopAnnouncementBanner = () => {
  return (
    <div className="w-full font-family-primary h-8 flex bg-primary text-white overflow-hidden absolute top-0 left-0">
      <div className="flex infinite-scroll flex-nowrap h-full gap-7 items-center whitespace-nowrap">
        {Array(5)
          .fill(announcementData)
          .flat()
          .map((announcement, index) => (
            <span key={index} className="text-sm font-light">
              {announcement.message.toUpperCase()}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TopAnnouncementBanner;
