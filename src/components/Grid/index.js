import React from 'react';
import * as S from './styles';
import GridItem from '../GridItem';

const Grid = ({ items, setItems }) => {
    
    const onDelete = (ID) => {
        const newArray = items.filter((transf) => transf.id !== ID);
        setItems(newArray);
        localStorage.setItem("transaction", JSON.stringify(newArray))
    }  


  return (
    <S.Table>
          <S.Thead>
            <S.Tr>
                <S.Th width={40}>Descrição</S.Th>    
                <S.Th width={40}>Valor</S.Th>    
                <S.Th width={10} alignCenter>Tipo</S.Th>    
                <S.Th width={10} ></S.Th>    
            </S.Tr>
          </S.Thead>  

          <S.TBody>
              {items?.map((item, index) => (
                  <GridItem key={index} item={item} onDelete={onDelete} />
              ))}
          </S.TBody>
    </S.Table>
  )
}

export default Grid