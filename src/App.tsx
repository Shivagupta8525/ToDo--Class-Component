import { Component} from "react";
import CompleteTAsk from "./CompleteTask";
import ReamaningTask from "./ReamaningTask";
import InputComponent from "./InputComponent";
import Header from "./Header";
import Footer from "./Footer";


type StateProps={
  takeInput:Boolean,
  toDo:string[],
  Done:string[],
}


class App extends Component <{},StateProps> {


  public constructor(props:{}){
    super(props);
    const Data=localStorage.getItem("toDoItems")||"[]"
    const storedData=JSON.parse(Data);

    this.state={
      takeInput:false,
      toDo:storedData,
      Done:[],
    }
    this.setComponent = this.setComponent.bind(this);
    this.updateVal = this.updateVal.bind(this);
    this.onDone = this.onDone.bind(this);
    this.handleAgainDo = this.handleAgainDo.bind(this);
    this.handleRemoveItems = this.handleRemoveItems.bind(this);
  
 
  }
 
   setComponent() {
    this.setState({takeInput:true})
  }



  updateVal(newVal: string) {
  if (newVal.length > 0) {
    const newToDo = [...this.state.toDo, newVal];
    this.setState({ toDo: newToDo, takeInput: false });
  }
}
  componentDidUpdate( prevState: StateProps) {
    if (prevState.toDo !== this.state.toDo) {
      localStorage.setItem('toDoItems', JSON.stringify(this.state.toDo));
    }
  }

   onDone  (index: number)  {
    const newDo = [...this.state.toDo];
    const completed = newDo.splice(index, 1)[0];
   this.setState({toDo:newDo});
   
  setTimeout(() => {
    this.setState((prevState) => ({
      Done: [...prevState.Done, completed],
    }));
  }, 100);
}
  
handleAgainDo (index: number)  {
    const newDo =[...this.state.toDo]
    const completed =newDo.splice(index,1)[0];
    this.setState({Done:newDo});
    setTimeout(() => {
      this.setState((prevState) => ({
        toDo: [...prevState.toDo, completed],
      }));
    }, 100);
}
 handleRemoveItems (index: number) {
    const newDone = [...this.state.Done];

    newDone.splice(index, 1);

    this.setState({Done:newDone});
  };
  render(){

  return (
    <div className=" flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto ">
          <hr />
          <div className="flex flex-col justify-start items-start grow">
            <h1 className="text-3xl p-4 font-bold">Things to get Done</h1>

            <ReamaningTask toDoVal={this.state.toDo} onDone={this.onDone} />
            {this.state.takeInput ? (
              <InputComponent
                setTakeInput={(value)=> this.setState({takeInput:value})}
                updateVal={this.updateVal}
              />
            ) : (
              <button
                onClick={this.setComponent}
                className="border border-black rounded-2xl py-1 px-3 mt-4 ml-2 bg-blue-300 hover:bg-blue-500"
              >
                {" "}
                Add a todo
              </button>
            )}

            <CompleteTAsk
              thingsDone={this.state.Done}
              AgainDo={this.handleAgainDo}
              removeItem={this.handleRemoveItems}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
