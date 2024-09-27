import ReactDOM from 'react-dom/client'
const obj=new Date()
const h=obj.getHours()
const style={}
let c
if(h<12){
c="good morning"
style.color="green"

}
 else if(h>=12 && h<=17){
    c="good afternoon"
    style.color="black"

}
else {
    c="good evening"
    style.color="red"
}
const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(
    
    <>
   <h1 style={style}>{c}</h1>
    </>
)