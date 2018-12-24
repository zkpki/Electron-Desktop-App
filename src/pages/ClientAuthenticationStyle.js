import styled from 'styled-components';
import { palette } from 'styled-theme';
import { boxShadow } from '../settings/style-util';

const ClientAuthenticationWrapper = styled.div`
    padding: 50px 100px;  
    height: 100%;
    .clientAuthenticationContainer{
        border: solid 2px ${palette('grayscale', 4)};
        background: #fff;
        position: relative;
        color: #000;
        padding: 20px;
        margin-bottom: 40px;
        .required{
            position: absolute;
            top: -12px;
            background: #fff;
            padding: 2px 5px;
            font-size: 12px;
            color: #000;
        }
        .sanNames{ 
            text-align: center;
        }
        .nameListItem {
            margin-bottom: 10px;
        }
        .ant-btn.removeSan{
            background: transparent;
            border: none;
            font-size: 17px;
            padding: 0px;
            margin-left: 7px;
        }
        .ant-btn.addSanBttn {
            border: none;
            background: transparent;
            font-size: 30px;
            padding: 0px;
            margin-top: 20px;
        }
        .ant-btn.removeSan, .ant-btn.addSanBttn {
            &:hover, &:active, &:focus{
                color:  ${palette('primary', 0)};
            }
        }
        
    }
    
    .info{
        margin: 0 5px;
        color: #ccc;
    }
    
    .ant-btn{
        &.advance, &.issueCertificate {
            width: 200px;
            display: block;
            background: ${palette('button', 0)};
            border-color: ${palette('button', 1)};
            color: ${palette('grayscale', 5)};
            font-size: 18px;
            line-height: 45px;
            height: 44px;
            &:hover, &:focus, &:active{
                background: ${palette('grayscale', 5)};
                color:  ${palette('button', 0)};
                border-color: ${palette('button', 0)};
            }
        }
        &.advance {
            margin: 0 auto;
            &.deleteAccount{
                margin: 0px;
                position: absolute;
                bottom: 70px;
            }
        }
        &.issueCertificate {
            position: absolute;
            bottom: 50px;
            right: 100px;
        }
        
        &.editBttn{
            &:hover{
                background: ${palette('button', 0)};
                color:  ${palette('grayscale', 5)};
            }
        }
        &.deleteBttn{
            border: none;
            padding: 5px 0 0 0;
            margin-left: 10px;
            &:hover, &:active, &:focus{
                color:  ${palette('button', 0)};
            }
        }
        &:hover, &:active, &:focus{
            color:  ${palette('button', 0)};
        }
    }
    .ant-input, .ant-select-selection{
        &:focus{
            ${boxShadow('0 0 0 2px rgba(219,109,69, 0.2)')}
        }
    }
`;
export default ClientAuthenticationWrapper;
