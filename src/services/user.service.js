const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    let { firstname, lastname, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User Already Exist :", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstname, lastname, email, password });

    console.log("created User:", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("user not found by this Id :", userId);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (userEmail) => {
  try {
    const user = await User.findById(userEmail);
    if (!user) {
      throw new Error("user not found by this Email :", userEmail);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByProfileToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId);

    if (!user) {
      throw new Error("user not found by Id :", userId);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByEmail,
  getUserByProfileToken,
  getAllUsers,
};
