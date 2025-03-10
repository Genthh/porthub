import React from 'react'

export const DownloadCvButton = () => {
  return (
    <button
        className="bg-light w-full mb-5 text-sm text-primary border border-customColor rounded-full hover:bg-primary hover:text-white duration-150 ease-in py-3 flex justify-center items-center"
  >
    <a href="/Resume - Lorik Zekaj.pdf" download="Resume - Lorik Zekaj.pdf" className="w-full h-full flex justify-center items-center">
      Download CV
    </a>
  </button>
  )
}
