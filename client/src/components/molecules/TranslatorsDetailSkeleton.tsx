import { Container, Skeleton } from "@mui/material";

export default function TranslatorsDetailSkeleton() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, mb: 4 }}>
      <Skeleton variant="rectangular" height={400} />
    </Container>
  );
}
