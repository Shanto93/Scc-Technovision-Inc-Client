import { useLoaderData } from "react-router-dom";
import ToDoLayout from "./ToDoLayout/ToDoLayout";

const AllTasks = () => {
    const tasks = useLoaderData();
    console.log(tasks);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-20">
            <div className="bg-[#A5B452] min-h-screen flex-1">
                <h2  className="text-center text-2xl font-semibold py-3 border-b-2 border-white">To-do</h2>
                {
                    tasks.map(task => <ToDoLayout key={task._id} task={task}></ToDoLayout>)
                }

            </div>
            <div className="bg-[#C8D96F] min-h-screen flex-1 ">
                <h2 className="text-center text-2xl font-semibold py-3 border-b-2 border-white">Ongoing</h2>
            </div>
            <div className="bg-[#C4F7A1] min-h-screen flex-1">
                <h2 className=" text-center text-2xl font-semibold py-3 border-b-2 border-white">Completed</h2>
            </div>
        </div>
    );
};

export default AllTasks;