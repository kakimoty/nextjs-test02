import { memo, useEffect } from 'react'

import { SysConst } from '../lib/SysConst'

// Header
export const Header: React.VFC = memo(() => {
  // useEffect
  useEffect(() => {}, [])

  // return
  return (
    <div>
      <div>Header2</div>
    </div>
  )
})

Header.displayName = 'Header'
