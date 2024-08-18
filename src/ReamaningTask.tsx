// import {Component, ReactNode} from 'react';
// type thingsToDoProps={
//   toDoVal:string[],
//   onDone:(value:number)=>void
// };
// class ReamaningTask extends Component<thingsToDoProps> {
//   render() {
      
  
   
//   return (
//     <>
    
//       <h1 className='text-xl p-4 font-bold'>Things to Do</h1>
//       <div className='ml-4 w-96'>
//       {this.props.toDoVal.map((p,index)=>{

//            return (
//             <>
//             <div key={index} className='flex ml-2 gap-4'>
//         <input type="checkbox" name="inptCheckbox" value="" onChange={()=> this.props.onDone(index)}></input>
//            <p className=''>{p}</p>
//            </div>
//            </>
//            )
//       })

      
//     }
//     </div>
//     </>
//   )
// }
// }
// export default ReamaningTask;
import { Component } from 'react';

type thingsToDoProps = {
  toDoVal: string[],
  onDone: (value: number| string) => void
};

class RemainingTask extends Component<thingsToDoProps> {
  render() {
    return (
      <>
        <h1 className='text-xl p-4 font-bold'>Things to Do</h1>
        <div className='ml-4 w-96'>
          {this.props.toDoVal.map((p, index) => {
            return (
              <div key={index} className='flex ml-2 gap-4'>
                <input 
                  type="checkbox" 
                  name="inptCheckbox" 
                  value="" 
                  onChange={() => this.props.onDone(index)}
                />
                <p className=''>{p}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default RemainingTask;
