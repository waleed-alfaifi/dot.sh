import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { useEffect, useState } from 'react'

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const isLight = theme === 'light'
  const isClient = useIsClient()

  const icon = isClient ? (isLight ? faSun : faMoon) : faSpinner

  return (
    <button
      className="rounded sm:text-lg flex pb-0 transition duration-200"
      onClick={() => {
        setTheme(isLight ? 'dark' : 'light')
      }}
    >
      <FontAwesomeIcon
        icon={icon as IconDefinition}
        fixedWidth
        title="Theme Toggle"
        spin={!isClient}
      />
    </button>
  )
}
