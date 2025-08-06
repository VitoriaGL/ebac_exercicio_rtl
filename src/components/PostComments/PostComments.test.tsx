    import { render, screen, fireEvent } from '@testing-library/react';
    import PostComments from './PostComments';
    
    describe('Componente PostComments', () => {
    test('insere DOIS comentários corretamente', () => {
        render(<PostComments />);
        
        // Primeiro comentário
        fireEvent.click(screen.getByTestId('comment-button'));
        fireEvent.change(
        screen.getByTestId('comment-input'),
        { target: { value: 'Primeiro comentário' } }
        );
        fireEvent.click(screen.getByTestId('submit-button'));
        
        // Segundo comentário
        fireEvent.click(screen.getByTestId('comment-button'));
        fireEvent.change(
        screen.getByTestId('comment-input'),
        { target: { value: 'Segundo comentário' } }
        );
        fireEvent.click(screen.getByTestId('submit-button'));
        
        // Verifica se ambos comentários estão na tela
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
    });