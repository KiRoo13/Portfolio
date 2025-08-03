import './ButtonBurger.css'


 function ButtonBurger({ openAndCloseMenu }) {
  return (
    <button className="burger-btn" onClick={openAndCloseMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"

      >
        <path
          fill='black'
          d="M3.563 4.063a.5.5 0 0 1 0-1l16.874-.001a.5.5 0 0 1 0 1zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1z"
        ></path>
      </svg>
    </button>
  );
}

export default ButtonBurger