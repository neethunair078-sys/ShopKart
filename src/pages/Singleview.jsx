import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useProducts from "../hook/useProducts";
import { useEffect, useState } from "react";
import axios from "axios";

const Singleview = () => {

    const [product, setProduct] = useState(null);

    const { productid } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/${productid}`
                );
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getProduct();
    }, [productid]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>


            {/* Dynamic datas sample  */}
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            {/* end */}



            {/* image view section */}
            <div className=" flex justify-center items-center">
                <div className=" w-1/2">

                    <img
                        src=""
                        alt="product"
                    />



                </div>

                <div className="w-1/2">

                    <div>
                        <h1>PRODUCT NAME</h1>

                        <p>Product:Laptop</p>

                        <h1>discription:this is a laptop</h1>

                        <p>price:3000</p>


                    </div>
                </div>


            </div>

        </div>

    )

}
export default Singleview;