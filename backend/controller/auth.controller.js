import User from '../models/user.model.js';

export const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

export const login = async (req, res) => {
  res.send(" Login  Route Working!");
}

export const logout = async (req, res) => {
  res.send(" Logout Route Working!");
}