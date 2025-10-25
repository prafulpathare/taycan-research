import { Link } from "react-router-dom";
import { Product } from "../shared/interfaces/Product";
import { products } from "../shared/data";

const Home = () => {

    return <div className="">

        <h1>taycan research</h1>

        {products.map((product: Product) =>
            <div>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            </div>
        )}

    </div>;
}


export default Home;