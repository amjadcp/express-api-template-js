import { StatusCodes } from "http-status-codes";
import errorWrapper from "../../middlewares/error-wrapper.middleware.js";
import { errorResponse, successResponse } from "../../utils/response.util.js";
import { generateHash, generateToken, verifyHash } from "../../utils/auth.util.js";
// import { createAccount, firebaseLogin } from "./auth.service.js";

export const register = errorWrapper(async (req, res, next) => {
    const { email, password } = req.body;
    // const data = await createAccount(email, password);
    const hashedPassword = await generateHash(password);
    console.log(hashedPassword);
    
    return successResponse(res, {
        statusCode: StatusCodes.CREATED,
        data,
    })
});

export const login = errorWrapper(async (req, res, next) => {
    const { email, password } = req.body;
    // const data = await firebaseLogin(email, password);
    const isPasswordValid = verifyHash("password", "$2a$10$F4bXlhGFqg/xXgAmknFnW.sKN5IY2F3hDKKRZvcjQ/09upwP7iWQC");
    const data = generateToken({ email });
    if(!isPasswordValid){
        return errorResponse(res, {
            statusCode: StatusCodes.BAD_REQUEST,
            data: null,
        })
    }
    return successResponse(res, {
        statusCode: StatusCodes.OK,
        data,
    })
});