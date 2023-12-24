const PeopleUsing = () => {
    return (
        <div>
            <div className="my-10 md:w-1/3 mx-auto">
                <h2 className="text-3xl font-bold text-center">Users </h2>
                <p className="text-base text-[#3b3a3a] border-t-2 pt-2 text-center mt-4">People who are using our website</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="mockup-phone w-60 h-[450px]">
                <div className="camera"></div>
                <div className="display ">
                    <div className="flex justify-center items-center mt-10">
                        <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/qySj05W/profile01.jpg" alt="" />
                    </div>
                    <div className="space-y-2 mt-5">
                        <h2 className="text-center text-2xl text-white font-semibold">Charlie</h2>
                        <p className="text-center text-white">Developer</p>
                        <p className="p-4 text-wrap text-gray-400">They could benefit from task management for project planning, tracking bugs, feature implementation, and collaboration.</p>
                    </div>
                </div>
            </div>

            {/* Second */}
            <div className="mockup-phone w-60 h-[450px]">
                <div className="camera"></div>
                <div className="display ">
                    <div className="flex justify-center items-center mt-10">
                        <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/0ssfBkL/profile08.jpg" alt="" />
                    </div>
                    <div className="space-y-2 mt-5">
                        <h2 className="text-center text-2xl text-white font-semibold">Alice</h2>
                        <p className="text-center text-white">Bankers</p>
                        <p className="p-4 text-wrap text-gray-400">They might benefit from task management for financial tracking, project management, and compliance tasks.</p>
                    </div>
                </div>
            </div>

            {/* Third */}
            <div className="mockup-phone w-60 h-[450px]">
                <div className="camera"></div>
                <div className="display ">
                    <div className="flex justify-center items-center mt-10">
                        <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/DfqsdmW/profile20.jpg" alt="" />
                    </div>
                    <div className="space-y-2 mt-5">
                        <h2 className="text-center text-2xl text-white font-semibold">Walter white</h2>
                        <p className="text-center text-white">Freelancers</p>
                        <p className="p-4 text-wrap text-gray-400">Task management aids in organizing client work, deadlines, and invoicing.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PeopleUsing;