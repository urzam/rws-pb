import { Grid, Skeleton } from "@mui/material";

export default function TranslatorsListSkeleton() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 4, md: 16 }}
    >
      <Grid item xs={2} sm={4} md={8}>
        <Skeleton variant="rectangular" width={410} height={170} />
      </Grid>
      <Grid item xs={2} sm={4} md={8}>
        <Skeleton variant="rectangular" width={410} height={170} />
      </Grid>
      <Grid item xs={2} sm={4} md={8}>
        <Skeleton variant="rectangular" width={410} height={170} />
      </Grid>
    </Grid>
  );
}
