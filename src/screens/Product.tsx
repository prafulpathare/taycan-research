import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as PData } from "../shared/interfaces/Product";

const Product = () => {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<PData | null>();

    useEffect(() => {

        loadProduct();

    }, [id]);

    const loadProduct = () => {
        if (id) {
            fetch('/products.json')
                .then((res) => res.json())
                .then((data: PData[]) => {
                    setProduct(data.find((product: PData) => product.id === id) || null);
                })
        }
    }

    if (!product) return <h1>Product not found</h1>

    return <div className="">
        <h1>{product.name}</h1>
    </div>;
}

export default Product;