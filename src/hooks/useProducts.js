import { useEffect, useState } from "react"

const useProducts = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return [product, setProduct]

}

export default useProducts;