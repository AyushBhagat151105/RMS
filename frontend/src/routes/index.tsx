import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <h1 className='text-2xl font-bold'>This is test/git</h1>
    </div>
  )
}
