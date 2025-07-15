import { createContext, useState } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

  return (
    <SearchContext.Provider value={{ terminoBusqueda, setTerminoBusqueda, categoriaSeleccionada, setCategoriaSeleccionada }}>
      {children}
    </SearchContext.Provider>
  )
}
