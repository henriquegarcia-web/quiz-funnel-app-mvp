import { useEffect, useState } from 'react'

import { ADMIN_ROLES, IRole } from '@/data/admin'

const useRoleDetails = (id: string): IRole | null => {
  const [roleDetails, setRoleDetails] = useState<IRole | null>(null)

  useEffect(() => {
    const role = ADMIN_ROLES.find((role) => role.id === id)
    if (role) {
      setRoleDetails(role)
    }
  }, [id])

  return roleDetails
}

export default useRoleDetails
