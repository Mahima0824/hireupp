import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaTimes, FaEye, FaCheckCircle, FaClock } from 'react-icons/fa'

const NotificationModal = ({ isOpen, onClose, notifications }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'view':
        return <FaEye className="w-5 h-5 text-blue-500" />
      case 'shortlist':
        return <FaCheckCircle className="w-5 h-5 text-green-500" />
      case 'pending':
        return <FaClock className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getMessage = (type) => {
    switch (type) {
      case 'view':
        return 'Viewed your application'
      case 'shortlist':
        return 'Shortlisted your application'
      case 'pending':
        return 'Application under review'
      default:
        return ''
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md dark:bg-gray-800">
                  <div className="flex h-full flex-col bg-white dark:bg-gray-800 shadow-xl">
                    <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 px-4 py-6 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                          Notifications
                        </Dialog.Title>
                        <button
                          type="button"
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          onClick={onClose}
                        >
                          <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 py-6 sm:px-6 overflow-y-auto overscroll-contain">
                      <div className="space-y-3">
                        {notifications?.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 rounded-lg border ${notification.read ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700' : 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors">
                                {getIcon(notification.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                  {notification.company} - {notification.position}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {getMessage(notification.type)}
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NotificationModal
