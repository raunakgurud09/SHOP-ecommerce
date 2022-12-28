import cx from "classnames";

export default function FilledButton({ text, classNames }: any) {
  return (
    <>
      <button
        className={cx(
          "w-auto px-6 py-3 mr-2 rounded-3xl text-white font-medium text-sm bg-indigo-800 dark:bg-indigo-500",
          classNames
        )}
      >
        {text}
      </button>
    </>
  );
}
