

export default function Banner() {
    return (

        <div
            className="relative lg:h-[1000px] md:h-[600px] h-[558px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url("/banner/banner.jpg")` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b opacity-60 from-[#2F2F2F00] to-[#0b1620]"></div>

            {/* Content Box */}
            <div className="relative container mx-auto lg:top-0 top-4  lg:w-[1107px] md:w-[800px] w-[348px] lg:h-[342.55px] h-[187px] bg-opacity-50 p-6 rounded-lg text-center text-white lg:space-y-4 md:space-y-2 space-y-[10px]">
                {/* "Real Estate Agency" with Nunito Sans */}
                <div className="flex items-center font-nunito mx-auto w-[169px] h-6 gap-[10px]">
                    <img src="/banner/home.png" alt="Real Estate Agency" />
                    <p>Real Estate Agency</p>
                </div>

                {/* Main Heading */}
                <div className="h-[66px] lg:h-48 flex items-center justify-center mx-auto">
                    <h2
                        className="lg:text-[96px] md:text-5xl text-3xl lg:leading-[95px] md:leading-[50px] leading-[33px]  tracking-[-0.04em] text-center font-poppins font-bold"
                    >
                        Miami Real Estate Specialists
                    </h2>
                </div>

                {/* Description */}
                <div className=" lg:h-12 h-[76px] flex mx-auto ">
                    <p className="font-nunito  lg:text-base leading-5 text-sm text-center">
                        Your specialists in residential and commercial properties. From dream homes
                        to prime business spaces, trust our unique expertise to guide you in
                        Miami/South Florida's dynamic market.
                    </p>
                </div>
            </div>
        </div>

    );
}
