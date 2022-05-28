import { useEffect, useState } from "react"

const useProducts = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-escarpment-74336.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return [product, setProduct]

}

export default useProducts;