const app = require(".");
const { connectDb } = require("./config/Db");
const PORT = 5454;

app.listen(PORT, async()=>{
await connectDb();
    console.log("Ecommerce api listening on PORT :" , PORT);
})