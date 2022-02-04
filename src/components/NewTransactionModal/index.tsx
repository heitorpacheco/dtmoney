import { useState, FormEvent } from 'react';

import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
  
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }
  
  return (
      <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose} 
          overlayClassName="react-modal-overlay" 
          className="react-modal-content"
        >
          <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={CloseImg} alt="close" />
          </button>
          
          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
              type="text" 
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)} 
            />
            
            <input 
              type="number" 
              placeholder="Valor" 
              value={value}
              onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
              <button 
                type="button" 
                className={type === 'deposit' ? 'selected' : ''}
                onClick={() => setType('deposit')}
              >
                <img src={IncomeImg} alt="income" />
                <span>Entrada</span>
              </button>
              <button 
                type="button" 
                className={type === 'withdraw' ? 'selected' : ''}
                onClick={() => setType('withdraw')}
              >
                <img src={OutcomeImg} alt="income" />
                <span>Saída</span>
              </button>
            </TransactionTypeContainer>

            <input 
              type="text" 
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
  );
}