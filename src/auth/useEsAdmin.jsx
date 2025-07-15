const useEsAdmin = () => {
  const role = sessionStorage.getItem('userRole')
  return role === 'admin'
}

export default useEsAdmin
