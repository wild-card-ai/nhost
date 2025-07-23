import { useAuthenticationStatus } from '@nhost/react'
import { FiLoader } from 'react-icons/fi'
import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const AuthGate: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const location = useLocation()
  const { isLoading, isAuthenticated } = useAuthenticationStatus()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FiLoader className="w-10 h-10 animate-spin text-slate-500" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return <>{children}</>
}
