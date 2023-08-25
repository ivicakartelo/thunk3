import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPost } from './postsSlice'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

const canSave = Boolean(title) && Boolean(content) && Boolean(addRequestStatus === 'idle')
const onSavePostClicked = async () => {
    
    if (canSave) {
        try {
            setAddRequestStatus('pending')
            await dispatch(addNewPost({title, content})).unwrap()
            setTitle('')
            setContent('')
            setError(null)
        } catch (err) {
            console.error('Failed to save the post: ', err)
            setError('Error saving the post')
        } finally {
            setAddRequestStatus('idle')
        }
    }
}



return (
    <section>

        <Typography variant="h2" component="div" style={{ fontFamily: 'Open Sans' }}>Add a New Post</Typography>
        <form>
            <TextField 
                variant="filled"
                margin="normal"
                fullWidth
                label="Post Title"
                placeholder="Enter your title"
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged} 
            />
            <TextField
                variant="filled"
                margin="normal"
                fullWidth
                label="Post Content"
                multiline
                rows={4}
                placeholder="Enter your content"
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged} 
            />
<Button 
variant="contained" 
sx={{
    backgroundColor: '#8b05fa', // Static background color
    '&:hover': {
      backgroundColor: '#8b05fa', // Disable hover effect
    },
  }} 
onClick={onSavePostClicked} disabled={!canSave}>
    Save Post
</Button>
        </form>
        {error && <div>{error}</div>}
    </section>
)
}