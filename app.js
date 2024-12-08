// app.js

new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        // Add a new task to the list
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';  // Clear input field
            }
        },
        // Remove a task from the list
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        // Toggle the completion status of a task
        toggleTask(index) {
            this.tasks[index].completed = !this.tasks[index].completed;
        }
    }
});
