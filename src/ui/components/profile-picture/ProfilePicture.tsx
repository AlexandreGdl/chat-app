import styled from "styled-components";

export const ProfilePicture = (props: ProfilePictureProps) => (
  <PictureContainer {...props}>
    <CustomImg {...props} src={props.url ?? 'https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360'}  alt="profile_picture" />
  </PictureContainer>
);

const PictureContainer = styled.div<ProfilePictureProps>`
  width: ${props => props.size ?? '50'}px;
  height: ${props => props.size ?? '50'}px;
  border-radius: ${props => props.size ?? '50'}px;
  background-color: ${props => props.theme.colors.GRAY_3};
`;

const CustomImg = styled.img<ProfilePictureProps>`
  border-radius: ${props => props.size ?? '50'}px;
  background-color: ${props => props.theme.colors.GRAY_3};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;