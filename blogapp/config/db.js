if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: `mongodb+srv://KeftonDavid:<${process.env.DATABASE_KEY}>@blogapp.ezas8am.mongodb.net/?retryWrites=true&w=majority`}
}
else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}