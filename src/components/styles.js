import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from 'styled-theme';
import { borderRadius } from '../settings/style-util';

export const LogoWrapper = styled.div`
   padding: 10px 0 10px;
   align-items: center;
   justify-content: center;
   display: flex;
`;

export const ProfileWrapper = styled.div`
    height: 100vh;
    position: relative;
    .profileInnerContainer{
        text-align: center;
        font-size: 24px;
        h2{
            font-size: 24px;
            margin-top: 50px;
        }
        .name{
            font-size: 14px;
            margin-bottom: 20px;
        }
        .downloadContainer{
            display: block;
            margin-bottom: 20px;
            a{
                font-size: 14px;
            }
            .downloadBttn{
                display: block;
            }
        }
        .infoContainer{
            display: block;
            .detailsInfo {
                overflow-y: scroll;
                height: 300px;
                font-size: 12px;
                width: 250px;
                margin: 0 auto;
                text-align: left;
                background: #ddd;
                border: solid 2px #000;
                padding: 10px;
                margin-top: 10px;
            }
        }
        .details{
            font-size: 14px;
            line-height: 22px;
            margin: 30px;
            text-align: left;

        }
        .ant-btn.addCSRBttn{
            &:hover, &:focus, &:active{
                color: ${palette('button', 0)};
            }
            ${borderRadius(4)};
            height: 40px;
            padding: 0 50px;
            margin-top: 50px; 
        }
    }
    .profileBottom{
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        .ant-btn{
            border: none;
            padding: 0px;
            line-height: 1.2;
            background: transparent;
            &.settings {
                font-size: 32px;
                bottom: 10px;
                left: 10px;
            }
            &.logout {
                font-size: 22px;
                float: right;
                bottom: 15px;
                right: 10px;
                span {
                    display: block;
                    font-size: 12px;
                }
            }
            &.infoBttn{
                position: absolute;
                bottom: 90px;
                left: 30px;
            }
            &.accountBttn{
                position: absolute;
                bottom: 55px;
                left: 70px;
            }
            &.orgSettingsBttn{
                position: absolute;
                bottom: 5px;
                left: 75px;
            }
            &:hover, &:focus, &:active{
                background: transparent;
                color: ${palette('button', 0)};
            }
        }
        .settingsOptions{
            & .ant-btn{
                font-size: 22px;
            }
        }
    }

`;

export const LoginFormWrapper = styled.div`
    margin: 5%;
    padding: 10%;
`;

export const CenterdContainer = styled.div`
   align-items: center;
   justify-content: center;
   display: flex;
`;

export const SignupTextWrapper = styled.div`
    p{
        text-align: justify;
        padding: 0 50px;
        margin: 0px;
    }
`;

export const BannerImage = styled.div`
    width: 100%;
    height: 100vh;
    img{
        width: 100%;
        height: 100%;
    }
`;


export const ProgressBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;  
    height: 100%;
    .issuingProgressBar {
        margin-bottom: 30px;    
    }
`;

export const ContentInnerWrapper = styled.div`
    padding: 20px 100px;  
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ant-btn.downloadCertificate{
        margin-top: 20px; 
        font-size: 20px;
        ${borderRadius(4)};
        height: 40px;
        padding: 0 30px;
        &:hover, &:focus, &:active{
            color: ${palette('button', 0)};
        }
    }
`;

export const FormWrapper = styled.div`
    width: 400px;
`;

export const CertificateDetailsWrapper = styled.div`
    .formContainer{
        border: solid 2px #000;
        background: #fff;
        position: relative;
        color: #000;
        padding: 20px;
        margin-bottom: 40px;
        margin-top: 40px;
        width: 500px;
        .required{
            position: absolute;
            top: -12px;
            background: #fff;
            padding: 2px 5px;
            font-size: 12px;
            color: #000;
        }
        .info{
            margin: 0 5px;
            color: #ccc;
        }
    }
    .ant-btn{
        &.issue{
            float: right;
        }
        &:hover{
            border-color: ${palette('button', 0)};
            background: ${palette('button', 0)};
            color:  ${palette('button', 1)};
        }
    }
`;

export const StyledLink = styled(Link)`
    color: ${palette('grayscale', 2)};
    font-size: 18px;
    font-weight: bold;
    :hover{
        color: ${palette('primary', 0)};
    }
`;
