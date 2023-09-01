import { useState, useEffect } from "react";
import EntryLoadingPage from "src/components/screens/loading/EntryLoading"
import { useRouter } from "next/router";

const clientFn = (serverData) => {
    console.log('page');
    console.log('client function',serverData);
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
        console.log('useRouter',router.query);
        clientFn(serverData)
        setIsLoding(false)
    },[])       
    
    if (isLoding) return <EntryLoadingPage />
    return (
        <>
        <div className="min-h-screen flex flex-wrap items-start">
            <div className="w-full flex flex-nowrap justify-end">
                <div className=" border-2 rounded-md border-astems-purple px-1 mt-4 mr-4 pb-1">			
                        <span className="text-xs text-astems-purple font-bold">
                            한국어
                        </span>
                </div>		
            </div>
            <div className="flex flex-wrap justify-center w-full mb-20">
                <div className="w-full flex justify-center mb-5">
                    <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.8451 49.4294C40.9527 48.0127 38.9458 43.7089 40.3625 39.8166L53.0173 5.04793C54.434 1.1556 58.7378 -0.851304 62.6301 0.56539C66.5224 1.98208 68.5293 6.2859 67.1127 10.1782L54.4579 44.9469C53.0412 48.8392 48.7374 50.8461 44.8451 49.4294Z" fill="#C8A3ED"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04752 0.565151C8.93985 -0.851543 13.2437 1.15536 14.6604 5.04769L27.3151 39.8163C28.7318 43.7087 26.7249 48.0125 22.8326 49.4292C18.9402 50.8459 14.6364 48.839 13.2197 44.9466L0.564977 10.178C-0.851717 6.28566 1.15519 1.98185 5.04752 0.565151Z" fill="#7000DF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.3876 24.6489C73.9748 22.5779 78.5617 23.8069 80.6328 27.3941L85.4461 35.731C87.5172 39.3182 86.2881 43.9051 82.7009 45.9762C79.1137 48.0472 74.5268 46.8182 72.4557 43.231L67.6424 34.8941C65.5714 31.3069 66.8004 26.72 70.3876 24.6489Z" fill="#7000DF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M70.3975 37.623C66.8103 35.552 65.5813 30.9651 67.6523 27.3779L72.4656 19.041C74.5367 15.4538 79.1236 14.2248 82.7108 16.2958C86.298 18.3669 87.5271 22.9538 85.456 26.541L80.6427 34.8779C78.5717 38.4651 73.9847 39.6941 70.3975 37.623Z" fill="#7000DF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0475 0.565151C35.9399 -0.851543 40.2437 1.15536 41.6604 5.04769L54.3151 39.8163C55.7318 43.7087 53.7249 48.0125 49.8326 49.4292C45.9402 50.8459 41.6364 48.839 40.2197 44.9466L27.565 10.178C26.1483 6.28566 28.1552 1.98185 32.0475 0.565151Z" fill="#7000DF"/>
                    </svg>				
                </div>
                <div className="w-full text-center font-extrabold text-xl mb-1">
                    ASTEMS
                </div>		
                <div className="font-semibold text-gray-400 text-xs">
                    강변점
                </div>
            </div>
        </div>

        <div className="static">
            <div className="w-full bg-white flex justify-center">		
                <div className=" w-11/12 absolute bottom-2 bg-astems-purple text-white text-center px-2 py-3 rounded-md font-extrabold active:bg-astems-light-purple active:text-white" 
                >
                    주문 시작하기
                </div>
            </div>	
        </div>
        </>
    )
  }
  
export default Page