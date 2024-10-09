import React from 'react'
import InputLabel from './InputLabel'
import TextInput from './TextInput'
import InputError from './InputError'

const DialogWithForm = (isOpen) => {
  if (!isOpen) return null;
  return (
    <div>
<div
  class=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
>
  <div
    class="relative mx-auto w-full max-w-[24rem] rounded-lg overflow-hidden shadow-sm"
  >
    <div class="relative flex flex-col bg-white">
      </div>
      <div class="flex flex-col gap-4 p-6">
        <div class="w-full max-w-sm min-w-[200px]">
            <InputLabel value="First Name" />
            <TextInput type="text" />
            <InputError message="Error" />
        </div>
        
        <div class="w-full max-w-sm min-w-[200px]">
            <InputLabel value="First Name" />
            <TextInput type="text" />
            <InputError message="Error" />
        </div>
    
        <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>
      </div>
      <div class="p-6 pt-0">
        <button class="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Sign In
        </button>
        <p class="flex justify-center mt-6 text-sm text-slate-600">
          Don&apos;t have an account?
          <a href="#signup" class="ml-1 text-sm font-semibold text-slate-700 underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default DialogWithForm