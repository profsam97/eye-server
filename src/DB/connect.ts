import mongoose from "mongoose" 
const connect = mongoose;

connect.connect('mongodb+srv://proftoby97:kpmDnA3Idt99zbRG@eyeserver.tn3mtek.mongodb.net/?retryWrites=true&w=majority')

export default connect;