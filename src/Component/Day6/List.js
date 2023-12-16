export default function List()
{
    //const animals=["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto"]
    //const result=animals.map((ani)=><li>{ ani }</li>)
    //const result=animals.map((ani,index)=><li key={index}>{ index }=> {ani}</li>)

    const college=[{id:1, stuName:"Abhinaya",age:20},
                    {id:2,stuName:"Akshatha",age:19},
                    {id:3,stuName:"Nila",age:19},]
    const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)
    return(
        <div style={{backgroundColor:"orange"}}> 
            <h1>List of students</h1>
            {display}
        </div>
    )
}