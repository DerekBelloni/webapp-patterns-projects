import { TodoItem } from "./classes.js";

export const TodoHistory = {
    history: [],
    push(state) {
        if (state) {
            this.history.push(new Set([...state])); // TODO
        }
    },
    pop() {
        if (this.history.length > 1) {
            this.history.pop();
            return this.history.pop();
        }
    }
}


const todoItem = TodoItem.getInstance()
todoItem.addObserver(() => {
    TodoHistory.push(todoItem.items)
});