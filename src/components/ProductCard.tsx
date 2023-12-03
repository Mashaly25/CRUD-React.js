import Image from "./Image"
import Button from "../UI/Button"
import { Iproduct } from "../interfaces"
import { textSlicer } from "../utils/functions"
interface Iprops {
    product: Iproduct
}

function ProductCard({product}: Iprops) {
    return (
        <div className=" border rounded-lg flex flex-col p-2 ">
            <Image className=" rounded-md" imageURL={product.imageURL} alt='PC' />

            <h3 >{product.title}</h3>
            <p>
            {textSlicer(product.description, 150)}
            </p>
            <div className="flex space-x-2 my-2">
                <span className=" w-5 h-5 bg-red-600 rounded-full"/>
                <span className=" w-5 h-5 bg-blue-600 rounded-full"/>
                <span className=" w-5 h-5 bg-yellow-600 rounded-full"/>
                <span className=" w-5 h-5 bg-black rounded-full"/>
                {product.colors.map((color)=> {return <span className={`w-5 h-5 bg-[${color}] rounded-full`}/>})}
            </div>
            <div className="flex flex-row justify-between items-center ">
                <span>{product.price}</span>
                <Image className="w-10 h-10 rounded-full object-fill" imageURL={product.category.imageURL} alt={product.category.name} />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2 mt-3">
                <Button className=" bg-indigo-700" width="w-full" >Edit</Button>
                <Button className=" bg-red-700" width="w-full">Delete</Button>
            </div>
        </div>
    )
}

export default ProductCard