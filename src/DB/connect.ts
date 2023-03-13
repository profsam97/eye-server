import mongoose from "mongoose" 
const connect = mongoose;

connect.connect(process.env.MONGODB_URL as string)

export default connect;