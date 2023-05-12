import { BaseSyntheticEvent } from "react";

const EventComponent:React.FC = () => {
  const inputChange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  }

  const dragStart = (e:React.DragEvent<HTMLDivElement>) => {
    console.log('dragging');
  }
  
  return <div>
    <input onChange={inputChange}></input>
    <div draggable onDragStart={dragStart}>Draggable</div>
  </div>
}

export default EventComponent;