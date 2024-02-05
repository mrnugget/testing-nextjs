'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Sidebar from '@/components/Sidebar'

export default function LayoutSidebar({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
        open={sidebarOpen}
      >
        <div className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex">
          <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>

            <Sidebar />
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <Sidebar />
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-8 shrink-0 items-center gap-x-4 bg-white px-4 pt-5 sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="mt-2 h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="max-w-8xl relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          {children}
        </main>
      </div>
    </div>
  )
}
