import styled from "styled-components";
import CardsSection from "./CardsSection";

const Header = () => {
  return (
    <Head>
        <div className="container">
            <div className="top">
                <h1>5 Day Forecast</h1>
            </div>
            <div className="search">
                <input type="text" placeholder="Search city" />
            </div>
            <div className="cardSection">
                <CardsSection/>
            </div>
        </div>
    </Head>
  )
};

export default Header;
const Head = styled.div`
    .cardSection{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .container{
        margin: 0 auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
    }
   h1{
    font-size:50px;
   }
  input{
    background-color:transparent;
    border-radius:5px;
    padding:12px 90px;
    font-size:15px;
    font-weight:bold;
    background-image:url('search.png');
    background-position: 8px 3px;
    background-repeat: no-repeat;
  }
    .top{
        margin-top:15px;
        background-color:#efefef;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:90px;
    }
`;