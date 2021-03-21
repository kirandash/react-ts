const EventComponent: React.FC = () => {
  // 3.2 Typing standalone event handlers
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
