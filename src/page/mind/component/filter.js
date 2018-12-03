import React from 'react';

function GoodsHeader(props){
    return (<tr><th colSpan="2">{props.type}</th></tr>)
}
function GoodsRow(props){
    return (<tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
    </tr>)
}
class filter extends React.Component {

    render() {
        var lists = this.props.lists;
        let typeArr=[];
        let finalLists=[];
        let filterName=this.props.goodsName;
        let isStocked = this.props.showStocked;
        lists.forEach(item=>{
            if(typeArr.indexOf(item.category)===-1){
                typeArr.push(item.category);
                finalLists.push({type:item.category,list:[item]})
            }else{
                for(let i=0;i<finalLists.length;i++){
                    if(finalLists[i].type===item.category){
                        finalLists[i].list.push(item)
                    }
                }
            }
        });

        var rows = [];
        finalLists.forEach(item=>{
            rows.push(<GoodsHeader type={item.type} key={item.type}/>);
            item.list.forEach(goods=>{
                if(filterName&&isStocked){
                    if(goods.name.indexOf(filterName)>-1&&goods.stocked){
                        rows.push(<GoodsRow name={goods.name} price={goods.price} key={goods.name}/>)
                    }
                }else if(!filterName&&!isStocked){
                    rows.push(<GoodsRow name={goods.name} price={goods.price} key={goods.name}/>)
                }else if(filterName){
                    if(goods.name.indexOf(filterName)>-1){
                        rows.push(<GoodsRow name={goods.name} price={goods.price} key={goods.name}/>)
                    }
                }else if(isStocked){
                    if(goods.stocked){
                        rows.push(<GoodsRow name={goods.name} price={goods.price} key={goods.name}/>)
                    }
                }
            })
        });
        return (<div>
            <table>
                <thead>
                <tr><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>)
    }
}

export default filter;