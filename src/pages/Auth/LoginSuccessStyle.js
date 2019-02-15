import styled from 'styled-components';
import { palette } from 'styled-theme';

const LoginSuccessWrapper = styled.div`
    padding: 20px 100px;  
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        text-align: justify;
    }
    .ant-btn.plus{
        padding: 0px;
        line-height: inherit;
        height: initial;
        font-size: 42px;
        border: none;
        color: ${palette('button', 0)};
        margin-top: 30px;
        &:hover, &:active, &:focus{
            color: ${palette('grayscale', 1)};
        }
    }
`;

export default LoginSuccessWrapper;
