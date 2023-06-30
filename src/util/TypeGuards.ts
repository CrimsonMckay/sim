import type { SELECT, val, ref, expr } from "@sap/cds/apis/cqn";
import { RequestError } from "got/dist/source";

export function isErrorGuard(candidate: unknown): candidate is Error {
  if (candidate && typeof candidate === "object" && "message" in candidate) {
    return true;
  }
  return false;
}
export function isNetworkErrorGuard(
  candidate: unknown
): candidate is Error & { code: number } {
  if (
    candidate &&
    typeof candidate === "object" &&
    "code" in candidate &&
    "message" in candidate
  ) {
    return true;
  }
  return false;
}

export function isSelectQueryGuard(candidate: unknown): candidate is SELECT {
  if (candidate && typeof candidate === "object" && "SELECT" in candidate) {
    return true;
  }
  return false;
}
export function isExpresionGuard(candidate: unknown): candidate is val {
  if (candidate && typeof candidate === "object" && "val" in candidate) {
    return true;
  }
  return false;
}
export function isRefGuard(candidate: unknown): candidate is ref {
  if (candidate && typeof candidate === "object" && "ref" in candidate) {
    return true;
  }
  return false;
}
export function isExprArrayGuard(candidate: unknown): candidate is expr[] {
  if (
    candidate &&
    typeof candidate === "object" &&
    Array.isArray(candidate) &&
    candidate.some((sub) => "val" in sub || "ref" in sub)
  ) {
    return true;
  }
  return false;
}
export function isGotErrorGuard(candidate: unknown): candidate is RequestError {
  if (
    candidate &&
    typeof candidate === "object" &&
    "code" in candidate &&
    "message" in candidate &&
    "response" in candidate
  ) {
    return true;
  }
  return false;
}
