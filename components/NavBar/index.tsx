export default function NavBar() {
  const NavItem = [
    { label: "Home", id: "home" },
    { label: "Work", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Testimonials", id: "tesimonials" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <div className="w-full fixed z-10 my-10 justify-center flex items-center bg  ">
      <ul className="flex bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-900 text-sm font-semibold px-3 rounded-full max-w-fit bg-[#1A1A1A]  mx-[10%]  mb-[8%]   items-center">
        {NavItem.map((item) => (
          <li
            className="hover:bg-gradient-to-tr from-gray-500 via-gray-600 to-gray-800  px-4 py-3   rounded-full  cursor-pointer"
            key={item.id}
          >
            <p className="bg-gradient-to-tr  text-transparent bg-clip-text from-gray-50 via-gray-300 to-gray-500">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
