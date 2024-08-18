import  React,{Component} from 'react'
type InputComponentProps={
  setTakeInput: (value: boolean)=> void,
  updateVal: (value: string) => void;
}
type stateProps={
  value:string,
}

class InputComponent extends Component <InputComponentProps,stateProps >  {
constructor(props:InputComponentProps){
  super(props)
  this.state = {
    value: ""
}

this.handleInptChange=this.handleInptChange.bind(this)
this.handleCancel=this.handleCancel.bind(this)
this.handleUpdateVal=this.handleUpdateVal.bind(this)

}

handleCancel(){
  this.props.setTakeInput(false)
}
     handleInptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({value:e.target.value});
    };
  
    handleUpdateVal(){
      this.props.updateVal(this.state.value);      
 }
 render() {
     
 
  return (
     <div className=' border flex flex-col rounded-md pl-4 w-full'>
    <h1 className="text-xl py-5">Create a todo</h1>
  <input type="text" placeholder="Add a New Task" className=' border ' onChange={this.handleInptChange} value={this.state.value}/>
<div className=' space-x-10 my-5'> 
    <button onClick={this.handleUpdateVal} className=' bg-blue-500 hover:bg-blue-700 text-white border rounded py-2 px-3'>Save</button>
    <button className=' text-black border rounded py-2 px-3 ' onClick={this.handleCancel}>Cancel</button>
    </div>
</div>
   
    
  )
}
}
export default InputComponent;
