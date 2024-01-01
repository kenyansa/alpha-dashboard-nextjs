'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const SearchParams = useSearchParams ();
  const pathname = usePathname();
  const {replace} = useRouter();

  function handleSearch(term: string){
    const params = new URLSearchParams(SearchParams)
    if(term){
      params.set('query', term);
    }else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`); //updates the URL with the user's search data. For example, /dashboard/invoices?query=lee if the user searches for "Lee".
    // The URL is updated without reloading the page
    
  }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{
          handleSearch(e.target.value);
        }}
        defaultValue={SearchParams.get('query')?.toString()} //ensures the input field is in sync with the URL and will be populated when sharing
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
