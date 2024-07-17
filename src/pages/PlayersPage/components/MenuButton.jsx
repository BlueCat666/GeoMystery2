const MenuButton = ({ icon, label }) => (
    <button className="flex gap-3 items-center text-xl hover:bg-customBorder pl-3 py-2 pr-12 rounded text-customWhite">
      <i className="h-6 w-6">{icon}</i>
      {label}
    </button>
  );


export default MenuButton;