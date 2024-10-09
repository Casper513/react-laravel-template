import React from 'react';
import clsx from 'clsx';

const Dialog = ({ isOpen, title, body, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-10 opacity-100 backdrop-blur-sm">
      <div className="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm bg-white p-4">
        <div className={clsx('pb-2 text-xl font-medium text-slate-800 flex items-center', {
          'border-b': title, 
          'hidden': !title,
        })}>
          {title}
        </div>
        <div className="relative border-slate-200 py-4 leading-normal text-slate-600 font-light">
          {body}
        </div>
        <div className="flex items-center justify-end pt-4">
          <button
            className="rounded-md border border-transparent py-2 px-4 text-sm text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:opacity-50"
            onClick={onCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            className="ml-2 rounded-md bg-green-600 py-2 px-4 text-sm text-white hover:bg-green-700 focus:bg-green-700 active:bg-green-700"
            onClick={onConfirm}
            type="button"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
