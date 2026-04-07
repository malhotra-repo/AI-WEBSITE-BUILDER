export const generateWebsite = async (req, res) => {

 try {
  const { prompt } = req.body
  if (!prompt) {
   return res.status(400).json({ message: " prompt is required " })

  }

  const user = await User
  if(!user){
   return res.status(400).json({ message:" user not found"})
  }
 } catch (error) {

 }

}