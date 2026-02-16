import React from 'react'

function UserInfo({id,updateChats,person}) {
    
  return (
    <section className={`md:max-w-xs max-h-16 p-2 transition duration-200 ease-in-out ${(person.person)===id?"bg-[#3d4957] rounded-xl ":"hover:bg-[#3d4957] rounded-xl"}`} style={{cursor:"pointer"}} onClick={()=>{updateChats(id),person.updateChatPerson(id)}}>
        <div className='flex gap-1 items-center '>
            <div className='   rounded-ful p-1'>
                <img className='  border border-stone-700 min-h-5 min-h-5 max-h-5 max-h-5  sm:min-h-10 sm:min-w-10 sm:max-h-10 sm:max-w-10 overflow-hidden rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThShvv8vPmx4ZDnSe4QawgiRWGx9lEj-OZCA&s" alt="person" />
            </div>
            <div >
                <p   className='truncate sm:max-w-62 sm:min-w-62'>{id}</p>
            </div>
        </div>
    </section>
  )
}

export default UserInfo