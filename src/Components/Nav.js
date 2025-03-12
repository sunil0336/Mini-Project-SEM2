import React from 'react'

function Nav() {
    return (
        <header className="bg-[#111827] shadow-sm absolute top-0 left-0 w-full z-10">
            <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Tic Tac Toe <span className="text-sm font-normal text-slate-400">Game Theory</span></h1>
                <span className="text-sm text-slate-500">MSc Computer Science Mini Project</span>
                
            </div>
        </header>
    )
}

export default Nav