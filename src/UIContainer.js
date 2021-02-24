import { useSelector, useDispatch } from 'react-redux';

// actions
import {
  close,
  selectExportDrawerOpen,
  selectExportDrawerProps,
  selectMediaDialogOpen,
  selectMediaDialogProps,
  selectTrimDialogOpen,
  selectTrimDialogProps,
  selectUploadDialogOpen,
  selectUploadDialogProps,
} from './app/uiSlice';

// components
import ExportDrawer from './ExportDrawer';
import MediaDialog from './MediaDialog';
import TrimDialog from './TrimDialog';
import UploadDialog from './UploadDialog';

export default function UIContainer() {
  const dispatch = useDispatch();
  const exportDrawerOpen = useSelector(selectExportDrawerOpen);
  const exportDrawerProps = useSelector(selectExportDrawerProps);
  const mediaDialogOpen = useSelector(selectMediaDialogOpen);
  const mediaDialogProps = useSelector(selectMediaDialogProps);
  const trimDialogOpen = useSelector(selectTrimDialogOpen);
  const trimDialogProps = useSelector(selectTrimDialogProps);
  const uploadDialogOpen = useSelector(selectUploadDialogOpen);
  const uploadDialogProps = useSelector(selectUploadDialogProps);

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <>
      <ExportDrawer
        {...exportDrawerProps}
        open={exportDrawerOpen}
        onClose={handleClose}
      />
      <MediaDialog
        {...mediaDialogProps}
        open={mediaDialogOpen}
        onClose={handleClose}
      />
      <TrimDialog
        {...trimDialogProps}
        open={trimDialogOpen}
        onClose={handleClose}
      />
      <UploadDialog
        {...uploadDialogProps}
        open={uploadDialogOpen}
        onClose={handleClose}
      />
    </>
  );
}
