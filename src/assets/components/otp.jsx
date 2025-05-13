export function Otp()
{
    return (
        <>
            <div className='bg-[#002a5a] min-h-screen flex justify-center items-center'>
                <div className='flex flex-col items-center space-y-4'>
                    <div>
                        <span className='text-[#35c3bd] text-4xl'>Webinar</span>
                        <span className='text-white text-4xl'>.gg</span>
                    </div>

                <div className='flex flex-col items-center space-y-6 p-6'></div>

                <h1 className='font-bold text-xl text-[#ffffff]'>
                Check Your Email For a Code
                </h1>

                <div className='flex flex-col items-center space-y-6 p-6'></div>

                <div className="text-[white]">
                    Please enter verification code send to your email
                </div>

                <div>
                    <span className="flex flex-row items-center space-x-2 ">
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                        <input
                        type="text"
                        maxLength={1}
                        className="w-10 h-10 text-center rounded-md border border-gray-300 
                                    placeholder:text-white bg-[#426286] text-[#19406b] 
                                    shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                        />
                    </span>
                </div>
                
                <div className='flex flex-col items-center space-y-1 p-1'></div>



                <button className='hover:bg-[#3fe0d0] hover:text-[black] px-24 py-2 rounded-md border text-[white] bg-[#7f95ac]'>Continue</button>
                </div>
            </div>
        </>
    )
}