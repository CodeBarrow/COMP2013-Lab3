import type {FormComponentProps} from "./TodoApp";

export default function FormComponent({
    title, 
    handleFormOnChange,
    handleOnSubmit,
}: FormComponentProps) {
    return (
        <div className="FormComponent">
            <form onSubmit={handleOnSubmit} >
                <label htmlFor = "title">Title</label>
                <input type = "text" name = "title" id = "title" value = {title} onChange={handleFormOnChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
}