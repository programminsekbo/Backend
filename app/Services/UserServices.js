import { UserModel } from "../model/usersModel.js";
//import SendEmail from './../utility/emailUtility.js';
import { TokenEncode } from './../utility/tokenUtility.js';






export const LoginService = async (req) => {
  try {
    let {email, password} = req.body;
    password = (password);
    let code = Math.floor(100000 + Math.random() * 900000);
    let expiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

/*
     let EmailText =` Your Verification Code is ${code}`;
     let EmailSubject = 'Email Verification';
   try {
        await SendEmail(EmailSubject, EmailText);
   } catch (emailError) {
         return { status: 'Fail', message: 'Failed to send email. Please try again later.' };
     }

     */

    let data = await UserModel.findOne({ email: email, password: password}).select('_id');

    if (data) {
        await UserModel.updateOne({ _id: data._id },{ $set: { otp: code, otpExpiry: expiry}});
        return {status : 'success', message : 'Your 6 Digit Code Has Been Send Successfully'};
    } else {
        return { status: 'Fail', message: 'Invalid information'};
    }

} catch (e) {
    return {status : 'Fail', data : e.toString()};
   }

  };




  export const VerifyLoginService = async (req) => {
    try {
      let { email, otp } = req.body;
      let total = await UserModel.find({ email: email, otp: otp });
  
      if (total.length === 1) {
        let user_id = await UserModel.find({ email: email, otp: otp }).select(
          "_id"
        );
        let token = TokenEncode(email, user_id[0]["_id"].toString());
  
        await UserModel.updateOne(
          { email: email },
          { $set: { otp: "0" }}
        ).select("_id");
  
  
        return { status: "success", message: "Valid otp", token: token };
      } else {
        return { status: "fail", message: "Invalid OTP" };
      }
    } catch (error) {
      return { status: "fail", data: error.toString() };
    }
  };
  





  export const CreateProfileService = async (req) => {
    try {
      let reqBody = req.body;
      let data = await UserModel.create(reqBody);
      return { status: "Success", message: "User registered successfully", data: data };
  } catch (error) {
      return { status: "Fail", message: error.toString()};
    }

  };



  export const UpdateProfileService = async (req) => {
    try {
      let user_id = req.headers.user_id;
      let reqBody = req.body;
      reqBody.user_id = user_id;
      await UserModel.updateOne(
        { userID: user_id },
        { $set: reqBody },
        { upsert: true }
      );
      return { status: "success", message: "profile save successfuily" };
    } catch (e) {
      return { status: "fail", message: "SameThing went wrong" };
    }
  };



  
export const ReadProfileService = async(req) => {
    try {
      let user_id = req.headers.user_id;
      let data = await UserModel.findOne({ userID: user_id });
      return {
        status: "success",
        message: "profile save Successfuily",
        data: data,
      };
    } catch (error) {
      return { status: "fail", message: "SameThing went wrong" };
    }
  };
  