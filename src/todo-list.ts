import { title } from "process";
import TodoListModel, {TTodoList} from "./todoList";


export async function listenItem(){
   const result = await TodoListModel.find();
   return result;
}

export async function createItem(todo: TTodoList){
    const addedTodo = new TodoListModel(todo)
    return await addedTodo.save();
}


export async function updateItem(id: string, todoChanges: Partial<TTodoList>){

    const updateItem = await TodoListModel.findByIdAndUpdate(id,{
        $set:todoChanges
    },{
        new: true
    })
    return updateItem
}

export async function removeItem(id: string){

    await TodoListModel.findByIdAndDelete(id)
}