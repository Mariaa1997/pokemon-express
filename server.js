require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const pokemon = require("./models/pokemon");
const methodOverride = require("method-override");
const Poke = require("./models/poke");
const jsxViewEngine = require("jsx-view-engine");

//Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

//connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

//middleware
app.use((req, res, next) => {
  console.log("Middleware: I run for all routes");
  next();
});


//near top, around the other app.use() calls
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));



app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//INDEX- displays all pokemon
app.get("/pokemon", async (req, res) => {
  try {
    const foundPokemon = await Poke.find({});
    res.status(200).render("Index", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
  //  res.send(pokemons);
  // res.render('Index')
});

// N - NEW - allows a user to input a new fruit
app.get("/new", (req, res) => {
  res.render("New");
});
//D - DELETE - PERMANENTLY removes a fruit from the db
app.delete("/pokemon/:id", async (req, res) => {
  // res.send('deleting...');
  try {
    const deletedPoke = await Poke.findByIdAndDelete(req.params.id);
    console.log(deletedPoke);
    res.status(200).redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }
});
//U - UPDATE - makes the actual changes to the database
app.put("/pokemon/:id", async (req, res) => {
  try {
    const updatedPoke = await Poke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedPoke);
    res.status(200).redirect(`/pokemon/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});
// C - CREATE - update our data store
app.post("/pokemon", async (req, res) => {
  try {
    // const newPokemon = {
    //     name: req.body.name,
    //     img: req.body.img,
    // };
    const createdPokemon = await Poke.create(req.body);
    res.status(200).redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }

});
//E Edit - allows user to provide inputs to change the pokemon
app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const foundPokemon = await Poke.findById(req.params.id);
    res.status(200).render("Edit", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});

//S Show- show route displays details of an individual pokemon
app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPoke = await Poke.findById(req.params.id);
    res.render("Show", { poke: foundPoke });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(3003, () => {
  console.log("listening");
});
