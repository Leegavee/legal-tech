// pages/api/communications/[caseId].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db, initializeDb } from '../../../libs/storage/db';
import { Case, Communication } from '../../../libs/domain/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Communication[] | { message: string }>,
) {
  await initializeDb();
  const { caseId } = req.query;

  if (req.method === 'GET') {
    // Return all communications for a case
    const caseItem = db.data?.clients
      .flatMap((client) => client.cases)
      .find((c: Case) => c.id === caseId);
    if (caseItem) {
      res.status(200).json(caseItem.communications);
    } else {
      res.status(404).json({ message: 'Case not found' });
    }
  } else if (req.method === 'POST') {
    // Add a new communication to a case
    const newCommunication: Communication = req.body;
    const caseItem = db.data?.clients
      .flatMap((client) => client.cases)
      .find((c: Case) => c.id === caseId);

    if (caseItem) {
      caseItem.communications.push(newCommunication);
      await db.write();
      res.status(201).json([newCommunication]);
    } else {
      res.status(404).json({ message: 'Case not found' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
