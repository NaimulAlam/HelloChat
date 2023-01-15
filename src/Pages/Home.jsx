import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat/Chat'


const Home = () => {
  return (
    <div className="container mx-auto p-5">
      <div class="flex flex-row rounded-tr-xl">
        <div class="basis-1/3 bg-gray-500 rounded-tl-2xl rounded-bl-2xl">
          <Sidebar></Sidebar>
        </div>
        <div class="basis-2/3 rounded-2xl">
          <div className="flex items-center justify-center h-screen  bg-slate-800 rounded-tr-2xl rounded-br-2xl">
            <Chat></Chat>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home