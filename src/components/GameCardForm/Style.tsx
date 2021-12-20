import styled,{ createGlobalStyle } from "styled-components";
import { Form } from 'antd';

export const CreateForm = styled(Form)`
    width:100%;
`

export const ModifyAntdStyle = createGlobalStyle`
    label {
         color:var(--text-color-1) !important;
    }
`