import { FC } from "react";
import styled from "styled-components";

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
}

export  const MemoList: FC<Props> = props => {
    const { memos, onClickDelete } = props;
    return(
        <SContainer>
            <p>メモ一覧</p>
            <ul>
                {memos.map((memo, index) => (
                    <li key={memo}>
                    <SMemberWrapper>
                        <p>{memo}</p>
                        <SButton onClick={() => onClickDelete(index)}>削除</SButton>
                    </SMemberWrapper>
                    </li>
                ))}
            </ul>
        </SContainer>
    );
}

const SButton = styled.button`margin-left: 16px`;
const SContainer = styled.div`border: solid 1px #ccc`;
const SMemberWrapper = styled.div`
  display: flex;
  align-items: center;
`;