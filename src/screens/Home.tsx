import { Link } from "react-router-dom";
import { Product } from "../shared/interfaces/Product";
import Table from "../shared/components/Table";
import { useEffect, useState } from "react";

const Home = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        loadProducts();

    }, [])

    const loadProducts = () => {

        fetch('/data.json')
            .then((res) => res.json())
            .then((data: Product[]) => {
                setProducts(data);
            })
    }

    return <div className="">

        <h1>taycan research</h1>

        <Table headers={[]} data={products} />

    </div>;
}


export default Home;