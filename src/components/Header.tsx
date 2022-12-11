import styled from 'styled-components';
import { BiBookOpen } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Container = styled.header`
    height: 7vh;
    background-color: #c38e24;
    display: flex;
    position: relative;
`;
const Icon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.5vh;
`;
const TouchBarContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
`;

const TouchBar = styled.button`
    margin-right: 10px;
    font-size: 3vh;
    background-color: transparent;
    color: #090400;
    border: none;
    &:focus {
        border-bottom: 2px solid #780909;
    }
`;

const Header = () => {
    return (
        <>
            <Container>
                <Link to="/">
                    <Icon>
                        <BiBookOpen />
                        BookFocus
                    </Icon>
                </Link>
                <TouchBarContainer>
                    <Link to="bookreport">
                        <TouchBar>독서록 작성</TouchBar>
                    </Link>
                    <Link to="booklist/:bookId">
                        <TouchBar>독서록 작성</TouchBar>
                    </Link>
                    <Link to="booksearch">
                        <TouchBar>독서 검색</TouchBar>
                    </Link>
                </TouchBarContainer>
            </Container>
        </>
    );
};

export default Header;
