export function Insights() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Most Active Feature</h3>
          <p className="text-sm text-gray-500">Based on user interactions</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Dashboard Analytics</p>
          <p className="text-sm text-gray-500">Used by 78% of users daily</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">User Engagement</h3>
          <p className="text-sm text-gray-500">Average time spent on app</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">45 minutes</p>
          <p className="text-sm text-gray-500">+5 minutes from last week</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Conversion Rate</h3>
          <p className="text-sm text-gray-500">Free to paid users</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">12.5%</p>
          <p className="text-sm text-gray-500">+2.3% from last month</p>
        </div>
      </div>
      <div className="col-span-full bg-white p-4 rounded-lg border shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Key Insights</h3>
          <p className="text-sm text-gray-500">
            Important metrics and observations
          </p>
        </div>
        <div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              User retention has improved by 7% after the latest feature
              release.
            </li>
            <li>
              Mobile usage has surpassed desktop usage for the first time this
              quarter.
            </li>
            <li>
              The new onboarding process has reduced drop-off rates by 25%.
            </li>
            <li>
              Users who engage with the chat support feature are 3x more likely
              to upgrade to a paid plan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
