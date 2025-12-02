'use client';

import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export function NameFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchParamsUpdate = () => {
    if (searchParams.size === 0) return;
    const query = inputRef.current?.value || '';
    const newSearchParams = new URLSearchParams(searchParams);
    if (query === '') {
      newSearchParams.delete('query');
    } else {
      newSearchParams.set('query', query);
    }
    router.push(`?${newSearchParams.toString()}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchParamsUpdate();
    }
  };

  return (
    <>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <SearchIcon />
      </div>
      <label htmlFor="query" className="sr-only">
        Search by name or ingredient...
      </label>
      <input
        ref={inputRef}
        id="query"
        type="text"
        name="query"
        defaultValue={searchParams.get('query') ?? undefined}
        placeholder="Search by name or ingredient..."
        className="w-full px-4 pl-11 py-2.5 border border-neutral-300 hover:border-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 rounded-[0.625rem] bg-neutral-0 text-preset-7 placeholder:text-neutral-900/70 transition-colors"
        onKeyDown={handleKeyDown}
        onBlur={handleSearchParamsUpdate}
      />
    </>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 21"
      aria-hidden="true"
    >
      <path
        fill="#163A34"
        fillRule="evenodd"
        d="M3.336 9.318A5.872 5.872 0 0 1 9.2 3.453a5.872 5.872 0 0 1 5.865 5.865 5.873 5.873 0 0 1-5.865 5.866 5.873 5.873 0 0 1-5.865-5.866Zm15.412 8.716-3.832-3.823a7.492 7.492 0 0 0 1.817-4.893c0-4.153-3.38-7.532-7.532-7.532-4.153 0-7.532 3.38-7.532 7.532 0 4.153 3.38 7.532 7.532 7.532a7.477 7.477 0 0 0 4.494-1.502l3.876 3.866 1.177-1.18Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
