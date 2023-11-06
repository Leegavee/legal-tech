import { redactPii } from '@legavee/redact';

export default async function handler(
  req: { body: { text: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: string): void; new (): any };
    };
  },
) {
  const { text } = req.body;
  const response = await redactPii(text);
  res.status(200).json(response);
}
