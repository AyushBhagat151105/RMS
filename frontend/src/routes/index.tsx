import Login from '@/page/Login'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <Login />
    </div>
  )
}
