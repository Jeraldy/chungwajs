import Div from "./framework/core/Div";
import TextView from "./framework/core/TextView";
import Button from "./framework/core/Button";
import Chungwa from "./framework/chungwa/index";
import TextInput from "./framework/core/TextInput";
import UnorderedList from "./Core/UnorderedList";
import ListItem from "./framework/core/ListItem";

class MyComponent extends Chungwa {
  constructor() {
    super()
    this.state = {
      todos: [],
      name: ""
    };
    return this.connectedCallBack(this);
  }

  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.name],
      name: ""
    })
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  deleteTodo(value) {
    this.setState({
      todos: this.state.todos.filter((v) => v != value)
    })
  }

  render() {

    const { todos } = { ...this.state }
    var todosComp = []

    todos.forEach((v) => {
      todosComp.push(
        ListItem({
          children: [
            TextView(v),
            Button({
              onclick: () => this.deleteTodo(v),
              children: [
                TextView("x")
              ]
            })
          ]
        })
      )
    })

    return Div({
      children: [
        TextInput({
          onkeyup: (e) => this.handleChange(e),
          value: this.state.name
        }),
        Button({
          children: [
            TextView("ADD TODO"),
          ],
          onclick: () => this.handleClick()
        }),
        UnorderedList({ children: todosComp })
      ]
    })
  }
}


document.body.appendChild(new MyComponent());
