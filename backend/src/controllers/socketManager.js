// const { connections } = require('mongoose');
const {Server} = require('socket.io');

let connections = {}
let messages = {}
let timeOnline = {}

const connectToSocket = server =>{
    const io = new Server(server,{
      cors:{
        origin:"*",
        methods:["POST","GET"],
        allowedHeaders:["*"],
        credentials:true
      }
    });



    io.on("connection", (socket) => {
      socket.on("join-call", (path) => { 

        if(connections[path]===undefined){
          connections[path] = []
        }
        connections[path].push(socket.id)
        timeOnline[socket.id] = new Date()

        for(let i =0 ; i<=connections.path.length;i++){
          io.to(connections[path][i]).emit("user-joined",socket.id)
        }

      });

      socket.on("signal", (toId, message) => {
        io.to(toId).emit("signal", socket.id, message);
      });
      socket.on("chat-message", (data, sender) => {

        const [matchingRoom, found] = Object.entries(connections)
        .reduce(([room,isFound],[roomKey,roomValue])=>{

          if(!isFound && roomValue.includes(socket.id)){
            return [roomKey,true];
          }

          return [room,isFound]
          
        },['',false]);

        
        if(found === true){
          if(messages[matchingRoom]===undefined){
            messages[matchingRoom]= []
          }
          messages[matchingRoom].push({"sender":sender,"data":data,"socket-id-sender":socket.id})
        }

        connections[matchingRoom].forEach(element => {
          io.to(element).emit("chat-message",data,sender,socket.id)
        });
      });
      socket.on("disconnect", () => {});
    });
    return io;
}




module.exports = connectToSocket