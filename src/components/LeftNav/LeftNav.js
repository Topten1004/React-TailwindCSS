import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the accessToken cookie
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // Redirect to the first page
        navigate('/');
    };

    return (
        <div className="w-full h-[calc(100vh-100px)] 
                        border border-[#55555555] ml-[10px]
                        flex flex-col items-center"
        >
            <div className="flex flex-col justify-center items-center mt-[40px]">
                <div className="flex flex-col items-center top-[50px]">
                    <div className="w-[150px] h-[150px] rounded-[50%] border border-[#55555555]">
                        {/* your photo */}
                    </div>
                    <button type="button" className="mt-[20px] text-[white]" onClick={handleLogout}>Logout</button>
                </div>
                <div className="flex flex-col items-start text-[white] gap-[10px] mt-[50px]">
                    <button className="font-poppins_semibold" type="button">Profile</button>
                    <button className="font-poppins_semibold" type="button">KeyGen</button>
                    <button className="font-poppins_medium" type="button">History</button>
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
