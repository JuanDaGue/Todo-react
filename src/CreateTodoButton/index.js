import "./CreateTodoButton.css"
import { IconPlus } from "./IconPlus";
function CreateTodoButton(props){
    const handleClick = () => {
        console.log('You pushed the button');
        props.setOpenModal(state => !state);
        if(props.setOpenModal){
        const button = document.querySelector('.CreatedTodobutton');
        button.style.zIndex = '1';
        
            const button2 = document.querySelector('.CreatedTodobutton2');
            button2.style.zIndex = '';
        }
      };
    return(
        <button 
        className="CreatedTodobutton Icon Icon-svg2"
        onClick={handleClick}
        
        > <IconPlus/> </button>
    )
}
export { CreateTodoButton };