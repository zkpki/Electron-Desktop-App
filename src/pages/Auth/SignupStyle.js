import styled from 'styled-components';
import { Button } from 'antd';
import { palette } from 'styled-theme';
import { borderRadius } from '../../settings/style-util';

export const ImageContainer = styled.div`
    margin-bottom: 30px;
`;

export const NextButton = styled(Button)`
    font-size: 18px;
    ${borderRadius()};
    margin-top: 20px;
    height: 40px;
    padding: 0 30px;
    &:hover{
        border-color: ${palette('button', 1)};
        background: ${palette('button', 0)};
        color:  ${palette('grayscale', 5)};
    }
`;
