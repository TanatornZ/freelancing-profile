import { Link } from "react-router-dom";
import { cx } from '@emotion/css'

type Props = {
  title: string;
  href: string;
  className?: string;
};

function CustomLink({title , href , className}: Props) {
  return (
    <Link
      to={href}
      className={cx("inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40", className)}
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default CustomLink;
