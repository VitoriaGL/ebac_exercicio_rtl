import { useState } from 'react';
import styles from './PostComments.module.css';

const PostComments = () => {
    const [showForm, setShowForm] = useState(false);
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    const handleSubmit = () => {
        setComments([...comments, newComment]);
        setNewComment('');
        setShowForm(false);
    };

    return (
        <div className={styles.container} data-testid="post-comments">
            <button 
                onClick={() => setShowForm(!showForm)}
                className={styles.toggleButton}
            >
                Comentar
            </button>

            {showForm && (
                <div className={styles.form}>
                    <textarea
                        placeholder="Digite seu comentário..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className={styles.textarea}
                    />
                    <button 
                        onClick={handleSubmit}
                        className={styles.submitButton}
                    >
                        Enviar
                    </button>
                </div>
            )}

            <div className={styles.list}>
                {comments.map((comment, index) => (
                    <p key={index} className={styles.commentItem}>
                        {comment}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PostComments;