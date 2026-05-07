import React, { useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (heading.trim() === '' || details.trim() === '') {
      alert('Please fill all fields')
      return
    }

    setTask([...task, { heading, details }])

    setHeading('')
    setDetails('')
  }

  const deleteHandler = (index) => {
    const copyTask = [...task]
    copyTask.splice(index, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white p-6'>

      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10'>

        {/* Left Section */}
        <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl'>

          <h1 className='text-5xl font-bold mb-2'>
            Notes Manager
          </h1>

          <p className='text-gray-300 mb-8'>
            Organize your thoughts with a clean and modern notes application.
          </p>

          <form
            onSubmit={submitHandler}
            className='flex flex-col gap-5'
          >

            <input
              type='text'
              placeholder='Enter note title'
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className='w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20
              outline-none focus:border-blue-500 transition-all duration-300'
            />

            <textarea
              placeholder='Write your note details...'
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className='w-full h-40 px-5 py-3 rounded-2xl bg-white/10 border border-white/20
              outline-none resize-none focus:border-blue-500 transition-all duration-300'
            />

            <button
              type='submit'
              disabled={!heading.trim() || !details.trim()}
              className='bg-blue-600 hover:bg-blue-700 transition-all duration-300
              disabled:bg-gray-600 disabled:cursor-not-allowed
              py-3 rounded-2xl font-semibold text-lg shadow-lg'
            >
              Add Note
            </button>

          </form>
        </div>

        {/* Right Section */}
        <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl'>

          <div className='flex items-center justify-between mb-6'>
            <h1 className='text-4xl font-bold'>Your Notes</h1>

            <span className='bg-blue-600 px-4 py-1 rounded-full text-sm'>
              {task.length} Notes
            </span>
          </div>

          <div className='grid sm:grid-cols-2 gap-5 max-h-[75vh] overflow-auto pr-2'>

            {task.length > 0 ? (
              task.map((item, index) => (
                <div
                  key={index}
                  className='bg-white text-black rounded-2xl p-5 shadow-xl
                  flex flex-col justify-between min-h-[220px]'
                >

                  <div>
                    <h2 className='text-2xl font-bold border-b pb-2 break-words'>
                      {item.heading}
                    </h2>

                    <p className='mt-4 text-gray-700 break-words'>
                      {item.details}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteHandler(index)}
                    className='mt-6 bg-red-500 hover:bg-red-600 text-white
                    py-2 rounded-xl transition-all duration-300'
                  >
                    Delete
                  </button>

                </div>
              ))
            ) : (
              <div className='text-gray-400 text-lg'>
                No notes added yet...
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default App