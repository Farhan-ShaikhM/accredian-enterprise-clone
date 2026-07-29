interface Props {
  title: string;
  items: readonly string[];
}

export default function FooterColumn({
  title,
  items,
}: Props) {
  return (
    <div>
      <h4 className="mb-5 font-semibold text-white">
        {title}
      </h4>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="transition hover:text-blue-400"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}