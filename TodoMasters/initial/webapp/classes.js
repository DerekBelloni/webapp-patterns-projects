class TodoItem {
    constructor(text) {
        this.text = text;
    }
    equals(other) { // Value Object 
        return this.text == other.text;
    }
}

class TodoList { // candidate for Singleton, only want one todo list
    // Data
    #data = new Set();
    get items() { return this.#data }
    

    // Singleton
    static instance = null;
    static {
        this.instance = new TodoList();
    }
    static getInstance() {
        return this.instance;
    }
    constructor() {
        if (TodoList.instance) {
            throw new Error("Use TodoList.getInstance() to access the list");
        }
    } 
}

Object.assign(TodoList.prototype, observerMixin)