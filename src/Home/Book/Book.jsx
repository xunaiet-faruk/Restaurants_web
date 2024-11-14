

const Book = () => {
    return (
        <div
            className="w-full h-[888px] bg-cover mb-32"
            style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5a88/989c/f8e8eeffdc29691099a68fb261320bfa?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWv7uc9~~bfu15JHXiJiqB5qxpZll7dzsfqSfksnVBQFDWKwla3saGeC00KSajhAfp31R-h0Hae8m1A1UwV9BM4jLwOYYhaQS9jYNfUxKgNRm0s30yMqimVLBjV4cPeBNq488929t52B3StMaem9D9De5JhUC4kkt4VkCFsf2tKeBV-IO59EflMgQyqcz8POUdO8Vi8kIbD~cRNqQvTK67JbRU65jR~y-991YxV0B6dnxNfoVUJRdNPxLLuop2m0omK5Kn4ovb3SfHVLPlu2SRQds19wxZNZPHUTTYVR1TBmBb6f4Q~-V-XWC-3kBUVrKW~~WOZres56AQe1IMkCYQ__')` }}
        >
            <div className="py-32 max-w-screen-2xl mx-auto">
                <div className="flex items-center gap-3 pb-8">
                    <div className="bg-[#BD1F17] w-[10px] h-[10px]"></div>
                    <p className="text-[#BD1F17] text-[20px] font-bold font-roboto">
                        Crispy, Every Bite Taste
                    </p>
                </div>

                <div className="space-y-8">
                    <h1 className="font-bebas text-[62px] font-bold leading-[62px]  decoration-solid decoration-transparent decoration-skip-ink text-white">Book Your Table</h1>
                    <p className="font-Roboto pb-8 text-[16px] font-normal text-white">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo <br /> molestie vel, ornare non id blandit netus.</p>
                </div>

                {/* ---------------------        --- form here -------------------- */}

                <div className="">
                    <div className="">
                        <form className="pb-8">
                            <div className='flex gap-6'>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-[420px] h-[52px] text-white mb-4 border border-white bg-black  p-2 placeholder-white"
                                    placeholder="Your Name*"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    className="w-[420px] h-[52px] text-white mb-4 border border-white bg-black  p-2 placeholder-white"
                                    placeholder="Your Email"
                                    required
                                />

                            </div>
                            <div className='flex gap-6'>
                                <input
                                    type="date"
                                    name="date"
                                    className="w-[420px] h-[52px] text-white mb-4 border border-white bg-black  p-2 placeholder-white"
                                    placeholder="Reservation Date*"
                                    required
                                />
                                <input
                                    type="number"
                                    name="number"
                                    className="w-[420px] h-[52px] text-white mb-4 border border-white bg-black  p-2 placeholder-white"
                                    placeholder="Total People*"
                                    required
                                />

                            </div>

                            <textarea
                                type="text"
                                name="text"
                                className="w-[860px]  text-white mb-4 border border-white bg-black  p-2 placeholder-white"
                                placeholder="Message"
                                rows={8}
                                required
                            />



                        </form>

                        <button className="w-[142px] text-[18px] sm:w-[157px] h-[40px] md:h-[56px] bg-[#FEBF00] font-Roboto text-black font-bold">
                            Book Now
                        </button>
                    </div>
                </div>
         </div>

        </div>
    );
};

export default Book;