import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../settings/style-util';


const LeftContentWrapper = styled.div`
    position: relative;
    height: 100vh;
    .innerContent{
        h2{
            font-size: 24px;
            margin-top: 50px;
            text-align: center;
        }
        h3{
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
        }
        ul{
            position: absolute;
            bottom: 20px;
            text-align: center;
            width: 100%;
            padding: 0px;
            & li {
                list-style: none;
                width: 30px;
                height: 30px;
                ${borderRadius('50%')};
                background: ${palette('grayscale', 5)};
                text-indent: -99999px;
                display: inline-block;
                margin: 0 5px;
                border: solid 1px ${palette('secondary', 0)};
                &.active{
                    background: ${palette('primary', 0)};
                }
            }
        }
        .formWrapper{
            margin: 30px 50px 0 50px;
        }
        .ant-btn.nextBttn{
            &:hover, &:focus, &:active{
                color:  ${palette('primary', 0)};
            }
            text-align: center;
            margin: 20px auto 0 auto;
            display: block;
        }
    }
`;
export default LeftContentWrapper;
