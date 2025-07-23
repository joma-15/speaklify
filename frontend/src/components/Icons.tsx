import { Icon } from "@iconify/react";

type CategoryProp = {
  name: string;
  icon: string;
};

export function CategoryIcon({ name, icon }: CategoryProp) {
  return (
    <div className="flex flex-row gap-5">
      <Icon icon={icon} width="35" />
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
}
