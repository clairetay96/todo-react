import React from 'react'
import ToDoItem from './ToDoItem.js'
import Input from './Input.js'

//all styling available in the index.css file
class ToDoList extends React.Component {
    constructor () {
        super()

        this.state = {
            items: [], //items to generate todo list for
            value: "",  //value in the input field
            inputValid: true //whether the input is valid or not
        }

        this.clickHandler = this.clickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.toggleClick = this.toggleClick.bind(this)
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        }

    //for add item button next to input field - item must be valid length
    clickHandler(event){
        let x = event.target.value
        if(x.length>=1&&x.length<140){
            let itemToAdd = {
            errand: x,
            done: "false"
            }
            this.setState((prevState)=> ({items:[...prevState.items, itemToAdd], value: ""}))

        } else {
            this.setState({inputValid: false})
        }

    }

    //can just hit Enter to input a new item
    onKeyDownHandler(event){
        if(event.keyCode===13){
            this.clickHandler(event)
        }
    }

    //stores the current value of the input and limits the input to less than 140 characters.
    onChangeHandler(event){
        let x = event.target.value
        if( x.length < 140) {
            this.setState({value: x, inputValid: true})
        }

    }

    //changes the "done" attribute of an item to true or false when the checkbox is clicked on. Note that the true or false here is a string, not a boolean, so it's easier to set className.
    toggleClick(event){
        let errandState = event.target.className //'true*' or 'false*' where * is an integer representing the index of the item in items
        let currentItems = [...this.state.items] //get a copy of state.items to alter

        //if the
        if(errandState.includes("false")) {
            let errandIndex = errandState.slice(5, errandState.length) //slices the className to get the index of the item
            currentItems[errandIndex].done = "true" //sets the done value to the opposite

            this.setState({items: currentItems}) //sets state

        } else if (errandState.includes("true")) {
            //same steps for true items
            let errandIndex = errandState.slice(4, errandState.length)
            currentItems[errandIndex].done = "false"

            this.setState({items: currentItems})
        }
    }

    deleteItem(event){
        //get className and find the index of the item from there.
        let errandState = event.target.className
        let errandIndex = errandState.slice(13, errandState.length)

        //remove the item from the list and set the state.items to be the new list.
        let currentItems = [...this.state.items]
        currentItems.splice(errandIndex, 1)
        this.setState({items: currentItems})
    }

    render() {

        let itemList = this.state.items.map((item, index) => {
            //properties "done" and "deleteID" are unique to the item and will be used as the classNames for styling and classification of each todo item.
            return <ToDoItem errand={item.errand} done={item.done + index} deleteID={"delete-button"+index} toggleClick={this.toggleClick} deleteItem={this.deleteItem} key={index}/>
        })

        return(

            <div className="todo-list">

            <h1>What do I need to do today?</h1>

            <Input onChange={this.onChangeHandler} onClick={this.clickHandler} onKeyDown={this.onKeyDownHandler} inputValid={this.state.inputValid} value={this.state.value}/>

            {itemList}

            </div>)
    }

}

export default ToDoList