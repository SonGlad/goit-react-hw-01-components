import {ContainerStyle} from './Container.style';

export const Container = ({children}) => {
    return (
        <ContainerStyle>
            <div className='container'>{children}</div>
        </ContainerStyle>
    )
};