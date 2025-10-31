import express from "express";
import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

const sendReservation = async (req, res, next) => {
  console.log("request done");
  console.log("request is",req.body)
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill full Form!"), 400);
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time
    });
    res.status(200).json({
      success: true,
      message: "Reservation sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    return next(new ErrorHandler(error.message, 500));
  }
};

export default sendReservation;
