import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
export default function App(){
    return(
        <>
        <div className="container fluid">
            <Comp1/>
            <Comp2/>
            </div>
            <div className="container">
            <Comp3/>
            </div>
            <div className="container fluid">
            <Comp4/>
            </div>
            
        
        </>
    )
}