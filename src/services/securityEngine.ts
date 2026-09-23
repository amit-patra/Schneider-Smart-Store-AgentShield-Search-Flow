import { Action, Intent, Result, Scenario } from "../types";

export function analyze(intent: Intent, action: Action, _scenario: Scenario): Result {
  const total = action.hotelPrice + action.upgrade + action.insurance;
  const threats: string[] = [];

  if (action.maliciousInstruction) threats.push("Indirect prompt injection");
  if (action.externalTransfer) threats.push("Data exfiltration attempt");
  if (total > intent.budget) threats.push(`Budget exceeded by €${total - intent.budget}`);
  if (action.upgrade > 0 || action.insurance > 0) threats.push("Unapproved add-on");

  if (action.maliciousInstruction || action.externalTransfer || total > intent.budget) {
    return { status: "BLOCK", risk: "HIGH", total, threats };
  }

  if (action.upgrade > 0 || action.insurance > 0) {
    return { status: "ASK", risk: "MEDIUM", total, threats };
  }

  return { status: "ALLOW", risk: "LOW", total, threats };
}