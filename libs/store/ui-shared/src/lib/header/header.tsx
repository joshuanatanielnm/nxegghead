import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header;
