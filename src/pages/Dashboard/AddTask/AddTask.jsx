import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        axios.post('http://localhost:5001/tasks', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data Inserted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <div className="my-10 md:w-1/3 mx-auto">
                <h2 className="text-3xl font-bold text-center">Add Task </h2>
                <p className="text-base text-[#3b3a3a] border-t-2 pt-2 text-center mt-4">Add your task</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full">
                    <div className="w-3/4">
                        {/* camp Name and Image Column */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} placeholder="Task Title" className="input input-bordered" />
                        </div>
                        {errors.title && <span className="text-red-600">Title field is required</span>}
                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" {...register("deadline", { required: true })} placeholder="Select deadline" className="input input-bordered" />
                        </div>
                        {errors.deadline && <span className="text-red-600">Deadline field is required</span>}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <input type="text" {...register("description", { required: true })} placeholder="Details" className="input input-bordered" />
                        </div>
                        {errors.description && <span className="text-red-600">Description field is required</span>}

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select className="select select-bordered" {...register("priority", { required: true })}>
                                <option selected>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                                <option>Others</option>
                            </select>
                        </label>


                        <button type="submit" className="btn w-full mt-7 bg-[#11e4a5] text-white font-bold hover:bg-[#90d4df]">Add Camp</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddTask;