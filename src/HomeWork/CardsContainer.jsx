
const CardsContainer = () =>{

return (
    <div className="min-h-screen flex justify-center items-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 "> 

           <div className="w-50 h-60 bg-orange-400 rounded shadow p-4">
                Crad 1
            </div>
            <div className="w-50 h-60 bg-pink-400 rounded shadow p-4">
                Crad 2
            </div>
            <div className="w-50 h-60 bg-red-400 rounded shadow p-4">
                Crad 3
            </div>
            <div className="w-50 h-60 bg-gray-500 rounded shadow p-4">
                Crad 4
            </div>
        </div>
    </div> 
);
}

export default CardsContainer