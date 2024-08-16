const express = require('express');
const app = express()
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t8njxkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const productCollection = client.db('GadgetHub').collection('product')

    // app.get('/product', async(req, res) =>{
    //     const result = await productCollection.find().toArray()
    //     res.send(result)
    // })

    app.get('/product', async (req, res) => {
            const { brand, category, priceMin, priceMax, search, sort  } = req.query;
    
            let query = {};
            let sortOption = {};

    
            if (brand) {
                query.brand = brand;
            }
    
            if (category) {
                query.category = category;
            }
    
            if (priceMin || priceMax) {
                query.price = {};
                if (priceMin) query.price.$gte = parseFloat(priceMin);
                if (priceMax) query.price.$lte = parseFloat(priceMax);
            }
    
            if (search) {
                query.name = { $regex: search, $options: 'i' };
            }
            console.log("filter",sortOption);
            console.log("sort",sort);

            if (sort === 'priceLowHigh') {
                sortOption.price = 1;
            } else if (sort === 'priceHighLow') {
                sortOption.price = -1;
            } else if (sort === 'dateNewest') {
                sortOption.createdAt  = -1;
            }
        
            
    
            const result = await productCollection.find(query).sort(sortOption).toArray();
            res.send(result);

    });

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('GadgetHub running')
  })
  
  app.listen(port, () => {
    console.log('GadgetHub is running om port', port);
  })