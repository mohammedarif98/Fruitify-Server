import app from "./app.js";
import config from './configs/config.js'
import connectDB from "./configs/db.js";

connectDB()
    
app.listen(config.app.port,()=>{ 
    console.log(`Server is running in ${config.app.env} mode on port ${config.app.port}`);
}); 