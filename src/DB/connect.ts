import mongoose from "mongoose" 
const connect = mongoose;

connect.connect('mongodb+srv://proftoby97:469iHVvyRaTkKD5T@montreal.i85lhyq.mongodb.net/?retryWrites=true&w=majority' as string)

export default connect;