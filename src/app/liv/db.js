const{username,password}=process.env

export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.lcypnkx.mongodb.net/discoverDB?retryWrites=true&w=majority&appName=Cluster0"