import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';
import path from 'path';
import transferChildProcessOutpus from '../../utils/shell';

export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const video_id = request.query.video_id as string;
  if (typeof video_id !== 'string') {
    response.status(400).json({ error: 'Invalid request' });
    return;
  }
  console.log('Video ID', video_id);
  const cmd = spawn('python', [
    path.join(process.cwd(), 'scripts/transcribe.py'),
    video_id || ''
  ]);

  transferChildProcessOutpus(cmd, response);
}
