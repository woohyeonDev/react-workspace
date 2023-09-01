
import bodyParser from "body-parser";
import util from "util";
import Page from "src/views/[msNo]/Page"

const getBody = util.promisify(bodyParser.urlencoded());

export async function getServerSideProps({ req, res }) {  

  await getBody(req, res)
  const getData = req.query || {} 
  const postData = req.body    
  // const fetchData = (await fetch()).json  
  const fetchData = {server : "serverData"}
  const serverData = {
      getData,
      postData,
      fetchData,
  } 

  return {props: serverData} 
}

const PageServer = (serverData) => { 
  
  return <Page serverData={serverData} />
  return <ServerSidePage serverData={serverData} />
  return <ClientSidePage  />
}


  
export default PageServer