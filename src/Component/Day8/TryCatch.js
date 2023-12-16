import React from 'react'
export default function TryCatch({fruit})
{
    try{
        if(fruit === "Onion")
        {
            throw new Error("not a fruit")
        }
    }
    catch(error)
    {
        console.log("Not A Fruit")
        document.write(error)
    }
    finally{
        document.write("  Always Executed")
    }

    return(
        <div>
            {fruit}
        </div>
    )
}