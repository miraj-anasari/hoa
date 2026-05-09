import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  src?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className, name, src, ...props }, ref) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm dark:bg-slate-200 dark:text-slate-950",
        className,
      )}
      {...props}
    >
      {src ? <img src={src} alt={name} className="h-full w-full rounded-2xl object-cover" /> : initials}
    </div>
  );
});

Avatar.displayName = "Avatar";

export { Avatar };
