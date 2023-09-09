const iconPlaces = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="navigation__icon"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
  </svg>
);

const iconNewPlace = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="navigation__icon"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13"></path>
    <path d="M9 4v13"></path>
    <path d="M15 7v13"></path>
  </svg>
);

const iconLogout = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="navigation__icon"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
    <path d="M9 12h12l-3 -3"></path>
    <path d="M18 15l3 -3"></path>
  </svg>
);

export { iconPlaces, iconNewPlace, iconLogout };
