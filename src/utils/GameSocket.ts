import { io } from "socket.io-client";

export interface EmitData {
    token:string,
    cmd:string,
    data:any
}

export interface ReciveData{}

export default class GameSocket {
    private socket;
    private token;
    
    public constructor(url:string,token:string){
        this.socket = io(`${url}`);
        this.token = token;

        this.socket.on("connect",()=>{
            console.log("connect is success ~");
            console.log(this.socket.id);
        });


        let data = JSON.stringify({
            token:token,
            cmd:"todo",
            data:{text:"dwqdqwd"}
        })

        this.socket.emit("mainGame",data);

        this.socket.on("mainGame", (data)=>{
            console.log(data)
        });

        this.socket.on("disconnect",(reason)=>{
            console.log(reason)
        });
    }
}



