import { useEffect, useState } from "react";

const useOnLineStatus = () => {

    const[onLineStatus,setOnLineStatus] = useState(true);


    useEffect(() => {

        const handleOnLine = () => {
            setOnLineStatus(true)
        }
         const handleOffLine = () => {
            setOnLineStatus(false)
        }


        window.addEventListener("onLine" , handleOnLine)
        window.addEventListener("offLine" , handleOffLine)

        
        return () => {

            window.removeEventListener("onLine" , handleOnLine)
            window.removeEventListener("offLine" , handleOffLine)
        }
    },[])

    return onLineStatus;

}

export default useOnLineStatus;