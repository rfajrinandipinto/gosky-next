import { useRouter } from "next/router";
import React from "react";

const user = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>user {id}</div>;
};

export default user;
