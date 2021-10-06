const WithRandomID = (WrappedComponent) => (props) => {
  const id = `user ${Math.floor(Math.random() * 100)}`;
  return <WrappedComponent {...props} userId={id} />;
};

export default WithRandomID;
