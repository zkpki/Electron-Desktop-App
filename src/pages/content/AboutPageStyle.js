import styled from 'styled-components';
import { palette } from 'styled-theme/dist';

const AboutContainerWrapper = styled.div`
    padding: 20px;  
    p{
        text-align: justify;
    }
    .imageContainer{
        margin: 50px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .image {
            max-width: 250px;
            margin: 0 10px;
            & img {
                width: 100%;
            }
            
        }
    }
    .ant-btn.button {
        margin-top: 20px;
        &:hover{
            color: ${palette('primary', 0)};
        }
    }
`;

export default AboutContainerWrapper;
