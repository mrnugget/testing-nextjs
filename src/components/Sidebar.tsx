'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { navigation } from '@/lib/navigation'

import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function Sidebar() {
  const pathname = usePathname()

  const [currentPath, setCurrentPath] = useState<String>()

  useEffect(() => {
    function onScroll() {
      const currentHash = window.location.hash.replace('#', '')
      setCurrentPath(pathname + (currentHash ? `#${currentHash}` : ''))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-stone-50 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <p className="font-display text-3xl font-semibold text-amber-500">
          Testing Next.js
        </p>
      </div>
      <nav className="flex flex-1 flex-col text-base lg:text-sm">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {navigation.map((section) => (
            <li key={section.title}>
              <h2 className="font-medium leading-6 text-stone-900 dark:text-white">
                {section.title}
              </h2>
              <ul
                role="list"
                className="mt-2 space-y-2 border-l-2 border-stone-100 lg:mb-4 lg:mt-4 lg:space-y-4 lg:border-stone-200 dark:border-stone-800"
              >
                {section.links.map((link) => (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      prefetch={true}
                      className={clsx(
                        ' block h-5 w-full pl-3.5',
                        link.href === currentPath
                          ? 'font-semibold text-amber-500'
                          : 'text-stone-500 hover:text-stone-600 dark:text-stone-400  dark:hover:text-stone-300',
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="mt-auto">
            <Link
              href="#"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-stone-600 hover:bg-stone-700 hover:text-white"
            >
              <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-stone-600 group-hover:text-white"
                aria-hidden="true"
              />
              Version: 0.1.1412
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
