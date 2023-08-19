import { HiMenuAlt3, HiOutlineCog, HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import {
    HiOutlineViewGridAdd,
    HiOutlineUser,
    HiOutlineChat,
    HiOutlineDocumentText,
    HiOutlineFolder,
    HiOutlineShoppingCart,
} from "react-icons/hi";

export const Home = () => {
    const menus = [
        {
            name: "Dashboard",
            link: "/",
            icon: HiOutlineViewGridAdd,
        },
        {
            name: "user",
            link: "/",
            icon: HiOutlineUser,
        },
        {
            name: "messages",
            link: "/",
            icon: HiOutlineChat,
        },
        {
            name: "analitycs",
            link: "/",
            icon: HiOutlineDocumentText,
            margin: true,
        },
        {
            name: "File Manager",
            link: "/",
            icon: HiOutlineFolder,
        },
        {
            name: "Cart",
            link: "/",
            icon: HiOutlineShoppingCart,
        },
        {
            name: "Saved",
            link: "/",
            icon: HiOutlineHeart,
            margin: true,
        },
        {
            name: "Setting",
            link: "/",
            icon: HiOutlineCog,
        },
    ];

    const [open, setOpen] = React.useState(true);

    return (
        <section className="flex gap-6">
            <div
                className={`bg-[#0e0e0e] min-h-screen ${
                    open ? "w-72" : "w-16"
                }  transition-all duration-700 text-white px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu.link}
                            key={i}
                            className={` ${
                                menu?.margin && "mt-6"
                            }  group flex gap-3.5 items-center text-base font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu.icon, { size: "20" })}</div>
                            <h2
                                style={{ transitionDelay: `${i + 1}00ms` }}
                                className={`whitespace-pre duration-700 ${
                                    !open && "opacity-0 translate-x-28 overflow-hidden "
                                }`}
                            >
                                {menu.name}
                            </h2>

                            <h2
                                className={` ${
                                    open && "hidden"
                                } absolute left-48 bg-white text-gray-900 font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 w-0 opacity-0 overflow-hidden py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300  group-hover:opacity-100 group-hover:w-fit group-hover:delay-300 `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="m-3 text-xl text-gray-900 font-semibold">REACT TAILWIND</div>
        </section>
    );
};
