

export default function Banner() {
    return (

        <div
            className="relative h-[1000px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url("/banner/banner.jpg")` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b opacity-60 from-[#2F2F2F00] to-[#0b1620]"></div>

            {/* Content Box */}
            <div className="relative  w-[1107px] h-[342.55px] bg-opacity-50 p-6 rounded-lg text-center text-white space-y-4">
                {/* "Real Estate Agency" with Nunito Sans */}
                <div className="flex items-center font-nunito mx-auto w-[169px] h-6 gap-[10px]">
                    <img src="/banner/home.png" alt="Real Estate Agency" />
                    <p>Real Estate Agency</p>
                </div>

                {/* Main Heading */}
                <div className="w-[1107px] h-48 flex items-center justify-center">
                    <h2
                        className="text-[96px] leading-[95px] tracking-[-0.04em] text-center font-poppins font-bold"
                    >
                        Miami Real Estate Specialists
                    </h2>
                </div>

                {/* Description */}
                <div className="w-[819px] h-12 flex mx-auto ">
                    <p className="font-nunito  text-base text-center">
                        Your specialists in residential and commercial properties. From dream homes
                        to prime business spaces, trust our unique expertise to guide you in
                        Miami/South Florida's dynamic market.
                    </p>
                </div>
            </div>
        </div>

    );
}
