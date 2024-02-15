export default function SidebarComponent({
  href,
  icon,
  name,
}: {
  href: string;
  icon: JSX.Element;
  name: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon}
        <span className="ms-3">{name}</span>
      </a>
    </li>
  );
}
