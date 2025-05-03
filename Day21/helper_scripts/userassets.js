const createUserAssets= async() => {
    try{
        const user = await User.create({
            username: "testuser",
            password: "testpassword",
            email: "test@gmail.com",
            balance: 1000,
        });
        const asset = await Asset.create({
            name: "testasset",
            type: "stock",
            value: 100,
            user: user._id,
        });
        user.assets.push(asset._id);
        await user.save();

    }
    catch (error) {
        console.error("Error creating user assets:", error);
    }
    finally
    {
        await mongoose.connection.close();
        console.log("✅ successfully disconnected from MongoDB");
        process.exit(0);
    }
}
createUserAssets();