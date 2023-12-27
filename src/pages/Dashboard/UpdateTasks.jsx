/* eslint-disable no-unused-vars */

import { useForm } from 'react-hook-form';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateTasks = () => {

    const { _id, title, description, priority, deadline } = useLoaderData();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // console.log(camp);
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);
        axiosPublic.patch(`/tasks/${_id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="my-10 md:w-1/3 mx-auto">
                <h2 className="text-3xl font-bold text-center">Update Task </h2>
                <p className="text-base text-[#3b3a3a] border-t-2 pt-2 text-center mt-4">Update your task</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center w-full">
                    <div className="w-3/4">
                        {/* camp Name and Image Column */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input type="text" {...register("title", { required: true })} defaultValue={title} className="input input-bordered" />
                        </div>
                        {errors.title && <span className="text-red-600">Title field is required</span>}


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" {...register("deadline", { required: true })} defaultValue={deadline} className="input input-bordered" />
                        </div>
                        {errors.deadline && <span className="text-red-600">Deadline field is required</span>}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <input type="text" {...register("description", { required: true })} defaultValue={description} className="input input-bordered" />
                        </div>
                        {errors.description && <span className="text-red-600">Description field is required</span>}

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Priority</span>
                            </div>
                            <select className="select select-bordered"  {...register("priority", { required: true })} defaultValue={priority}>
                                <option selected>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                                <option>Others</option>
                            </select>
                        </label>


                        <button type="submit" className="btn w-full mt-7 bg-[#11e4a5] text-white font-bold hover:bg-[#90d4df]">Update</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateTasks;