import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <span className="font-medium">Hello, Admin</span>
                <img
                    src="https://tse3.mm.bing.net/th/id/OIP.glJi_pxCjl1zEf8_B8oxWAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="User"
                    className="w-8 h-8 rounded-full border"
                />
            </div>
        </header>
    );
}

export default Header