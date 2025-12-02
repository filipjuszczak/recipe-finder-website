import { PrepTimeFilter } from './prep-time-filter';
import { CookTimeFilter } from './cook-time-filter';

export function TimeFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <PrepTimeFilter />
      <CookTimeFilter />
    </div>
  );
}
