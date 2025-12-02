'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@/app/_components/chevron-down-icon';

const OPTIONS = ['0', '5', '10', '15', '20'];

export function CookTimeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cookTime, setCookTime] = useState(searchParams.get('cookTime') ?? '');

  const handleValueChange = (value: string) => {
    const newCookTime = value === 'none' ? '' : value;
    setCookTime(newCookTime);
    const newSearchParams = new URLSearchParams(searchParams);
    if (newCookTime === '') {
      newSearchParams.delete('cookTime');
    } else {
      newSearchParams.set('cookTime', newCookTime);
    }
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="px-4 py-2.5 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-0 rounded-[0.625rem] bg-neutral-0 text-preset-7 transition-colors cursor-pointer"
          aria-label={`Max cook time: ${cookTime} minutes`}
        >
          Max Cook Time <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-60 border-neutral-300 rounded-[0.625rem] shadow-[0_12px_22px_-12px_rgba(57,88,82,0.16)]">
        <DropdownMenuRadioGroup
          value={cookTime}
          onValueChange={handleValueChange}
          className="text-neutral-900"
        >
          {OPTIONS.map((opt) => (
            <DropdownMenuRadioItem key={opt} value={opt}>
              {opt} minutes
            </DropdownMenuRadioItem>
          ))}
          <DropdownMenuRadioItem value="none" showRadio={false}>
            Clear
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
