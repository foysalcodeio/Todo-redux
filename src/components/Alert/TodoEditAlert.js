
import Swal from 'sweetalert2'
import store from '../../redux/store/store'
import { EditTodo } from '../../redux/state/functions/functions'

export function TodoEditAlert(i, item){
    Swal.fire({
        title: "Update Task Name",
        text: "You won't be able to revert this!",
        icon: "warning",
        input: "text",
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo( {index:i, task:value}))
            }
        }
      })
}

