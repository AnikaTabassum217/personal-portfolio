import React from "react";

const Rough=()=>{
    const fruits=["Apple","Mango","Grapes"]
    return(
        <>
        <div className="flex justify-center items-center">Hello Anika </div>
        {
            fruits.map((fruit:string,index:number)=>{
                return(
                    <>
                    {
                        fruit
                    }
                    </>
                )
            })
        }
        </>
    )
}
export default Rough