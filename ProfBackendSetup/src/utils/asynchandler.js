//  TRY CATCH METHOD

// const asyncHandler = (fn) =>  async (req,req,next) => {  //it is a high order func where func takes another func
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500 ).json({
//             success: false ,
//             message : error.message 
//         })
//     }
// }

const asyncHandler = (requestHander) => {
    (req,res,next) => {

        Promise.resolve(requestHander(req,res,next)).catch((err) => {
            next(err)
        })
    }
}


export { asyncHandler }