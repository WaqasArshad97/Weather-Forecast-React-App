import styled from 'styled-components';

const Cards = ({day,index}) => {
    const temp = [23,45,34,28,38,20,15];

  return (
    <Box>
        <h2>{day}</h2>
        <p>Time</p>
        <img src={`/images/img${index+1}.svg`} alt="logo" />
        <h2>{`${temp[index]} C`}</h2>
        <h4>wind</h4>
    </Box>
  );
};

export default Cards;

const Box = styled.div`
    border:1px solid black;
    height:250px;
    width:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:4px;
    img{
        height:40%;
        width:40%;
    }
    h2{
        margin-top:10px;
    }
`;