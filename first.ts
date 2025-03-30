import { oc } from "@orpc/contract";
import { type } from "arktype";

export const getUser = oc
  .route({ method: "GET", path: "/planets/{name}" })
  .input(type({ name: "string", age: "number" }))

export const router = oc.router({ user: { get: getUser } });
