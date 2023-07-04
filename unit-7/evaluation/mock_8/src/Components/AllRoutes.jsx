/** @format */

import React from "react";

import { HomePage } from "../Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import { ForumPage } from "../Pages/ForumPage";
import { AnswerPage } from "../Pages/AnswerPage";
import { PageNotFound } from "../Pages/PageNotFound";
import { PrivetRoute } from "./PrivateRoutes";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivetRoute><ForumPage /></PrivetRoute>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/forum"
          element={
            <PrivetRoute>
              <ForumPage />
            </PrivetRoute>
          }
        ></Route>
        <Route
          path="/answers"
          element={
            <PrivetRoute>
              <AnswerPage />
            </PrivetRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};
