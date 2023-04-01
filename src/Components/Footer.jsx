import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col justify-center  backdrop-blur-sm bg-white/30 rounded-xl '>
            <footer className="footer text-center p-3 ">
                <p className="text-gray-200">© 2023.</p>
                <p className="text-gray-200">Designed and developed by <a className='text-blue-500 underline' href="https://github.com/carullahtursun">Carullah Tursun</a> </p>
                <p className="text-gray-200">Find me on <a className='text-blue-500 underline'  href="https://www.linkedin.com/in/carullahtursun/">Linkedin</a></p>
            </footer>
        </div>
    )
}

export default Footer