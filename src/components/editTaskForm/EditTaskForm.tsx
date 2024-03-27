import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, IconButton, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';

interface Props {
  handleEdit: (title: string, description: string) => void;
  oldTitle: string;
  oldDescription: string;
  cancelEdit: () => void;
}

const EditTaskForm = ({
  handleEdit,
  oldTitle,
  oldDescription,
  cancelEdit,
}: Props) => {
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const form = e.target;
    handleEdit(title, description);
    setTitle('');
    setDescription('');
    // form.reset();
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', gap: '8px' }}
      onSubmit={handleSubmit}
      //   fullWidth
    >
      <TextField
        required
        id="standard-text"
        label="Title"
        type="text"
        defaultValue={title}
        variant="standard"
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        required
        id="standard-number"
        label="Description"
        type="text"
        defaultValue={description}
        variant="standard"
        onChange={e => setDescription(e.target.value)}
      />

      <IconButton aria-label="success" color="success" type="submit">
        <CheckCircleIcon />
      </IconButton>
      <IconButton
        aria-label="cancel"
        color="error"
        type="button"
        onClick={cancelEdit}
      >
        <CancelIcon />
      </IconButton>
    </Box>
  );
};

export default EditTaskForm;
