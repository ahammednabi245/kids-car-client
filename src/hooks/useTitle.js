import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => {
        document.title = ` Kids Car | ${title} `;
    },[title])
}

export default useTitle;