import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  icon: IconType;
  text: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbsProps> = ({
  items,
}: BreadcrumbsProps): ReactElement => {
  return (
    <div className="text-sm breadcrumbs pb-4">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="capitalize">
            {item.href ? (
              <Link to={item.href} className="gap-1">
                {item.icon && (
                  <item.icon className="stroke-current" size={"1rem"} />
                )}
                {item.text}
              </Link>
            ) : (
              <span className="inline-flex gap-2 items-center">
                {item.icon && (
                  <item.icon className="stroke-current" size={"1rem"} />
                )}
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
