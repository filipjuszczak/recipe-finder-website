type ListItem = {
  heading: string;
  body: string;
};

export function List({ items }: { items: ListItem[] }) {
  return (
    <ul className="about-list space-y-8 text-preset-6 text-pretty">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
  );
}

function ListItem({ heading, body }: ListItem) {
  return (
    <li className="flex gap-x-5">
      <div className="space-y-3">
        <h3 className="text-preset-4 text-neutral-900">{heading}</h3>
        <p>{body}</p>
      </div>
    </li>
  );
}
