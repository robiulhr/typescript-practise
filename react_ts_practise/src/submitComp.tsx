type propsType = {
    type:string
    onClick:()=>void
}

export default function(props:propsType){
    return <div>
        <input type={props.type} onClick={props.onClick}/>
    </div>
}