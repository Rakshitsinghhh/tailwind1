import bg from '../bg.jpg';

export function Todos() {
    return (
        <div className="relative w-full">
            <img src={bg} alt="Background" className="w-full h-auto" />
            
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <div className='text-white text-lg font-bold bg-opacity-50 p-2 rounded-md w-360 h-160 flex items-center justify-center bg-[#211a62]'>
                        <layout className='text-white text-lg font-bold bg-opacity-50 p-2  w-100 h-177 bg-[#886fed] absolute left-10 top-10'>
                            <button className='bg-[#022a5b] rounded-md text-white px-4 py-2'>
                                Webinar.gg
                            </button>


                        <div className='flex flex-col space-y-4 items-center justify-start absolute top-20 left-5'>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-90'>a1</button>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-90'>a1</button>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-90'>a1</button>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-90'>a1</button>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-90'>a1</button>
                        </div>




                        </layout>

                        <profile className="text-white text-lg font-bold bg-opacity-50 p-2  w-60 h-80 bg-[#886fed] absolute left-120 top-40 rounded-md"></profile>
                        <tasks className='text-white text-lg font-bold bg-opacity-50 p-2  w-100 h-80 bg-[#FFFFFF] absolute left-190 top-70 rounded-md'></tasks>
                        <lnk className='text-white text-lg font-bold bg-opacity-50 p-2  w-60 h-80 bg-[#FFFFFF] absolute left-300 top-70 rounded-md'></lnk>

                    </div>
            </div>
        </div>
    );
}
