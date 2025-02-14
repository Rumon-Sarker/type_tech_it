"use client";
import { React, useState } from "react";
import { FaFilter, FaSearch, FaArrowDown, FaArrowRight } from "react-icons/fa";


const sectionsData = [
    {
        id: 1,
        title: "Broward County",
        cards: [
            { id: 1, title: "Miami-Dade County", img: "/countryImg/image1.jpg" },
            { id: 2, title: "Brickell", img: "/countryImg/image 90.jpg" },
            { id: 3, title: "Downtown Miami", img: "/countryImg/image2.jpg" },
            { id: 4, title: "Wynwood", img: "/countryImg/image3.jpg" },
            { id: 5, title: "Edgewater", img: "/countryImg/image5.jpg" },
            { id: 6, title: "Doral Central", img: "/countryImg/image6.jpg" },
            { id: 7, title: "Mid Beach", img: "/countryImg/image7.jpg" },
            { id: 8, title: "South Beach", img: "/countryImg/image10.jpg" },
            { id: 9, title: "Miami", img: "/countryImg/image12.jpg" },
            { id: 10, title: "Founders Park", img: "/countryImg/image13.jpg" },
            { id: 11, title: "Dorai Central Park", img: "/countryImg/image14.jpg" },
        ],
    },
    {
        id: 2,
        title: "Miami Dade County",
        cards: [
            { id: 101, title: "Miami-Dade County", img: "/countryImg/image 90.jpg" },
            { id: 102, title: "Brickell", img: "/countryImg/image1.jpg" },
            { id: 103, title: "Downtown Miami", img: "/countryImg/image2.jpg" },
            { id: 104, title: "Wynwood", img: "/countryImg/image3.jpg" },
            { id: 105, title: "Edgewater", img: "/countryImg/image5.jpg" },
            { id: 106, title: "Doral Central", img: "/countryImg/image6.jpg" },
            { id: 107, title: "Mid Beach", img: "/countryImg/image7.jpg" },
            { id: 108, title: "South Beach", img: "/countryImg/image10.jpg" },
            { id: 109, title: "Miami", img: "/countryImg/image12.jpg" },
            { id: 110, title: "Founders Park", img: "/countryImg/image13.jpg" },
            { id: 111, title: "Dorai Central Park", img: "/countryImg/image14.jpg" },
        ],
    },
    {
        id: 3,
        title: "Broward County",
        cards: [
            { id: 101, title: "Miami-Dade County", img: "/countryImg/image 90.jpg" },
            { id: 102, title: "Brickell", img: "/countryImg/image1.jpg" },
            { id: 103, title: "Downtown Miami", img: "/countryImg/image2.jpg" },
            { id: 104, title: "Wynwood", img: "/countryImg/image3.jpg" },
            { id: 105, title: "Edgewater", img: "/countryImg/image5.jpg" },
            { id: 106, title: "Doral Central", img: "/countryImg/image6.jpg" },
            { id: 107, title: "Mid Beach", img: "/countryImg/image7.jpg" },
            { id: 108, title: "South Beach", img: "/countryImg/image10.jpg" },
            { id: 109, title: "Miami", img: "/countryImg/image12.jpg" },
            { id: 110, title: "Founders Park", img: "/countryImg/image13.jpg" },
            { id: 111, title: "Dorai Central Park", img: "/countryImg/image14.jpg" },
        ],
    },
    {
        id: 4,
        title: "Monroe County",
        cards: [
            { id: 101, title: "Miami-Dade County", img: "/countryImg/image 90.jpg" },
            { id: 102, title: "Brickell", img: "/countryImg/image1.jpg" },
            { id: 103, title: "Downtown Miami", img: "/countryImg/image2.jpg" },
            { id: 104, title: "Wynwood", img: "/countryImg/image3.jpg" },
            { id: 105, title: "Edgewater", img: "/countryImg/image5.jpg" },
            { id: 106, title: "Doral Central", img: "/countryImg/image6.jpg" },
            { id: 107, title: "Mid Beach", img: "/countryImg/image7.jpg" },
            { id: 108, title: "South Beach", img: "/countryImg/image10.jpg" },
            { id: 109, title: "Miami", img: "/countryImg/image12.jpg" },
            { id: 110, title: "Founders Park", img: "/countryImg/image13.jpg" },
            { id: 111, title: "Dorai Central Park", img: "/countryImg/image14.jpg" },
        ],
    },
];


const AllCuntry = () => {
    const [openSection, setOpenSection] = useState(null);
    const [searchQuery, setSearchQuery] = useState({});

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <div className="container px-24 mx-auto p-4 font-poppins  space-y-9">
            {sectionsData.map((section) => (
                <div key={section.id} className=" p-5">
                    <div

                        className="w-full  border-[#D6D6D6] border-b  pb-3  flex justify-between items-center"
                    >
                        <span className="text-xl font-bold">{section.title}</span>
                        {openSection === section.id ? <div className="flex items-center gap-4 p-3 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery[section.id] || ""}
                                onChange={(e) =>
                                    setSearchQuery({ ...searchQuery, [section.id]: e.target.value })
                                }
                                className="w- p-2 border rounded outline-none"
                            />
                            <button><img src="/icon/search.png" alt="search" /></button>
                            <button><img src="/icon/Vector3.png" alt="Vector3" /></button>
                            <button><img src="/icon/Vector4.png" alt="Vector4" /></button>
                            <button className="bg-[#F3F3F3] hover:bg-[#FF5A3C] w-12 h-12 rounded" onClick={() => toggleSection(section.id)}>
                                <img className="flex justify-center mx-auto" src="/icon/Vector.png" alt="arrow icon" />
                            </button>
                        </div> : <button className="bg-[#FF5A3C] hover:bg-[#FF3A3C] w-12 h-12 rounded" onClick={() => toggleSection(section.id)}>
                            <img className="flex justify-center mx-auto" src="/icon/Vector2.png" alt="arrow icon" />
                        </button>}
                    </div>

                    {openSection === section.id && (
                        <div className="mt-4 space-y-4">


                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {section.cards
                                    .filter((card) =>
                                        card.title.toLowerCase().includes((searchQuery[section.id] || "").toLowerCase())
                                    )
                                    .map((card) => (
                                        <div
                                            key={card.id}
                                            className=" w-[350px] h-[298px] mx-auto border border-[#F3F3F3] rounded-3xl flex flex-col gap-6 items-center p-6"
                                        >
                                            <img
                                                src={card.img}
                                                alt={card.title}
                                                className="w-[302px] h-[177px]  object-cover rounded-3xl"
                                            />
                                            <div className="flex w-full justify-between ">
                                                <h3 className="mt-2 text-lg h-7 font-semibold">{card.title}</h3>
                                                <img className="bg-gray-200 p-4 rounded" src="/icon/Vector.png" alt="Vector" />
                                            </div>

                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllCuntry;