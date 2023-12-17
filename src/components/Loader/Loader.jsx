import { Oval } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Oval
        height={40}
        width={40}
        color="#00BFFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#87ceeb"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Wrapper>
  );
};
