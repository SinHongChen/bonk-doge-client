import styled,{css,createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing:border-box;
        /* font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif; */
    }

    :root {
        --sunkist:linear-gradient(to right, rgb(242, 153, 74), rgb(242, 201, 76));
        --deep-space:linear-gradient(to left, rgba(0, 0, 0,1), rgb(67, 67, 67));
        --purple-white:linear-gradient(to left, rgb(82, 74, 197), rgb(127, 128, 206));
        --decent:linear-gradient(to right, rgb(76, 161, 175), rgb(196, 224, 229));
        --sea-blue:linear-gradient(to right, rgb(43, 88, 118), rgb(78, 67, 118));
        --harvey:linear-gradient(to left, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));

        --bg-color-1: #191820;
        --bg-color-2: rgb(30, 29, 37);
        --bg-color-3:#68696b;
        --text-color-1: #f7f7f7;
        --text-color-2: #448bdb;
        --text-color-3: #ffd560;

        --hover-color-1: #383838;
        --border-color-1: rgb(64, 64, 70);
        --box-shadow-color-1: rgba(0,0,0,0.5);

        --navbar-index:2;
        --popup-index:3;
    }
    
`