# [Demo App](https://todo-list-gilt-mu.vercel.app/)

# Todo List App
This Todo List app, It allow users to add tasks, edit task, delete task, and mark tasks as completed, and also show user how many todo tasks.

This is Todo List app built using React and style with css. The UI/UX of the app was originally designed on Figma.

### Tech stack :
* React JS
* CSS
* Figma

### The app come with the following feature :

* Add tasks : User can add a new task by typing into the input field and clicking the “Create” . By clicking the button it will show task that user input in input field.

* Edit task : User can edit task by clicking edit button . User change task in input field and click “Edit” to save change.

* Mark task as completed : User can mark a task as completed by clicking the checkbox in front of the task. completed tasks are displayed with a strike-through effect.

* Delete task : User can delete a task by clicking the delete button. It will pop up the overlay to confirm delete than This remove the task from the list.


 # Convention Guide - Todo List Project
 This convention guide for Todo List Project is designed to help ensure that the codebase is maintainable and scalable. This guide provides an overview of the conventions to follow, including consistent indentation,  file naming conventions, variable naming conventions, and class naming conventions. Following these best practices will help ensure that the code is organized and easy to understand.

 ## [Convention Guide Detail](https://www.notion.so/Convention-Guide-Todo-List-Project-cf0bd90e014b4d419ac3213e4d0f0dcc )

 # Figma UI/UX Design
 ## [Todo List Figma design](https://www.figma.com/file/392nNMLcehsFIfJb5065yE/TodoList?type=design&node-id=0-1&mode=design&t=xfy8Uflr5NwdJ5Mp-0)

# App Flow
## [Todo List app flow](https://www.figma.com/file/O8Ro31gwakgN9dV4a1jk76/Todo-List-App-Flow?type=design&node-id=0-1&mode=design&t=xfy8Uflr5NwdJ5Mp-0)


# Git Flow Method
I used the Git Flow method for Todo List app project. This method helped me to manage my code changes effectively.

### 1. Main Branch
* Represents the stable and production-ready version.

### 2. Develop Branch
* Serves as the integration branch for ongoing development.
* Any feature that created are merged into develop branch
* Represents the latest state of the application with features being developed.

### 3. Feature Branches 
* Responsible for app features
* Feature branches
    * `feature/CreateTodo`
    * `feature/ShowTodo`
    * `feature/readme`

### 4. Release Branches
* To prepare a new version of todo app for release:
    * Create a release branch from the develop branch.
    * Perform testing, bug fixes, and any final adjustments specific to the release.
    * Release branch :
        * `release/1.0`

### 5. Bugfix Branches
* If the code changes made from the feature branch were rejected after a release, sprint or demo, any necessary fixes after that should be done on the bugfix branch.

### 6. Hotfix Branches
* used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.

[Git flow reference](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

# Process of making this Todo App
### 1. Set up My Development Environment
* I use React vite library for this project

### 2. Components
* React components for this application
    * `CreateTodo.jsx` : to create the task enter by user
    * `ShowTodo.jsx` : to show the task enter by user with function edit, delete, and mark as completed task 

### 3. Styling
* I use css to style this todo list project

### 4. Deployment
* I use vercel hosting platform to host this todo project

### 5. Maintenance
* I use version control(git) to keep track of changes.
