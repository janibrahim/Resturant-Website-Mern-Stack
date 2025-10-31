import express from "express";
import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const reserVationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name should contain at least 3 characters!"],
    maxLength: [30, "First Name cannot exceed 30 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name should contain at least 3 characters!"],
    maxLength: [30, "Last Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, "Provide a Valid email!"],
  },
  phone: {
    type: Number,
    required: true,
    minLength: [11, "Phone Number must contain 11 digits!"],
    maxLength: [11, "Phone Number must contain 11 digits!"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reserVationSchema);
export default Reservation;
