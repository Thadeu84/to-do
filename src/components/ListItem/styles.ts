import styled from 'styled-components';

type Containerprops = {
   done: boolean;
}

export const Container = styled.div(({ done }: Containerprops)=>(
`
display: flex;
background-color: #20212C;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
aling-items: center;

input { 
    width: 25px;
    height: 25px;
    margin-right: 5px;
   }

label { 
    color: #CCC;
    text-decoration: ${done ? 'line-through':'initial'};
   }
`
));