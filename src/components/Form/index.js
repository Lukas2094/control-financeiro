import React , {useState} from 'react';
import * as S from './styles'
import Grid from '../Grid';

const Form = ({handleAdd ,transactionsList , setTransactionsList}) => {
  
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("")
        setAmount("")
    };

    return (
    <>
        <S.Container>
                <S.InputContent>
                    <S.Label>Descrição</S.Label>   
                    <S.Input value={desc} onChange={(e) => setDesc(e.target.value)} />   
                </S.InputContent>
                
                <S.InputContent>
                    <S.Label>Valor</S.Label>
                    <S.Input value={amount} type='number' onChange={(e) => setAmount(e.target.value)} />    
                </S.InputContent>

                <S.RadioGroup>
                    <S.Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <S.Label htmlFor='rIncome'>Entrada</S.Label>

                    <S.Input
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={() => setExpense(!isExpense)}
                    />
                    <S.Label htmlFor='rExpenses'>Saída</S.Label>
                </S.RadioGroup>

                <S.Button  type='button' onClick={handleSave}>Adicionar</S.Button>
                
            </S.Container>
            <Grid  items={transactionsList} setItems={setTransactionsList} />
    </>

  )
}

export default Form