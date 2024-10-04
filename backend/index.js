import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const __dirname = path.resolve();

class Response {
    constructor(success, message) {
        this.success = success;
        this.message = message;
    }
}

const shirtSchema = new mongoose.Schema({
    size: String,
    textColor: String,
    price: Number,
    imageUrl: String,
});
const Shirt = mongoose.model("Shirt", shirtSchema);

const orderSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    address: String,
    email: String,
    order: [{
        shirt: shirtSchema,
        quantity: Number,
    }],
    total: Number,
});
const Order = mongoose.model("Order", orderSchema);

async function main() {
    await mongoose.connect("mongodb+srv://atlasAdmin:ctg7Ttoh9jp1jeTo@cluster0.8pibjv7.mongodb.net/yellow?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
main().then(() => {
    console.log("Connected to MongoDB");
})
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error.message);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/orders', async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(200).send(new Response(true, "Order placed successfully and will be delivered."));
    } catch (error) {
        res.status(500).send(new Response(false, error));
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).send(orders);
    }
    catch (error) {
        res.status(500).send(new Response(false, error));
    }
});
    
app.post('/api/shirts', async (req, res) => {
    // const shirt = new Shirt(req.body);
    try {
        for (let i = 0; i < 10; i++) {
            const shirt = new Shirt({
                size: ["Small", "Medium", "Large", "Extra Large"][i % 4],
                textColor: ["red", "blue", "green", "purple"][i % 4],
                price: 1000,
            });
            await shirt.save();
        }
        res.status(200).send(new Response(true, "Shirt added successfully."));
    } catch (error) {
        res.status(500).send(new Response(false, error));
    }
}
);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, '/uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir); // Create directory if it doesn't exist
        }
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
    }
});
const upload = multer({ storage: storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload/shirt', upload.single('shirt'), async (req, res) => {
    console.log(req.file, req.body);
    const shirt = new Shirt({
        size: req.body.size,
        textColor: req.body.textColor,
        price: req.body.price,
        imageUrl: req.file.path.replace(/\\/g, "/"),
    })
    try {
        await shirt.save();
        res.status(200).send(new Response(true, "Shirt added successfully."));
    } catch (error) {
        res.status(500).send(new Response(false, error));
    }
})

app.get('/api/shirts', async (req, res) => {
    try {
        const shirts = await Shirt.find();
        res.status(200).send(shirts);
    }
    catch (error) {
        res.status(500).send(new Response(false, error));
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});