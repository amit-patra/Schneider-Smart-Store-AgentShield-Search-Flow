export type Scenario = "normal" | "injection" | "unauthorized";

export type Intent = {
  destination: string;
  nights: number;
  budget: number;
  guests: number;
};

export type Action = {
  hotel: string;
  hotelPrice: number;
  upgrade: number;
  insurance: number;
  maliciousInstruction: boolean;
  externalTransfer: boolean;
};

export type Result = {
  status: "ALLOW" | "ASK" | "BLOCK";
  risk: "LOW" | "MEDIUM" | "HIGH";
  total: number;
  threats: string[];
};