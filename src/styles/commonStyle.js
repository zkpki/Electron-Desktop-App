import styled from 'styled-components';
import { Layout } from 'antd';
import { font, palette } from 'styled-theme';
import { borderRadius, boxShadow } from '../settings/style-util';

const AppHolder = styled(Layout)`
    height: 100%;
    font-family: ${font('primary')};
    background-color: ${palette('background', 0)};;
    font-size: 16px;
    a{
        color: ${palette('grayscale', 2)};
        &:hover, &:focus{
            text-decoration: none;
            color: ${palette('primary', 0)};
        }
    }
    .ant-radio-checked .ant-radio-inner, .ant-radio-wrapper:hover .ant-radio .ant-radio-inner, .ant-radio:hover .ant-radio-inner, .ant-radio-focused .ant-radio-inner, .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner{
        border-color: ${palette('primary', 0)};
    }
    
    .ant-pagination-item{
        &.ant-pagination-item-active{
            background-color: ${palette('primary', 0)};
            border-color: ${palette('secondary', 0)};
            a{
                color: ${palette('grayscale', 5)};  
            }
            
        }
    }    
    .ant-table-thead > tr > th{
        background-color: ${palette('grayscale', 3)};  
        color: ${palette('grayscale', 5)};  
        font-size: 16px;
    }
    .ant-table-tbody > tr:hover > td {
        background:  ${palette('grayscale', 4)}; 
    }

    .ant-radio-inner:after{
        background-color: ${palette('primary', 0)};
    }
    .ant-input, .ant-select-selection{
        ${borderRadius()};
        &:hover, &:active, &:focus{
            border-color: ${palette('primary', 0)};
        }
    }
    .ant-btn{
        ${borderRadius()};
        &:hover, &:active, &:focus{
            border-color: ${palette('primary', 0)};
        }
        &:focus, &:active{
            color: ${palette('primary', 0)};
        }
        &:hover{
            color: #fff;
        }
    }

    
    
    .ant-form-item{
        margin-bottom: 10px;
        input, button{
            height: 40px;
            line-height: 40px;
        }
        .ant-input, .ant-btn, .ant-select-selection{
            font-family: ${font('primary')};
            border-color: ${palette('grayscale', 4)};
            &:hover, &:active, &:focus{
                border-color: ${palette('primary', 0)};
                ${boxShadow('0 0 0 2px rgba(219,109,69, 0.2)')}
            }
        }
        .ant-input{
            font-size: 14px;
        }
        .ant-btn{
            font-size: 16px;
            border-color: ${palette('secondary', 0)};
            background: ${palette('button', 0)};
            color:  ${palette('grayscale', 5)};
            text-transform: uppercase;
            &:hover, &:active, &:focus{
                border-color: ${palette('button', 0)};
                background: ${palette('button', 1)};
                color:  ${palette('button', 0)};
            }
        }
        .ant-select-selection--single{
            height: 40px;
        }
        .ant-select-selection__rendered{
            line-height: 40px;
        }
    }

    .ant-upload .ant-btn, .ant-upload.ant-upload-select{
        width: 100%;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${palette('primary', 0)};
        border-color: ${palette('primary', 0)};
    }

    .contentWrapper{
        height: 100vh;
        ${boxShadow('0px -5px 5px 1px #9e9e9e')}
    }
    
    
`;

export default AppHolder;
