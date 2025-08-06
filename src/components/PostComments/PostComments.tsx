    import { useState } from 'react';
    import styles from './PostComments.module.css';

    const PostComments = () => {
    const [showForm, setShowForm] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = () => {
        if (newComment.trim()) {
        setComments([...comments, newComment]);
        setNewComment('');
        setShowForm(false);
        }
    };

    return (
        <div className={styles.container} data-testid="post-comments-form">
        <button 
            onClick={() => setShowForm(!showForm)}
            className={styles.toggleButton}
            data-testid="comment-button"
        >
            Comentar
        </button>

        {showForm && (
            <div className={styles['comment-form']}>
            <textarea
                data-testid="comment-input"
                placeholder="Digite seu comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className={styles['comment-textarea']}
            />
            <button 
                onClick={handleSubmit}
                className={styles['submit-button']}
                data-testid="submit-button"
                disabled={!newComment.trim()}
            >
                Enviar
            </button>
            </div>
        )}

        <div className={styles['comments-list']}>
            {comments.map((comment, index) => (
            <div 
                key={index} 
                className={styles['comment-item']}
                data-testid={`comment-${index}`}
            >
                <p className={styles['comment-content']}>{comment}</p>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default PostComments;