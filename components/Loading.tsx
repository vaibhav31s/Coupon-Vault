"use client";

import React from "react";
import { GridLoader } from "react-spinners";

// `type` is kept for API compatibility with the former react-loading component.
const LoadingComponent = ({ type, color }) => (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <GridLoader color={color} size={20} aria-label={type} />
    </div>
);

export default LoadingComponent;
