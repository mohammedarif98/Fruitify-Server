import dotenv from 'dotenv';

 
dotenv.config();    

const isProduction = process.env.NODE_ENV === "production";

const config = {

    app: {                                            
        port: process.env.PORT || 5000,
        env: process.env.NODE_ENV || 'development',
        isProduction
    },

    db: {                                      
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/Fruitify',
        options: {}
    },

    cors: {                                   
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    },

    rateLimit: {                               
        windowMs: 15 * 60 * 1000,              
        max: 100,                                
        message: "Too many requests from this IP, please try again later",
    },

    email: {                                   
        service: process.env.EMAIL_SERVICE || 'gmail',
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
        from: process.env.EMAIL_FROM || 'no-reply@myapp.com'
    },

}



export default config;