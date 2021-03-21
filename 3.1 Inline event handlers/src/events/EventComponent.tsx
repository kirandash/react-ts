const EventComponent: React.FC = () => {
  // Type inference doesn't apply for event handlers defined before hand
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div>
      {/* type inference only applied if event handler is defined inline in JSX */}
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
