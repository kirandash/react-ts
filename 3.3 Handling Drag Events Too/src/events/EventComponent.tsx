const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  // 3.3 Handling Drag Events Too!
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
