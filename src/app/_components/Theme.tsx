'use client'

import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ThemeToggler = () => {
  return (
    <button
      className="border-transparent rounded text-lg flex ml-auto border-1 h-1.75rem pb-0 transition text-gray-700 w-1.75rem duration-200 self-end items-center justify-center !outline-none dark:text-gray-200 hover:border-gray-200 hover:text-gray-700 focus:border-gray-200 focus:text-gray-700 dark:hover:border-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-700 dark:focus:text-gray-200"
      onClick={() => {
        alert('TODO: Implement theme toggler')
      }}
    >
      <FontAwesomeIcon icon={faMoon} className="mx-2" title="Theme Toggle" />
    </button>
  )
}
