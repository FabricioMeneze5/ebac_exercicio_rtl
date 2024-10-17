import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve renderizar os comentarios', () => {
        const clickButtom = () => {
            fireEvent.click(screen.getByTestId('btn-comantar'))
        }
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'comentario 1'
            }
        })
        clickButtom()

        fireEvent.change(screen.getByTestId('text-area'), {
            target: {
                value: 'comentario 2'
            }
        })
        clickButtom()
        
        expect(screen.getAllByTestId('post-comment-id')).toHaveLength(2);
    });

    
});