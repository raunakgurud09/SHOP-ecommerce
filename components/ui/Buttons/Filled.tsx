import cx from 'classnames'
import Link from 'next/link'

export default function FilledButton({ text, href, classNames, onClick }: any) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          role="button"
          className={cx(
            'w-auto px-6 py-3 mr-2 rounded-3xl text-white font-medium text-sm bg-indigo-800 dark:bg-indigo-500',
            classNames
          )}
          passHref
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={cx(
            'w-auto px-6 py-3 mr-2 rounded-3xl text-white font-medium text-sm bg-indigo-800 dark:bg-indigo-500',
            classNames
          )}
        >
          {text}
        </button>
      )}
    </>
  )
}
