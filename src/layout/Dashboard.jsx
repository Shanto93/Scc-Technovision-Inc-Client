import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
// import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoIosAddCircle } from "react-icons/io";
import { FaCodeMerge } from "react-icons/fa6";
// import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    const { user } = useContext(AuthContext);
    return (
        <div>

            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-[#a9e1d1]">
                    <ul className="menu p-4">
                        {
                            user &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/userProfile' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                        <CgProfile />
                                        User Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addTask' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                    <IoIosAddCircle />
                                        Add Tasks
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allTasks' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>
                                    <FaCodeMerge />
                                        All Tasks
                                    </NavLink>
                                </li>

                            </>

                        }


                        {/* Shared Navlinks */}

                        <div className="divider"></div>

                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Home</NavLink></li>

                        <li><NavLink to='/contactUs' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Contact Us</NavLink></li>

                        <li><NavLink to='/dashboard' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Dashboard</NavLink></li>

                        <li><NavLink to='/login' className={({ isActive }) => isActive ? 'btn bg-[#11e4a5] border-0 text-white ml-3 font-bold hover:bg-[#6aaf9a] btn-sm' : 'btn btn-ghost btn-sm'}>Login</NavLink></li>

                    </ul>
                </div>
                {/* dashboard contant */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;