export const ListItem = (props: { id: number; name: string; age: number; }) => {
    const { id, name, age } = props;
    return (
        <p>
            {id} : {name}({age})
        </p>
    )
}