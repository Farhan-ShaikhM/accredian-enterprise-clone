interface SectionTitleProps {
  title: string;
  highlight: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  highlight,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        {title}{" "}
        <span className="text-blue-600">
          {highlight}
        </span>
      </h2>

      <p className="mt-3 text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}