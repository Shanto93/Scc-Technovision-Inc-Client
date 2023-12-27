/* eslint-disable react/prop-types */
import { FaTrash, FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useTasks from './../../../../hooks/useTasks';
import { Link } from "react-router-dom";


const ToDoLayout = ({ task }) => {
    const { _id, title, description, priority, deadline } = task;

    // const [tasks,  , refetch] = useTasks();
    const [refetch, tasks] = useTasks();
    const axiosPublic = useAxiosPublic();
    console.log(tasks);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${_id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${tasks.title} has been deleted.`,
                        icon: "success"
                    });

                }
            }
        });
    }



    return (
        <div className="bg-slate-100 rounded-xl p-4 mt-2 mx-3">
            <div className="flex justify-between items-center">
                <h2>{title}</h2>
                <button onClick={() => handleDelete(_id)} className="btn text-2xl text-red-700">
                    <FaTrash />
                </button>
            </div>

            <p>{description} </p>

            <div className="flex justify-between items-center">
                <p>{deadline} </p>
                <Link to={`/dashboard/updateTasks/${_id}`}>
                    <button className="btn text-2xl text-blue-700">
                        <FaEdit />
                    </button>
                </Link>
            </div>

            <p>{priority} </p>

        </div>
    );
};

export default ToDoLayout;