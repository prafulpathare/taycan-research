import { useEffect, useState } from "react";
import { Product } from "../interfaces/Product";

class Cell {
    value: string = '';
    isLink: boolean = false;
    isImage: boolean = false;
    isHeader: boolean = false;
}

class Row {

    cells: Cell[] = []

}

const Table = ({ headers, data } : { headers: string[], data: any[]  }) => {

    const [rows, setRows] = useState<Row[]>([]);

    useEffect(() => {

        loadData();
        
    }, [data])

    const loadData = () => {
        
        let tempHeaders =  Object.keys(data[0]);

        if(!headers) {
            
        } 

    }

    return <div className="">

        {data.map((item: Product) =>
            <div className="">

            </div>
        )}


    </div>;
}

export default Table;