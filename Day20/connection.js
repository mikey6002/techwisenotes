(async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            bufferTimeoutMS: 1000,
            connectTimeoutMS: 1000,
        });
        console.log('Connected to MongoDB');

    } 
    catch(err){
        console.error('Error connecting to MongoDB:', err);
    } 
    finally {
        mongoose.connection.close();
    }
})();
