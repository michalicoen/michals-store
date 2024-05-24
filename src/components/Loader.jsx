import { Skeleton } from '@mui/material';
export const Loader = () => {
  return (
    <div
      style={{
        height: 200,
        width: 500,
        textAlign: 'center',
        paddingTop: 50,
        margin: 'auto'
      }}>
      <Skeleton variant="rounded" width={500} height={200} />
    </div>
  );
}