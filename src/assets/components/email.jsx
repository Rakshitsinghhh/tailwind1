export function Email()
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
                Let's Get Started 
                </h1>

                <div className='flex flex-col items-center space-y-6 p-6'></div>

                <input
                className="px-4 py-2 rounded-md border border-gray-300 w-64 
                placeholder:text-[FFFFFF] bg-[#426286] text-[#19406b] 
                shadow-inner focus:outline-none focus:ring-2 focus:ring-[#35c3bd]"
                placeholder="Email" type="Email"
                />
                
                <div className='flex flex-col items-center space-y-1 p-1'></div>

                <button className='hover:bg-[#3fe0d0] hover:text-[black] px-24 py-2 rounded-md border text-[white] bg-[#7f95ac]'>Continue</button>
                </div>
            </div>
        </>
    )
}