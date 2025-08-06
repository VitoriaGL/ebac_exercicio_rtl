import { ReactNode, useState } from 'react';
import styles from './Post.module.css';
import PostComments from '../PostComments/PostComments';

type Props = {
    children: ReactNode;
    imageUrl: string;
};

const Post = ({ children, imageUrl }: Props) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={styles.post} data-testid="post">
            {imageError ? (
                <div data-testid="image-fallback" className={styles.fallback}>
                    Imagem não disponível
                </div>
            ) : (
                <img 
                    className={styles['post-image']} 
                    src={imageUrl} 
                    alt="Post content"
                    onError={() => setImageError(true)}
                    data-testid="post-image"
                />
            )}
            
            <p className={styles['post-text']} data-testid="post-text">
                {children}
            </p>
            
            <PostComments />
        </div>
    );
};

export default Post;