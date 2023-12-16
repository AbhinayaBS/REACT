function Car({carName}) // we use props
{
    //check condition
    if(carName == "JCB")
    {
        throw new Error("JCB is not a car")
    }
    return(
        <div>
            {carName}
        </div>
    )
}
