import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingPage from "src/components/EntryLoading"


const router = useRouter()
        
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
    const [isLoding, setIsLoding] = useState(true)
    
    useEffect(() => {        
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
                {serverData.postData.formData1}
            </div>
        </div>
    )
  }
  
export default Page