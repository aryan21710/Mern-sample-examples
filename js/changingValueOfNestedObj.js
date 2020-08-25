const input = {
  "My Cases": {
    toggle: false,
    rotateIcon: {
      transform: "rotate(0deg)",
      transition: "transform 10s ease-out",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "90vw",
      width: "3vw",
      color: "rgba(255,255,255)",
    },
    childLinkWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
      height: "0vh",
      overflow: "hidden",
    },
  },
  "Case Diary": {
    toggle: false,
    rotateIcon: {
      transform: "rotate(0deg)",
      transition: "transform 10s ease-out",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "90vw",
      width: "3vw",
      color: "rgba(255,255,255)",
    },
    childLinkWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
      height: "0vh",
      overflow: "hidden",
    },
  },
  "My Documents": {
    toggle: false,
    rotateIcon: {
      transform: "rotate(0deg)",
      transition: "transform 10s ease-out",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "90vw",
      width: "3vw",
      color: "rgba(255,255,255)",
    },
    childLinkWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100vw",
      height: "0vh",
      overflow: "hidden",
    },
  },
};


let output={height:Object.keys(input).filter((_)=>_==="My Cases").map((_)=>input[_].childLinkWrapper.height).pop()}

console.log(`output ${JSON.stringify(output,null,4)}`)

for (let i in input) {
    if (i==="My Cases") {
        input[i].childLinkWrapper.height="10vh"
        /* this.setState({
            input: {...input,...input[i]}
        })*/
    }
}

console.log(`input ${JSON.stringify(input,null,4)}`)
