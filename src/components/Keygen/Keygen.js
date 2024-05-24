const Keygen = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="mb-4 w-full max-w-lg">
                <label htmlFor="hwid" className="block mb-2">HWID</label>
                <input type="text" id="hwid" className="w-full p-2 border rounded-md" />
            </div>
            <div className="flex space-x-4 mb-4 w-full max-w-lg">
                <div>
                    <label htmlFor="game-name" className="block mb-2">Game name</label>
                    <input type="text" id="game-name" className="p-2 border rounded-md" />
                </div>
                <div>
                    <label htmlFor="duration" className="block mb-2">Duration</label>
                    <input type="text" id="duration" className="p-2 border rounded-md" />
                </div>
                <div>
                    <label htmlFor="amount" className="block mb-2">Amount</label>
                    <input type="text" id="amount" className="p-2 border rounded-md" />
                </div>
            </div>
            <div className="mb-4">
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Generate</button>
            </div>
            <div className="w-full max-w-lg h-40 border rounded-md">
                {/* Result output area */}
            </div>
        </div>
    );
}

export default Keygen;
