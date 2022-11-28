
interface AvatarProp{
    className?: string
}

export const Avatar = (props: AvatarProp) => {
    return <img className={props.className}
                src={'https://st.depositphotos.com/1784673/1318/i/600/depositphotos_13185368-stock-photo-white-kitten-with-blue-eyes.jpg'}/>
}

