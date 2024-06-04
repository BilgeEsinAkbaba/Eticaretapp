const mongoose = require("mongoose");

const uri = "mongodb+srv://bilgeesinakbaba:27082001@eticaretdb.d53vpdq.mongodb.net/?retryWrites=true&w=majority&appName=EticaretDb"

const connection = () =>{
    mongoose.connect(uri,{

        useNewUrlParser: true,
        useUnifiedTopology: true,


    })
    .then(()=> console.log("MongoDb bağlantısı başarılı"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));

}

module.exports = connection;
