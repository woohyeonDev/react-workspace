function Page() {    
    
    const [isLoding, setIsLoding] = useState(true)
    const [clientData, setClientData] = useState(null)
    useEffect(() => {
        async function getClientSideProps() {
        // const fetchData = await fetch()
        // const data = fetchData.json()        
        const data = {client : 'clientData'}
        setClientData(data)
        setIsLoding(false) 
    }        
        getClientSideProps()
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
                {serverData.fetchData.server}
            </div>
        </div>
    )
  }
  
export default Page