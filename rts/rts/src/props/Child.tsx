import { ReactNode } from "react";

interface childProps {
  color:string;
  onClick:()=>void;
  children:ReactNode;
}

export const Child = ({color,onClick}:childProps) => {
  return (
    <div>I'm a child with a color of : {color}
      <button onClick={onClick}>Click me</button>
    </div>
    
  )
}

export const ChildAsFC:React.FC<childProps> = ({color,onClick}) => {
  return (
    <div>I'm a FC child with a color of : {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}