import AWS, {
  PutObjectCommand,
  S3Client,
  ServerSideEncryption,
} from '@aws-sdk/client-s3';

const client = new S3Client({});

type CaseOverview = {
  caseId: string;
  overview: string;
  background: string;
};

const saveCaseOverviewToS3 = async (
  caseOverview: CaseOverview,
  caseId: string,
  clientId: string,
) => {
  const fileName = `cases/case-overview:${caseId}.txt`;
  const params = {
    Bucket: `clients.${clientId.toLowerCase()}`,
    Key: fileName,
    Body: JSON.stringify(caseOverview),
    ServerSideEncryption: ServerSideEncryption.AES256,
  };

  try {
    const cmd = new PutObjectCommand(params);
    const response = await client.send(cmd);
    console.log(`Successfully uploaded ${fileName} to S3`);
  } catch (error) {
    console.error('Error uploading to S3:', error);
  }
};

export { saveCaseOverviewToS3 };
