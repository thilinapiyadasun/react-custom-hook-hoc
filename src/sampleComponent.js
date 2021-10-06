import WithRandomID from "./WithRandomID";
const SampleComponent = ({ userName, email, userId }) => {
  return (
    <div>
      <h3>
        {userName} - {userId}
      </h3>
      <h3>{email}</h3>
    </div>
  );
};

export default WithRandomID(SampleComponent);
