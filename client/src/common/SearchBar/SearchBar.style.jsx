import tw, { styled } from 'twin.macro';

export const SearchBarWrapper = styled.div`
  ${tw`
    flex 
    flex-col
  `}

  input{
    ${tw`
      border
      rounded 
      border-2 
      border-black
      border-opacity-20 
      text-2xl 
      px-3
      py-1
    `}
  }
`;
