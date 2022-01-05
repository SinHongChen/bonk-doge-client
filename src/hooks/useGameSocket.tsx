import React, { useEffect, useState } from "react";
import { SocketResponse,SocketRequest } from "types";
import { io } from "socket.io-client";

const useGameSocket = (loginId: string) => {
  const [socketResponse, setSocketResponse] = useState<SocketResponse>();
  const [socketRequest,setSocketRequest] = useState<SocketRequest>();
  const socket = io(`${process.env.REACT_APP_SOCKET_URL}`, {
    extraHeaders: {
      "session-id": loginId,
    },
  });

  useEffect(()=>{  
      socket.emit("playerQueue");
    
      socket.on("playerQueue", (data:any) => {
        let res:SocketResponse = JSON.parse(data);
        setSocketResponse(res);
        if(res.state !== 200){
            throw Error(res.msg);
        }
      });

      socket.on("mainGame",(data:any)=>{
        console.log(data);
      })
    
      socket.on("connect", () => {
        console.log("connect success");
      });
    
      socket.on("disconnect", (reason: any) => {
        console.log(reason);
      });
  },[]);

  useEffect(()=>{
    if(socketRequest){
      socket.emit("mainGame",JSON.stringify(socketRequest));
    }
  },[socketRequest])

  return {
    socketResponse,
    setSocketRequest
  };
};

export default useGameSocket;
