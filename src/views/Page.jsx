import { useState, useEffect } from "react";
import LoadingPage from "src/components/EntryLoading"
import { useRouter } from "next/router";

const clientFn = () => {
    console.log('page');
    console.log('client function');
}


function Page(props) {
    /*
        serverData = {
            getData,
            postData,
            fetchData
        } 
    */
     
    const serverData = props.serverData
    const router = useRouter() 
    const [isLoding, setIsLoding] = useState(true)
    
    useEffect(() => {        
        console.log(router.query);
        clientFn()
        setIsLoding(false)
    },[])       
    
    if (isLoding) return <LoadingPage />
    return (
        <div>
            <div>
                page
            </div>
            <div>
                server data
            </div>
            <div>
                
            </div>
        </div>
    )
  }
  
export default Page