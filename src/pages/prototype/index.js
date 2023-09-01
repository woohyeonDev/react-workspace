import { useState, useEffect } from "react";
import bodyParser from "body-parser";
import util from "util";
import ServerSidePage from "src/views/prototype/ServerSidePage"
import ClientSidePage from "src/views/prototype/ClientSidePage"
import Page from "src/views/prototype/Page"


const getBody = util.promisify(bodyParser.urlencoded());

const PageServer = (serverData) => { 
  
  return <Page serverData={serverData} />
  return <ServerSidePage serverData={serverData} />
  return <ClientSidePage  />
}

export async function getServerSideProps({req,res}) {    
  console.log('pageServer');
  await getBody(req, res)
  const getData = req.query||{}
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
  
export default PageServer