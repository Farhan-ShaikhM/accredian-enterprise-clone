import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white shadow-md border border-gray-100",
        className
      )}
    >
      {children}
    </div>
  );
}