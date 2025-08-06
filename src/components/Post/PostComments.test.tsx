    import { render, screen, fireEvent, waitFor } from '@testing-library/react';
    import PostComments from './PostComments'; // Verifique o caminho exato

    describe('Componente PostComments', () => {
    test('exibe o botão "Comentar"', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('mostra/oculta o formulário', async () => {
        render(<PostComments />);
        
        // Inicialmente oculto
        expect(screen.queryByPlaceholderText('Digite seu comentário...')).not.toBeInTheDocument();
        
        // Clica para mostrar
        fireEvent.click(screen.getByText('Comentar'));
        expect(screen.getByPlaceholderText('Digite seu comentário...')).toBeInTheDocument();
        
        // Clica para enviar
        fireEvent.change(
        screen.getByPlaceholderText('Digite seu comentário...'),
        { target: { value: 'Teste' } }
        );
        fireEvent.click(screen.getByText('Enviar'));
        
        // Aguarda ocultação
        await waitFor(() => {
        expect(screen.queryByPlaceholderText('Digite seu comentário...')).toBeNull();
        });
    });
    });