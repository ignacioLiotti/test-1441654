import React from "react";
import { useRouter } from "next/router";

function NavItem({ item }) {
  const router = useRouter();
  return <>{router.pathname === "/" ? item : ""}</>
}

export default NavItem;
