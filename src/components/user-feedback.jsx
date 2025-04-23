const feedbacks = [
  {
    id: 1,
    user: 'Alice Johnson',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment: "Love the new dashboard feature! It's so intuitive and helpful.",
  },
  {
    id: 2,
    user: 'Bob Smith',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4,
    comment:
      'Great app overall, but could use some improvements in loading speed.',
  },
  {
    id: 3,
    user: 'Carol Williams',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 5,
    comment:
      'The customer support is top-notch. They resolved my issue quickly.',
  },
];

export function UserFeedback() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">User Satisfaction</h3>
          <p className="text-sm text-gray-500">Overall rating: 4.5/5</p>
        </div>
        <div>
          <div className="text-4xl font-bold">90%</div>
          <p className="text-sm text-gray-500">
            Users who would recommend our app
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Recent Feedback</h3>
          <p className="text-sm text-gray-500">Latest user comments</p>
        </div>
        <div>
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="flex items-start space-x-4">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img
                    src={feedback.avatar || '/placeholder.svg'}
                    alt={feedback.user}
                    className="w-full h-full object-cover"
                  />
                  {!feedback.avatar && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                      {feedback.user
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">{feedback.user}</h4>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < feedback.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{feedback.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
