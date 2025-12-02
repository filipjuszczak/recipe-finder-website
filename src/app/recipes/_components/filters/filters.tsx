import { Suspense } from 'react';
import { TimeFilters } from './time-filters';
import { NameFilter } from './name-filter';

export function Filters() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-6">
      <Suspense>
        <TimeFilters />
      </Suspense>
      <div className="grow md:grow-0 md:min-w-77.5 relative">
        <Suspense>
          <NameFilter />
        </Suspense>
      </div>
    </div>
  );
}
