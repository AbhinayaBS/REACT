export default function List() {
    const college = [
        { id: '1', name: 'Abhinaya' },
        { id: '2', name: 'Akshatha' },
        { id: '3', name: 'Nila' },
        { id: '4', name: 'ASM' }
    ];

    const result = college.map((clg) => <li key={clg.id}>{clg.id} = {clg.name}</li>);

    return (
        <div style={{backgroundColor:"pink"}}>
            <ul type="none">
                {result}
            </ul>
        </div>
    );
}