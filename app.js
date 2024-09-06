const express=require('express');
const connectDB=require('./db/cnn');
const port=process.env.PORT || 3000;
const router=require('./Router/router');
const app=express();
app.use(express.json());

app.use(router);

const START=async()=>{
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
};

START();