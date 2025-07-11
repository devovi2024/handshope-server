export const signup = async (req, res) => {
    const {email, password, name} = req.body;
    
  res.send(" Sign Up Route Working!");
}
export const login = async (req, res) => {
  res.send(" Login  Route Working!");
}

export const logout = async (req, res) => {
  res.send(" Logout Route Working!");
}