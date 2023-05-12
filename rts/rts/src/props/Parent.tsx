import { Child, ChildAsFC } from "./Child";

export const Parent = () => {
  return (
    <div>
      I'm the parent.
      <Child color='red' onClick={()=>console.log('clicked')}>fdsds</Child>
      <ChildAsFC color='blue' onClick={()=>console.log('clicked')}>fdsf</ChildAsFC>
    </div>
  )
}