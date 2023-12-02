import Image from "./Image"
interface Iprops {

}

function ProductCard({}: Iprops) {
    return (
        <div className=" border rounded-lg flex flex-col p-2 ">
            <Image className="w-60 rounded-md" imageURL="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt='PC' />

            <h3 >Product Card</h3>
            <p>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve, your everyday
            </p>
            <div className="flex space-x-2 my-2">
                <span className=" w-5 h-5 bg-red-600 rounded-full"/>
                <span className=" w-5 h-5 bg-blue-600 rounded-full"/>
                <span className=" w-5 h-5 bg-yellow-600 rounded-full"/>
                <span className=" w-5 h-5 bg-black rounded-full"/>
            </div>
            <div className="flex flex-row justify-between items-center ">
                <span>$500,000</span>
                <Image className="w-10 h-10 rounded-full object-contain" imageURL="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt='PC' />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 mt-3">
                <button className=" bg-indigo-700 w-full p-2 rounded-md text-white">Edit</button>
                <button className=" bg-red-700 w-full p-2 rounded-md text-white">Delete</button>
            </div>
        </div>
    )
}

export default ProductCard