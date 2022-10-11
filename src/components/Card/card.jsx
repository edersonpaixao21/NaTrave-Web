export const Card = ({ timeA, timeB, match}) => (
    <div className="rounded-xl border border-gray-500 p-4 text-center space-y-4">
        <span className="text-sm md:text-base text-gray-700 font-bold">{ match.time }</span>

        <div className="flex space-x-4 justify-center items-center">
            <span className="uppercase text-gray-500">{timeA.slug}</span>
            <img src={`/src/assets/bandeiras/${timeA.slug}.png`}/>

            <input min={0} type="number" className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center" />
            <span className="text-red-500 font-bold">X</span>
            <input min={0} type="number" className="bg-red-300/[0.2] w-14 h-14 text-red-700 text-xl text-center" />

            <img src={`/src/assets/bandeiras/${timeB.slug}.png`}/>
            <span className="uppercase text-gray-500">{timeB.slug}</span>
        </div>
    </div>
) 