import styled from "styled-components";

export const CarouselCardContainer = styled.div`
 display: flex;
  flex-direction: column;
  height: 450px;
  width: 90%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-bottom: 20px;
`

export const CoverImageAndTwitterIcon = styled.div`
        width: 100%;
    height: 230px;
    position: relative;
`
export const CoverImage = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
`


export const TwitterIcon = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
position: absolute;
top: 10px;
.twitterIcon{
    width: 25px; 
    height: 25px; 
    z-index: 101;
    color:#fff;
}
`



export const UserProfile = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 80px;
`

export const ProfileImageContainer = styled.div`
    width: 35%;
    height: 100%;
    z-index: 100;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        border: 1px solid  white;
        object-fit: cover;
        border-radius: 50%;
        position: absolute;
        top: -25px;

    }
`

export const UserName = styled.div`
width: 30%;
h4{
    padding: 0;
    margin: 0;
    margin-top: 5px;
    font-size: 16px;

}
p{
    padding: 0;
    margin: 0;
    font-size: 10px;
    color: gray;
}
`

export const CreationDate = styled.p`
width: 20%;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-left: 5px;
    font-size: 10px;
    color: gray;
`


export const DescriptionContainer = styled.div`
height: 100px;
width: 100%;
overflow: hidden;
white-space: initial;
    p{
    padding:5px;
    margin: 0;
    font-size: 14px;
    text-overflow: ellipsis;
    line-height: 1;
    }
   
`

export const SocialIcons = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-top: 10px;


.shareIcon{
    
    color:#E91E63;
    width: 20px; 
    height: 20px
}

.refreshIcon{
    
    color:#E91E63;
    width: 20px; 
    height: 20px; 
    margin-left: 10px
}

.heartIcon{
    
    color:#E91E63;
    width: 20px; 
    height: 20px; 
    margin: 0 10px
}
`