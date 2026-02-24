import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Flash({flashData}) {
  return (
      <Alert severity={flashData.type} className='absolute top-5 right-8'>{flashData.message}</Alert>

  );
}
