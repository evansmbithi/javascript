const request = require("supertest");
const bcrypt = require("bcrypt");
const app = require("../index");
const User = require("../database/models/users");
const mongoose = require("../database/dbConection");
const { request } = require("../index");
let id;
let token;
describe("test the recipes API", () => {
  beforeAll(async () => {
    // create a test user
    const password = bcrypt.hashSync("okay", 10);
    await User.create({
      username: "admin",
      password,
    });
  });
  afterAll(async () => {
    await User.deleteMany();
    mongoose.disconnect();
  });

  //  test login
  describe("POST/login", () => {
    it("authenticate user and sign him in", async () => {
      // DATA YOU WANT TO SAVE TO DB
      const user = {
        username: "admin",
        password: "okay",
      };
      const res = await request(app).post("/login").send(user);
      token = res.body.accessToken;
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(
        expect.objectContaining({
          accessToken: res.body.accessToken,
          success: true,
          data: expect.objectContaining({
            id: res.body.data.id,
            username: res.body.data.username,
          }),
        })
      );
    });

    // negative test
    it("Do not sign him in, password field cannot be empty", async () => {
      // DATA TO SAVE TO DB
      const user = {
        username: "admin",
      };
      const res = await request(app).post("/login").send(user);
      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual(
        expect.objectContaining({
          success: false,
          message: "username or password cannot be empty",
        })
      );
    });
  });

  // test create recipes
  describe("POST/recipes", () => {
    it("it should save new recipe to database", async () => {
      // data you want to save to db
      const recipes = {
        name: "chicken nugget",
        difficulty: 2,
        vegetarian: true,
      };

      const res = await request(app)
        .post("/recipes")
        .send(recipes)
        .set("Authorization", `Bearer ${token}`);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual(
        expect.objectContaining({
          success: true,
          data: expect.any(Object),
        })
      );

      // Now that we have a recipe saved to the test database, let's assign its ID to the ID defined in the previous video
      id = res.body.data._id;
    });

    // negative test
    it("it should not save new recipe to db, invalid vegetarian value", async () => {
      // define input
      const recipe = {
        name: "chicken nugget",
        difficulty: 3,
        vegetarian: "true", // string instead of boolean
      };

      const res = await request(app)
        .post("/recipes")
        .send(recipe)
        .set("Authorization", `Bearer ${token}`);

      expect(res.statusCode).toEqual(400);
      expect(res.body).toEqual(
        expect.objectContaining({
          success: false,
          message: "vegetarian field should be boolean",
        })
      );
    });

    it("it should not save new recipe to db, invalid token", async () => {
      // data you want save
      const recipe = {
        name: "chicken nugget",
        difficulty: 2,
        vegetarian: true,
      };

      const res = await request(app)
        .post("/recipes")
        .send(recipe)
        .set("Authorization", `Bearer kjbpierbjhviy`);

      expect(res.statusCode).toEqual(403);
      expect(res.body).toEqual(
        expect.objectContaining({
          message: "Unauthorized",
        })
      );
    });
  });

  describe("GET/recipes", () => {
    it("it should retrieve all the recipes in db", async () => {
      const request = await request(app).get("recipes");

      expect;
    });
  });
});
