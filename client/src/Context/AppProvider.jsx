import React from 'react'
import { ResumeProvider } from './ResumeDataContext.jsx'

const AppProvider = ({children}) => {
  return (
    <ResumeProvider>
      {children}
    </ResumeProvider>
  )
}

export default AppProvider