/* eslint-disable react/prop-types */
const ToDoLayout = ({ task }) => {
    const { title, description, priority } = task;
    return (
        <div className="bg-slate-100 rounded-xl p-4 mt-2 mx-3">
            <h2>{title}</h2>
            <p>{description} </p>
            <p>{priority} </p>
        </div>
    );
};

export default ToDoLayout;