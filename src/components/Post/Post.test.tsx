import { ReactNode, useState } from 'react';
import styles from './Post.module.css'; // Import mantido
import PostComments from './PostComments';

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

jest.mock('./Post.module.css', () => ({
    post: 'post_mock',
    'post-image': 'post-image_mock',
    'post-text': 'post-text_mock'
}));
export default Post;