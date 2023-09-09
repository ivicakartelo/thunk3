import * as React from 'react';

export default function CardTailwindImage() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={process.env.PUBLIC_URL + 'assets/images/1.jpg'} alt={'Image 1'} />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Tailwind Image</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Unparalleled Lodging Options for Your Team</a>
      <p className="mt-2 text-slate-500">Are you considering a corporate excursion for your team to savor delectable cuisine and bask in the sun? We've compiled a selection of destinations that offer precisely that experience.</p>
    </div>
  </div>
</div>
  )
}


