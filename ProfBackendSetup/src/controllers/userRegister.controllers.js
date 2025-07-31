import { asyncHandler } from "../utils/asynchandler.js";


const registerUser = asyncHandler( async (req,res) => {
  // we need async func becoz user registration required interacting with a database, hashing passwords, or sending emails etc.
  res.status(200).json({
    message: "Successfully Registered",
  });
})


export { registerUser }; //named Export

// export default registerUser;   //default Export 

/*  
    Named Export (export { registerUser };):

You export like this:

To import it elsewhere, you must use curly braces and the exact name:

Default Export (export default registerUser;):

You export like this:

To import it, you can use any name:

Summary:

Named exports allow multiple exports per file and require curly braces when importing.
Default export allows only one per file and can be imported with any name, without curly braces.
*/

