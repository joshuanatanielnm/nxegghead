import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="header-container">
      <h1>Welcome to Header!</h1>
    </div>
  );
}

export default Header;
