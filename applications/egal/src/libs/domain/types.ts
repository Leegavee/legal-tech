// types.ts
export interface Communication {
  id: string;
  body: string;
  body_redacted: string;
  meta: Record<string, any>;
}

export interface Case {
  id: string;
  background: string;
  summary: string;
  communications: Communication[];
}

export interface Client {
  id: string;
  name: string;
  cases: Case[];
}
