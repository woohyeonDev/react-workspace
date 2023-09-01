function Hello(props) {
    console.log("getData")
    console.log(props);

    return (
        <div>
            <div>
                page
            </div>
            <div>
                serverData : {props.serverData}
            </div>
            <div>
                clientData : {props.clientData }
            </div>
        </div>
    )
  }
  
export default Hello;