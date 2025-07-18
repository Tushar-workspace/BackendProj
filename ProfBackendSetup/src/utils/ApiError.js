class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong!",
        errors = [],
        



    ) {
        super(message)  //super(message) calls the constructor of the parent class (Error) to initialize the object. Think of it as the child class (ApiError) asking its parent (Error) to do the fundamental setup work first.

        // This is essential because a standard Error object has built-in properties, most notably the message. By calling super(message), you ensure that your custom ApiError object has this core message property set correctly, making it behave like any other JavaScript error.


        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false 
        this.errors = errors
    }
}

export { ApiError }