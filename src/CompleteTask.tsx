 import {Component,  ReactNode} from 'react'
import { ImCross } from "react-icons/im";
type thingsDoneProps={
thingsDone:string[];
AgainDo: (value:number)=>void;
removeItem: (value:number)=>void;

}
class CompleteTAsk extends Component <thingsDoneProps> {
  render(){
      
  

  return (
   <>
    <h1 className='text-xl p-4 font-bold'>Things Done</h1>
    <div className=' flex flex-col gap-4 ml-2 '>
    
   {this.props.thingsDone.map((p:string,index:number)=>{

           return (
            <>
            <div key={index} className='flex ml-2 w-80 gap-4 '>
        <input type="checkbox"  name="inptCheckbox" className='' value="" onChange={()=> AgainDo(index)}></input>
           <p className='grow'>{p}</p>
           <button className="" onClick={()=> this.props.removeItem(index)}>
           <ImCross className="text-xl text-red-400
           " />
           </button>
           </div>
           </>
           )
      })

      
    }
    </div>
   </>
  )
}
}
export default CompleteTAsk;

