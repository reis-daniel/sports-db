import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function League() {
  const location = useLocation();
  console.log(location.pathname);
  return <div>Overview of all Leagues</div>;
}
