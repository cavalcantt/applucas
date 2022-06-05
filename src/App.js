import React, {useState,useEffect,useMemo,useCallback} from "react";


function App (){

  const [tarefas, setTarefas] = useState([
    'pagar a conta de luz', 'Estudar React Hooks']);


    useEffect(()=>{
     const tarefasStorage = localStorage.getItem('tarefas');

     if(tarefasStorage){
       setTarefas(JSON.parse(tarefasStorage));
     }
   },[]); 

    useEffect(()=>{localStorage.setItem('tarefas',JSON.stringify(tarefas));},[tarefas])
    
  const [input, setinput]= useState ('');

  
  const handleAdd= useCallback(()=> {
     setTarefas([...tarefas,input])
     setinput ('')
   },[input,tarefas]);

  const totalTarefas= useMemo(() => tarefas.length,[tarefas]);
  
    return(

    <div>

       <ul> {tarefas.map(tarefa =>(<li key={tarefa}>{tarefa}</li>))}
       </ul>
        <br/>
      <strong>Voce tem {totalTarefas} tarefas!</strong> 
       <br/>
        <input type="text" value={input}onChange={e=>setinput(e.target.value)}></input>
        <button type="button" onClick = {handleAdd}>Adicionar</button>
        
      </div>
  );
}

export default App;
