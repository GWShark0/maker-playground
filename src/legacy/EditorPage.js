import { Box, Container } from '@material-ui/core';

import VideoPlaceholder from './VideoPlaceholder';

export default function EditorPage() {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center" pt={6}>
        <VideoPlaceholder />
      </Box>
    </Container>
  );
}
