import { Todo } from ".";

export class TodoList{
    constructor(){
        
        this.cargarLocalStorage();
        // this.todos = [];

    }

    nuevoTodo ( tarea ){
        this.todos.push( tarea );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    todocompletado( id ){
        for( const todo of this.todos ){
            if ( todo.id == id ){
                todo.completado = !todo.completado;
            }
        }
        this.guardarLocalStorage();

    }

    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = this.todos.map(Todo.fromJson);
        console.log(this.todos);
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     
        // }else{
        //     this.todos = [];
        // }

    }

}