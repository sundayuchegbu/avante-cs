const SocialCard = () => {
  return (
    <div className="lg:flex justify-between  mx-2 mb-8 ">
      <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] bg-dark p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
        <div className="flex items-center   ">
          <h2 className="ml-4 font-bold text-lg text-white">Publish</h2>
        </div>
        <p className="text-white">
          The simplest way to create, schedule and distribute content, including
          paid amplifcation, while ensuring brand consistency and teamwork.{" "}
          <ul className="ml-8">
            <li className="list-disc">Content calendar</li>
            <li className="list-disc">Assets library</li>
            <li className="list-disc">Team collaboration & approval ﬂows</li>
            <li className="list-disc">Facebook & Instagram ads</li>
          </ul>
        </p>
      </div>

      <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] bg-dark p-6 border-2 mb-4 mx-12 border-primary  rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="ml-4 font-bold text-lg text-white">Engage </h2>
        </div>
        <p className="text-white">
          Moderate multiple conversations, share notes and assign tasks to your
          team, while keeping track of the most urgent messages.{" "}
          <ul className="list-disc ml-8">
            <li>Customizable conversation feeds</li>
            <li>Direct message management</li>
            <li>Customer profle cards</li>
            <li>Assigning and archiving</li>
          </ul>
        </p>
      </div>

      <div className="lg:w-1/3 lg:h-[300px] lg:w-[350px] bg-dark p-6 border-2 mb-4 mx-12  border-primary rounded-lg">
        <div className="flex items-center mb-4">
          <h2 className="ml-4 font-bold text-lg text-white">Listen</h2>
        </div>
        <p className="text-white">
          Monitor social media and the internet for people and topics that will
          determine audience segments and tactics for your next campaign.{" "}
          <ul className="list-disc ml-8">
            <li>Live mentions stream</li>
            <li>Demographic insights</li>
            <li>Custom audience creation</li>
            <li>Crisis alerts</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
