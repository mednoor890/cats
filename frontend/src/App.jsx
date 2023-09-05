import { Suspense, useState,lazy } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const PetList = lazy(() => import('./pages/PetList'))
const PetDetail = lazy(() => import('./pages/PetDetail'))
const EditPet = lazy(() => import('./pages/EditPet'))
const AddPet = lazy(() => import('./pages/AddPet'))
function App() {
  const [petToEdit, setPetToEdit] = useState(null)
  return (
    <>
      <div className='app'> 
      <h1>Pet shelter</h1>
<Router>
  <Routes>
    <Route 
    path='/'
    element={
      <Suspense fallback={<>waywa</>}>
        <PetList/>
      </Suspense>
    }
    />
    <Route
    path='/:petId'
    element={
        <Suspense fallback={<></>}>
            <PetDetail setPetToEdit={setPetToEdit} />
        </Suspense>
    }
    />
    <Route path='/:petId/edit'
                        element={
                            <Suspense fallback={<></>}>
                                <EditPet petToEdit={petToEdit} />
                            </Suspense>
                        }/>
    <Route
    path='/add'
    element={
        <Suspense fallback={<></>}>
            <AddPet />
        </Suspense>
    }
    />
  </Routes>
</Router>
      </div>
    </>
  )
}

export default App
