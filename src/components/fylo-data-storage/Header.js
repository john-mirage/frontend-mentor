import styled from "styled-components";
import brandLogo from "@assets/fylo-data-storage/logo.svg";
import documentIcon from "@assets/fylo-data-storage/icon-document.svg";
import folderIcon from "@assets/fylo-data-storage/icon-folder.svg";
import uploadIcon from "@assets/fylo-data-storage/icon-upload.svg";

const Container = styled.header`
    width: 100%;
    height: auto;
    padding: 4rem;
    background-color: ${props => props.theme.darkBlue};
    border-top-left-radius: 1rem;
    border-top-right-radius: 10rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

const Logo = styled.img`
    width: auto;
    height: 4.8rem;
    margin-bottom: 4rem;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: auto;
`;

const Link = styled.a`
    flex: 0 0 5.6rem;
    position: relative;
    width: 5.6rem;
    height: 5.6rem;
    margin-right: 2rem;
    background-color: ${props => props.theme.veryDarkBlue};
    border-radius: 1rem;

    &:last-child {
        margin-right: 0;
    }
`;

const Icon = styled.img`
    position: absolute;
    inset: 0;
    margin: auto;
`;

function Header() {
    return (
        <Container>
            <Logo src={brandLogo.src} />
            <Navigation>
                <Link>
                    <Icon src={documentIcon.src} />
                </Link>

                <Link>
                    <Icon src={folderIcon.src} />
                </Link>

                <Link>
                    <Icon src={uploadIcon.src} />
                </Link>
            </Navigation>
        </Container>
    );
}

export default Header;