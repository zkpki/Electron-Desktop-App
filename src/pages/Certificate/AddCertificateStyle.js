import styled from 'styled-components';
import { palette } from 'styled-theme';

export const AddCertificateWrapper = styled.div`
    padding: 20px;  
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 32px;
    }
`;

export const CertificateOption = styled.div`
    padding: 50px 20px;
    button{
        display: block;
        width: 200px;
        font-size: 16px;
        margin-bottom: 15px;
        &:last-child{
            margin-top: 80px;
        }
        :hover{
            border-color: ${palette('button', 0)};
            background: ${palette('button', 0)};
            color:  ${palette('button', 1)};
        }
    }
`;

export const BorderCertificateOption = styled(CertificateOption)`
    border-right: solid 2px ${palette('grayscale', 4)};
`;
